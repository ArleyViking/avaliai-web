import "./styles.scss";
import imgColaborations from "@/assets/imgColaboration.png";
import { Link } from "react-router-dom";

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
      <Link to="/contribua">Contribua conosco</Link>
    </div>
  );
}
