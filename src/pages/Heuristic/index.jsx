import {
  ArrowLeft,
  Folders,
  FileText,
  CaretRight,
  ListChecks,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { ItemVerCard } from "../../components/ItemVerCard/ItemVerCard";
import { useIntersection } from "../../hooks/useIntersection";
import { fetcher } from "../../services/fetcher";
import "./styles.scss";

import { WithScrollReveal } from "@/components/WithScrollReveal";

export function Heuristic() {
  const [data, setData] = useState({});

  const [hasMore, setHasMore] = useState(true);

  const { id: heuristicId } = useParams();

  const [page, setPage] = useState(0);

  const [visible, instanceRef] = useIntersection();

  const count = data?.itens?.length;

  const itens = data?.itens;

  const heuristica = itens?.[0]?.heuristica;

  const { data: dates } = useSWR(
    `/itensverificacao/${heuristicId}?pagina=${page}&tam_pagina=15`,
    fetcher
  );

  const count_all = dates?.count;

  useEffect(() => {
    fetcher(
      `/itensverificacao/${heuristicId}?pagina=${page}&tam_pagina=15`
    ).then((data) => {
      if (data.itens.length === 0) {
        setHasMore(false);
        return;
      }
      setData((oldData) => ({
        ...oldData,
        itens: [...(oldData?.itens ?? []), ...data.itens],
      }));
    });
  }, [page]);

  useEffect(() => {
    if (visible) {
      setPage((oldPage) => oldPage + 1);
    }
  }, [visible]);

  const checklistId = heuristica?.checklist;
  const categoryId = heuristica?.categoria;

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
                <p> {count_all} Itens de verificação</p>
                <p>
                  Fonte utilizada:{" "}
                  <a target="_blank" href={heuristica?.fonte}>
                    {heuristica?.tipo_fonte}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumb">
        <Link to={`/checklist/${checklistId}`}>
          <div className="item">
            <Folders size={24} /> <p>Lista de categorias</p>
          </div>
        </Link>
        <CaretRight weight="bold" />
        <Link to={`/checklist/categoria/${categoryId}`} key={categoryId}>
          <div className="item">
            <FileText size={24} /> <p>Lista de heurísticas</p>
          </div>
        </Link>
        <CaretRight weight="bold" />
        <div className="item">
          <ListChecks size={24} /> <p>Lista de itens de verificação</p>
        </div>
      </div>

      <div className="itenslist">
        {!!itens &&
          itens?.slice(0, count_all)?.map((item, i) => (
            <WithScrollReveal key={item._id} delay={100}>
              <ItemVerCard
                ask={item.pergunta}
                id={`checkbox-${item._id}`}
                key={item.id}
              />
            </WithScrollReveal>
          ))}
        {hasMore && (
          <p ref={instanceRef} className="loading">
            Carregando itens de verificação
          </p>
        )}
      </div>
    </div>
  );
}
