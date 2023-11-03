import "./styles.scss";
export function CategoryCard({ title, num_heu, num_itens }) {
  const trackCardClick = () => {
    // Registre o evento personalizado quando o card for clicado
    mixpanel.track({ "Categoria:": title }, { title, num_heu });
  };

  return (
    <div className="CategoryCard" onClick={trackCardClick}>
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
