import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { UserCircle } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";

export function PESection() {
  return (
    <section className="PESection">
      <HeaderSectionChecklist
        title="Públicos específicos"
        subtitle={
          "Um checklist de heurísticas que levam em consideração caracteristicas de público específicos."
        }
        icon={UserCircle}
      />

      <div className="Items-PE">
        <CategoryCard title="Usuários idosos" />
        <CategoryCard title="Deficiêntes visuais" />
        <CategoryCard title="Usuários de jogos digitais" />
        <CategoryCard title="Aplicativos da área da saúde" />
      </div>
    </section>
  );
}
