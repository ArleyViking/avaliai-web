import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Layout } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";

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
        <WithScrollReveal delay={800}>
          <CategoryCard title="Arquitetura da informação" />
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <CategoryCard title="Layout" />
        </WithScrollReveal>
        <WithScrollReveal delay={1600}>
          <CategoryCard title="Responsividade" />
        </WithScrollReveal>
      </div>
    </section>
  );
}
