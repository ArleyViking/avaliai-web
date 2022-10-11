import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { FirstAidKit } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";

export function MHSection() {
  return (
    <section className="MHSection">
      <HeaderSectionChecklist
        title="M-Health"
        subtitle={
          "Um checklis com heurísticas para avaliar softwares voltados para a área da saúde."
        }
        icon={FirstAidKit}
      />

      <div className="Items-MH">
        <CategoryCard title="Heurísticas de Nielsen" />
        <CategoryCard title="Navegação e interação" />
        <CategoryCard title="Design visual" />
        <CategoryCard title="Privacidade" />
      </div>
    </section>
  );
}
