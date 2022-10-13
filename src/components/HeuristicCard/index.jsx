import "./styles.scss";

export function HeuristicCard({ title, description }) {
  return (
    <div className="HeuristicCard">
      <div className="Content">
        <div className="title">
          <p>Categoria</p>
          <p className="title-heuristic">{title}</p>
          <p className="description-heuristic">{description}</p>
        </div>
        <div className="data">
          <p> 12 Heurísticas</p>
          <p>Fonte utilizada: Artigo acadêmico</p>
        </div>
      </div>
    </div>
  );
}
