import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Smiley } from "phosphor-react";
import "./styles.scss";
export function UXSection() {
  return (
    <section className="UXSection">
      <HeaderSectionChecklist
        title="Experiência do Usuário"
        subtitle={
          "Um checklist de heurísticas sobre a satisfação e experiência do usuário."
        }
        icon={Smiley}
      />
    </section>
  );
}
