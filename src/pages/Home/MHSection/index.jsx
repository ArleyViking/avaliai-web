import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { FirstAidKit } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { fetcher } from "../../../services/fetcher";
import useSWR from "swr";
import { Link } from "react-router-dom";

export function MHSection() {
  const { data: categories } = useSWR(
    "/categoria/633f8458fb49ad6a414ca74b",
    fetcher
  );

  const checklistIdRoute = categories?.[0].id_check._id;

  return (
    <section className="MHSection">
      <HeaderSectionChecklist
        title="M-Health"
        subtitle={
          "Um checklis com heurísticas para avaliar softwares voltados para a área da saúde."
        }
        icon={FirstAidKit}
        seeMoreLink={`/checklist/${checklistIdRoute}`}
      />

      <div className="Items-MH">
        {!!categories &&
          categories?.slice(0, 4).map((category) => (
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
      <div className="Items-MH" id="items-responsive">
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
