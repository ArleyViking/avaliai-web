import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Smiley } from "phosphor-react";
import "./styles.scss";
import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";

export function UXSection() {
  return (
    <section className="UXSection">
      <HeaderSectionChecklist
        title="Experiência do Usuário"
        subtitle={
          "Um checklist de heurísticas sobre a satisfação e experiência do usuário."
        }
        icon={Smiley}
        variant={"regular"}
      />

      <div className="Items-UX">
        <WithScrollReveal delay={800}>
          <CategoryCard title="Experiência simples" />
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <CategoryCard title="Experiência acionável" />
        </WithScrollReveal>
        <WithScrollReveal delay={1600}>
          <CategoryCard title="Experiência inteligente" />
        </WithScrollReveal>
        <WithScrollReveal delay={2000}>
          <CategoryCard title="Experiência agradável" />
        </WithScrollReveal>
      </div>
    </section>
  );
}
