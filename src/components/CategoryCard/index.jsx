import "./styles.scss";
export function CategoryCard({ title, num_heu, num_itens }) {
  return (
    <div className="CategoryCard">
      <div className="Content">
        <div className="title">
          <p>Categoria</p>
          <p className="title-category">{title}</p>
        </div>
        <div className="data">
          <p> {num_heu} Heurísticas</p>
          <p>{num_itens} Itens de verificação</p>
        </div>
      </div>
    </div>
  );
}
