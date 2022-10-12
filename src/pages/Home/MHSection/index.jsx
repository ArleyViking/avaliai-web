import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { FirstAidKit } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";

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
        <WithScrollReveal delay={800}>
          <CategoryCard title="Heurísticas de Nielsen" />
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <CategoryCard title="Navegação e interação" />
        </WithScrollReveal>
        <WithScrollReveal delay={1600}>
          <CategoryCard title="Design visual" />
        </WithScrollReveal>
        <WithScrollReveal delay={2000}>
          <CategoryCard title="Privacidade" />
        </WithScrollReveal>
      </div>
    </section>
  );
}
