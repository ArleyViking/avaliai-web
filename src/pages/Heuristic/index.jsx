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
import emptyState from "@/assets/empty.png";
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

  console.log(heuristica);

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

  const { data: heuristica_data } = useSWR(
    `/heuristica/${heuristicId}`,
    fetcher
  );

  if (itens) {
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
        </div>
      </div>
    );
  } else {
    const categoria = heuristica_data?.categoria?._id;

    console.log("categoria", categoria);

    const checklist = heuristica_data?.checklist?._id;

    return (
      <div className="Heuristic">
        <div className="header-heuristic">
          <div className="content-wrapper-heuristic">
            <div className="content-heuristic">
              <div className="back">
                <a href="javascript:history.back()">
                  <ArrowLeft size={24} /> Heurística
                </a>
              </div>
              <div>
                <h2 className="title-heuristic">{heuristica_data?.nome}</h2>
                <p className="description-heuristic">
                  {heuristica_data?.descricao}
                </p>
                <div className="datas">
                  <p> {count_all} Itens de verificação</p>
                  <p>
                    Fonte utilizada:{" "}
                    <a target="_blank" href={heuristica_data?.fonte}>
                      {heuristica_data?.tipo_fonte}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumb">
          <Link to={`/checklist/${checklist}`}>
            <button
              onclick="location.href = document.referrer;"
              className="item"
            >
              <Folders size={24} /> <p>Lista de categorias</p>
            </button>
          </Link>
          <CaretRight weight="bold" />
          <a href="javascript:history.back()">
            <div className="item">
              <FileText size={24} /> <p>Lista de heurísticas</p>
            </div>
          </a>
          <CaretRight weight="bold" />
          <div className="item">
            <ListChecks size={24} /> <p>Lista de itens de verificação</p>
          </div>
        </div>
        <WithScrollReveal delay={2000}>
          <div className="empty-state">
            <div className="Colaboration">
              <div className="imagem-empty">
                <img src={emptyState} />
              </div>
              <div className="text-colaborations">
                <p className="title-c">Ainda não temos nenhum item aqui...</p>
                <p className="subtitle-c">
                  Você conhece algum conteúdo sobre? Se quiser nos <br />{" "}
                  ajudar, compartilhe cosnoco.
                </p>
              </div>
              <Link to="/contribua">Contribua conosco</Link>
            </div>
          </div>
        </WithScrollReveal>
      </div>
    );
  }
}
