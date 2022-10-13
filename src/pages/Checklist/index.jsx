import { ArrowLeft, Folders } from "phosphor-react";
import { Link } from "react-router-dom";
import image from "../../assets/img-nielsen.svg";
import "./styles.scss";

import { CategoryCard } from "../../components/CategoryCard";

export function Checklist() {
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
                <h2 className="title-checklist">Heurísticas de Nielsen</h2>
                <p className="description-checklist">
                  A marioria das heurísticas desse acervo organizadas entre as
                  <br />
                  10 heurísticas de Nielsen.
                </p>
                <div className="datas">
                  <p> 10 Categorias</p>
                  <p> 95 Heurísticas no total</p>
                  <p> 120 Itens de verificação no total</p>
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
        <div className="col1">
          <Link to="/category">
            <CategoryCard title={"Visibilidade do status do sistema"} />
          </Link>
          <CategoryCard title={"Controle e liberdade do usuário"} />
          <CategoryCard title={"Prevenção de erros"} />
          <CategoryCard title={"Eficiência e flexibilidade de uso"} />
          <CategoryCard
            title={
              "Ajude os usuários a reconhecer, diagnosticar e recuperar erros"
            }
          />
        </div>
        <div className="col2">
          <CategoryCard
            title={"Correspondência entre o sistema e o mundo real."}
          />
          <CategoryCard title={"Consistência e padronização"} />
          <CategoryCard title={"Reconhecimento em vez de recordação"} />
          <CategoryCard title={"Estética e design minimalista"} />
          <CategoryCard title={"Ajuda e documentação"} />
        </div>
      </div>
    </div>
  );
}
