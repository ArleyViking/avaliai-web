import mixpanel from "mixpanel-browser"; // Importe o Mixpanel

import "./styles.scss";

export function CardChecklist({ title, descrition, imagem }) {
  const trackCardClick = () => {
    // Registre o evento personalizado quando o card for clicado
    mixpanel.track({ "Card:": title }, { title, descrition });
  };

  return (
    <div className="CardChecklist" onClick={trackCardClick}>
      <img className="Imagem" src={imagem} />

      <div className="text">
        <p className="title-card">{title}</p>
        <p className="descrition-card">{descrition}</p>
      </div>
    </div>
  );
}
