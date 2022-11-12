import { ArrowLeft, Folders } from "phosphor-react";
import { Link } from "react-router-dom";

import "./styles.scss";
import { useParams } from "react-router-dom";
import { CategoryCard } from "../../components/CategoryCard";
import useSWR from "swr";

import { fetcher } from "../../services/fetcher";
import { checklists as checklistsConstants } from "@/constants/checklist";

export function Checklist() {
  const { id: checklistId } = useParams();

  const { data: categories } = useSWR(`/categoria/${checklistId}`, fetcher);
  const image = checklistsConstants[checklistId];

  const { data: dates } = useSWR(`/dados_checklist/${checklistId}`, fetcher);

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
                  <p>
                    {" "}
                    {dates?.[0].quant} {dates?.[0].nome}
                  </p>
                  <p>
                    {" "}
                    {dates?.[1].quant} {dates?.[1].nome}
                  </p>
                  <p>
                    {" "}
                    {dates?.[2].quant} {dates?.[2].nome}
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
            <Link to={`/checklist/categoria/${category.id}`} key={category.id}>
              <CategoryCard
                title={category.nome}
                num_heu={category.num_heu}
                num_itens={category.num_itens}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
