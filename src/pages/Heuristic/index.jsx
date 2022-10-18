import {
  ArrowLeft,
  Folders,
  FileText,
  CaretRight,
  ListChecks,
} from "phosphor-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { ItemVerCard } from "../../components/ItemVerCard/ItemVerCard";
import { fetcher } from "../../services/fetcher";
import "./styles.scss";

export function Heuristic() {
  const { id: heuristicId } = useParams();

  const { data } = useSWR(
    `/itensverificacao/${heuristicId}?pagina=0&tam_pagina=10`,
    fetcher
  );

  const count = data?.count;

  const itens = data?.itens;

  const heuristica = itens?.[0]?.heuristica;
  console.log();

  return (
    <div className="Heuristic">
      <div className="header-heuristic">
        <div className="content-wrapper-heuristic">
          <div className="content-heuristic">
            <div className="back">
              <Link to={`/checklist/categoria/${heuristica?.categoria}`}>
                <ArrowLeft size={24} /> Heurística
              </Link>
            </div>
            <div>
              <h2 className="title-heuristic">{heuristica?.nome}</h2>
              <p className="description-heuristic">{heuristica?.descricao}</p>
              <div className="datas">
                <p> {count} Itens de verificação</p>
                <p>
                  Fonte utilizada: <a href="#">Artigo acadêmico</a>
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
        <CaretRight weight="bold" />
        <div className="item">
          <ListChecks size={24} /> <p>Lista de itens de verificação</p>
        </div>
      </div>

      <div className="heuristiclist">
        {!!itens &&
          itens?.map((item, i) => (
            <ItemVerCard
              key={item._id}
              ask={item.pergunta}
              id={`checkbox-${item._id}`}
            />
          ))}
      </div>
    </div>
  );
}
