import React from "react";
import mixpanel from "mixpanel-browser"; // Importe o Mixpanel

import "./styles.scss";

export function CardChecklist({ title, description, imagem }) {
  const trackCardClick = () => {
    // Registre o evento personalizado quando o card for clicado
    mixpanel.track("Card Clicado", { title, description });
  };

  return (
    <div className="CardChecklist" onClick={trackCardClick}>
      <img className="Imagem" src={imagem} />

      <div className="text">
        <p className="title-card">{title}</p>
        <p className="description-card">{description}</p>
      </div>
    </div>
  );
}
