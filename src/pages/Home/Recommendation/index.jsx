import { CardChecklist } from "./CardChecklist";
import "./styles.scss";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { Link } from "react-router-dom";
import { fetcher } from "../../../services/fetcher";
import useSWR from "swr";

import { checklists as checklistsConstants } from "@/constants/checklist";

export function RecommendationSection() {
  const { data: checklists } = useSWR("/checklists", fetcher);

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
        {!!checklists &&
          checklists?.slice(0, 3).map((checklist) => (
            <WithScrollReveal delay={800} key={checklist.id}>
              <Link to={`/checklist/${checklist.id}`}>
                <CardChecklist
                  title={checklist.nome}
                  descrition={checklist.descricao}
                  imagem={checklistsConstants[checklist.id]}
                />
              </Link>
            </WithScrollReveal>
          ))}
      </div>
    </section>
  );
}
