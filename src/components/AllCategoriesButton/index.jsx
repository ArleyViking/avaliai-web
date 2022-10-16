import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

import "./styles.scss";
export function AllCategoriesButton({ to }) {
  return (
    <div className="AllCatetoriesButton">
      <Link to={to}>
        Todas as categorias
        <CaretRight size={20} />
      </Link>
    </div>
  );
}
