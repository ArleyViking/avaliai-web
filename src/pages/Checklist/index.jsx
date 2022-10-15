import { ArrowLeft, Folders } from "phosphor-react";
import { Link } from "react-router-dom";
import image from "../../assets/img-nielsen.svg";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { CategoryCard } from "../../components/CategoryCard";
import useSWR from "swr";

import { fetcher } from "../../services/fetcher";

export function Checklist() {
  const { id: checklistId } = useParams();

  const { data: categories } = useSWR(`/categoria/${checklistId}`, fetcher);

  return (
    <div className="Checklist">
      <div className="header-checklist">
        <div className="content-wrapper-checklist">
          <div className="content-all">
            <div className="content-checklist">
              <div className="back">
                <Link to="/">
                  <ArrowLeft size={24} /> Checklist{" "}
                </Link>
              </div>
              <div>
                <h2 className="title-checklist">
                  {categories?.[0].id_check.nome}
                </h2>
                <p className="description-checklist">
                  {categories?.[0].id_check.descricao}
                </p>
                <div className="datas">
                  <p> {categories?.[0].id_check.num_cat} Categorias</p>
                  <p>
                    {" "}
                    {categories?.[0].id_check.num_heu} Heurísticas no total
                  </p>
                  <p>
                    {" "}
                    {categories?.[0].id_check.num_itens} Itens de verificação no
                    total
                  </p>
                </div>
              </div>
            </div>
            <div className="image">
              <img src={image} />
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb">
        <Folders size={24} />
        <p>Lista de categorias</p>
      </div>

      <div className="categorylist">
        {!!categories &&
          categories?.map((category) => (
            <WithScrollReveal delay={800} key={category.id}>
              <Link to={`/checklist/categoria/${category.id}`}>
                <CategoryCard
                  title={category.nome}
                  num_heu={category.num_heu}
                  num_itens={category.num_itens}
                />
              </Link>
            </WithScrollReveal>
          ))}
      </div>
    </div>
  );
}
