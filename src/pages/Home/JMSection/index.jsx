import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { GameController } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { fetcher } from "../../../services/fetcher";
import useSWR from "swr";
import { Link } from "react-router-dom";

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
            <WithScrollReveal delay={500} key={category.id}>
              <Link
                to={`/checklist/categoria/${category.id}`}
                key={category.id}
              >
                <CategoryCard
                  title={category.nome}
                  num_heu={category.num_heu}
                  num_itens={category.num_itens}
                />
              </Link>
            </WithScrollReveal>
          ))}
      </div>

      <div className="Items-JM" id="items-responsive">
        {!!categories &&
          categories?.slice(0, 3).map((category) => (
            <WithScrollReveal delay={500} key={category.id}>
              <Link
                to={`/checklist/categoria/${category.id}`}
                key={category.id}
              >
                <CategoryCard
                  title={category.nome}
                  num_heu={category.num_heu}
                  num_itens={category.num_itens}
                />
              </Link>
            </WithScrollReveal>
          ))}
      </div>
    </section>
  );
}
