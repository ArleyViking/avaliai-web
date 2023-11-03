import "./styles.scss";

import mixpanel from "mixpanel-browser"; // Importe o Mixpanel

export function CategoryCard({ title, num_heu, num_itens }) {
  const trackCardClickCat = () => {
    // Registre o evento personalizado quando o card for clicado
    mixpanel.track({ "Categoria:": title }, { title, num_heu });
  };

  return (
    <div className="CategoryCard" onClick={trackCardClickCat}>
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
