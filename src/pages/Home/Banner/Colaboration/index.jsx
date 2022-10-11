import "./styles.scss";
import imgColaborations from "@/assets/imgColaboration.png";

export function Colaboration({ title, subtitle }) {
  return (
    <div className="Colaboration">
      <div className="imagem">
        <img src={imgColaborations} />
      </div>
      <div className="text-colaborations">
        <p className="title-c">{title}</p>
        <p className="subtitle-c">{subtitle}</p>
      </div>
      <a href="">Contribua conosco</a>
    </div>
  );
}
