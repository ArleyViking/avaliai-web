import { CardChecklist } from "./CardChecklist";
import "./styles.scss";
import imagem from "@/assets/img-nielsen.svg";
import imagem2 from "@/assets/imgtipos.svg";
import imagem3 from "@/assets/imgdesingvisual.svg";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { Link } from "react-router-dom";

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
          <Link to="/checklist/633ce4297c12faefc8116933">
            <CardChecklist
              title="Heurísticas de Nielsen"
              descrition=" A maioria das heurísticas desse acervo organizadas entre as 10 heurísticas de Nielsen."
              imagem={imagem}
            />
          </Link>
        </WithScrollReveal>

        <WithScrollReveal delay={800}>
          <Link to="/checklist/633ce65cc5c02f4bf9082582">
            <CardChecklist
              title="Tipos de plataforma"
              descrition="Heurísticas para avaliar seu software levando em consideração a plataforma que foi feito"
              imagem={imagem2}
            />
          </Link>
        </WithScrollReveal>
        <WithScrollReveal delay={1200}>
          <Link to="/checklist/633ce9a43eb2734078de5813">
            <CardChecklist
              title="Design Visual"
              descrition="Heurísticas para avaliar as questões estéticas dos componentes e dos conteúdos da sua interface."
              imagem={imagem3}
            />
          </Link>
        </WithScrollReveal>
      </div>
    </section>
  );
}
