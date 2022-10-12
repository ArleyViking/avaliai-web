import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { UserCircle } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";

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
        <WithScrollReveal delay={800}>
          <CategoryCard title="Usuários idosos" />
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <CategoryCard title="Deficiêntes visuais" />
        </WithScrollReveal>
        <WithScrollReveal delay={1600}>
          <CategoryCard title="Usuários de jogos digitais" />
        </WithScrollReveal>
        <WithScrollReveal delay={2000}>
          <CategoryCard title="Aplicativos da área da saúde" />
        </WithScrollReveal>
      </div>
    </section>
  );
}
