import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { GameController } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";

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
        <CategoryCard title="Heurísticas de Nielsen para jogos" />
        <CategoryCard title="Jogabilidade" />
        <CategoryCard title="Particularidade de jogos móveis" />
        <CategoryCard title="Linguagem" />
      </div>
    </section>
  );
}
