import { ArrowLeft, CaretRight, Folders, FileText } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { HeuristicCard } from "../../components/HeuristicCard";
import "./styles.scss";
import useSWR from "swr";

import { fetcher } from "../../services/fetcher";

export function Category() {
  const { id: categoryId } = useParams();

  const { data: heuristics } = useSWR(`/heuristicas/${categoryId}`, fetcher);

  const { id } = useParams();
  const { data: dates } = useSWR(`/dados_categoria/${id}`, fetcher);
  console.log(dates);
  return (
    <div className="Category">
      <div className="header-category">
        <div className="content-wrapper-category">
          <div className="content-category">
            <div className="back">
              <Link to={`/checklist/${heuristics?.[0].checklist}`}>
                <ArrowLeft size={24} /> Categoria
              </Link>
            </div>
            <div>
              <h2 className="title-category">
                {heuristics?.[0].categoria.nome}
              </h2>
              <div className="datas">
                <p>
                  {" "}
                  {dates?.[0].quant} {dates?.[0].nome}
                </p>
                <p>
                  {dates?.[1].quant} {dates?.[1].nome}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="item">
          <Folders size={24} /> <p>Lista de categorias</p>
        </div>
        <CaretRight weight="bold" />
        <div className="item">
          <FileText size={24} /> <p>Lista de heurísticas</p>
        </div>
      </div>

      <div className="heuristiclist">
        {!!heuristics &&
          heuristics?.map((heuristic) => (
            <Link to={`/checklist/categoria/heuristica/${heuristic._id}`}>
              <HeuristicCard
                title={heuristic.nome}
                description={heuristic.descricao}
                num_itens={heuristic.num_itens}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
