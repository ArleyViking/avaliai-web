import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Layout } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";

export function AISection() {
  return (
    <section className="AISection">
      <HeaderSectionChecklist
        title="Arquitetura da informação"
        subtitle={
          "Um checklist de heurísticas sobre os aspectos de arquitetura da informação no seu software."
        }
        icon={Layout}
      />

      <div className="Items-AI">
        <CategoryCard title="Arquitetura da informação" />
        <CategoryCard title="Layout" />
        <CategoryCard title="Responsividade" />
      </div>
    </section>
  );
}
