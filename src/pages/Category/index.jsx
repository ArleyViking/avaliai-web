import { ArrowLeft, CaretRight, Folders, FileText } from "phosphor-react";
import { Link } from "react-router-dom";
import { HeuristicCard } from "../../components/HeuristicCard";
import "./styles.scss";

export function Category() {
  return (
    <div className="Category">
      <div className="header-category">
        <div className="content-wrapper-category">
          <div className="content-category">
            <div className="back">
              <Link to="/checklist">
                <ArrowLeft size={24} /> Categoria
              </Link>
            </div>
            <div>
              <h2 className="title-category">
                Visibilidade do status do sistema
              </h2>
              <div className="datas">
                <p> 12 Heurísticas no total</p>
                <p> 40 Itens de verificação</p>
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
        <HeuristicCard
          title={"Mudança de comportamento"}
          description={
            "O feedback sobre o desempenho deve  ser dado fornecendo dados sobre o comportamento registrado ou avaliando o desempenho em relação a um padrão definido."
          }
        />
        <HeuristicCard
          title={"Visibilidade do status do sistema"}
          description={
            "O design deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback apropriado dentro de um período de tempo razoável."
          }
        />
        <HeuristicCard
          title={"Visualizações do app sem interrupções"}
          description={
            "Os aplicativos móveis NÃO devem interromper a atividade atual do usuário."
          }
        />
        <HeuristicCard
          title={"Visibilidade do estado da aplicação"}
          description={
            "A aplicação deve manter o usuário informado sobre todos os processos e mudanças de estado por meio de feedback apropriado e em tempo razoável."
          }
        />
      </div>
    </div>
  );
}
