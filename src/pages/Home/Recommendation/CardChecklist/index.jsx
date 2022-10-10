import "./styles.scss";

export function CardChecklist({ title, descrition, imagem }) {
  return (
    <div className="CardChecklist">
      <img className="Imagem" src={imagem} />

      <div className="text">
        <p className="title-card">{title}</p>
        <p className="descrition-card">{descrition}</p>
      </div>
    </div>
  );
}
