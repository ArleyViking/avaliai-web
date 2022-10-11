import "./styles.scss";
export function CategoryCard({ title }) {
  return (
    <div className="CategoryCard">
      <div className="Content">
        <div className="title">
          <p>Categoria</p>
          <p className="title-category">{title}</p>
        </div>
        <div className="data">
          <p> 12 Heurísticas</p>
          <p>48 Itens de verificação</p>
        </div>
      </div>
    </div>
  );
}
