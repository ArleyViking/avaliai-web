import { CardChecklist } from "./CardChecklist";
import "./styles.scss";
import imagem from "@/assets/img-nielsen.svg";
import imagem2 from "@/assets/imgtipos.svg";
import imagem3 from "@/assets/imgdesingvisual.svg";
import { WithScrollReveal } from "@/components/WithScrollReveal";

export function RecommendationSection() {
  return (
    <section className="Recommendation">
      <div className="text">
        <h3 className="title">Checklists que recomendamos</h3>
        <p className="subtitle">
          Três checklists pré-montados que consideramos ser úteis para todo
          software.
        </p>
      </div>
      <div className="items-card">
        <WithScrollReveal>
          <CardChecklist
            title="Heurísticas de Nielsen"
            descrition=" A maioria das heurísticas desse acervo organizadas entre as 10 heurísticas de Nielsen."
            imagem={imagem}
          />
        </WithScrollReveal>
        <WithScrollReveal delay={800}>
          <CardChecklist
            title="Tipos de plataforma"
            descrition="Heurísticas para avaliar seu software levando em consideração a plataforma que foi feito"
            imagem={imagem2}
          />
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <CardChecklist
            title="Design Visual"
            descrition="Heurísticas para avaliar as questões estéticas dos componentes e dos conteúdos da sua interface."
            imagem={imagem3}
          />
        </WithScrollReveal>
      </div>
    </section>
  );
}
