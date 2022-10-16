import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { GameController } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { fetcher } from "../../../services/fetcher";
import useSWR from "swr";

export function JMSection() {
  const { data: categories } = useSWR(
    "/categoria/633f846cfb49ad6a414ca74c",
    fetcher
  );
  const checklistIdRoute = categories?.[0].id_check._id;

  return (
    <section className="JMSection">
      <HeaderSectionChecklist
        title="Jogos móveis"
        subtitle={
          "Um checklist de heurísticas para avaliar aspectos de jogos digitais para dispositivos móveis."
        }
        icon={GameController}
        seeMoreLink={`/checklist/${checklistIdRoute}`}
      />

      <div className="Items-JM">
        {!!categories &&
          categories?.map((category) => (
            <WithScrollReveal delay={800} key={category.id}>
              <CategoryCard
                title={category.nome}
                num_heu={category.num_heu}
                num_itens={category.num_itens}
              />
            </WithScrollReveal>
          ))}
      </div>
    </section>
  );
}
