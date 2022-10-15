import "./styles.scss";

export function HeuristicCard({ title, description, num_itens, fonte }) {
  return (
    <div className="HeuristicCard">
      <div className="Content">
        <div className="title">
          <p>Heurística</p>
          <p className="title-heuristic">{title}</p>
          <p className="description-heuristic">{description}</p>
        </div>
        <div className="data">
          <p> {num_itens} Itens de verificação</p>
        </div>
      </div>
    </div>
  );
}
