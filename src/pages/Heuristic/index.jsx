import {
  ArrowLeft,
  Folders,
  FileText,
  CaretRight,
  ListChecks,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { HeuristicCard } from "../../components/HeuristicCard";
import { ItemVerCard } from "../../components/ItemVerCard/ItemVerCard";
import "./styles.scss";

export function Heuristic() {
  return (
    <div className="Heuristic">
      <div className="header-heuristic">
        <div className="content-wrapper-heuristic">
          <div className="content-heuristic">
            <div className="back">
              <Link to="/categoria">
                <ArrowLeft size={24} /> Heurística
              </Link>
            </div>
            <div>
              <h2 className="title-heuristic">Mudança de comportamento</h2>
              <p className="description-heuristic">
                O feedback sobre o desempenho deve ser dado fornecendo dados
                sobre o comportamento registrado ou avaliando o desempenho em
                relação a um padrão definido.
              </p>
              <div className="datas">
                <p> 40 Itens de verificação</p>
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
        <ItemVerCard
          ask={
            "Existe alguma forma de feedback do sistema para cada ação do operador?"
          }
        />
      </div>
    </div>
  );
}
