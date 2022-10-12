import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { GameController } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";

export function JMSection() {
  return (
    <section className="JMSection">
      <HeaderSectionChecklist
        title="Jogos móveis"
        subtitle={
          "Um checklist de heurísticas para avaliar aspectos de jogos digitais para dispositivos móveis."
        }
        icon={GameController}
      />

      <div className="Items-JM">
        <WithScrollReveal delay={800}>
          <CategoryCard title="Heurísticas de Nielsen para jogos" />
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <CategoryCard title="Jogabilidade" />
        </WithScrollReveal>
        <WithScrollReveal delay={1600}>
          <CategoryCard title="Particularidade de jogos móveis" />
        </WithScrollReveal>
        <WithScrollReveal delay={2000}>
          <CategoryCard title="Linguagem" />
        </WithScrollReveal>
      </div>
    </section>
  );
}
