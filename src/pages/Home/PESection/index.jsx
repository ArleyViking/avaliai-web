import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { UserCircle } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { fetcher } from "../../../services/fetcher";
import useSWR from "swr";

export function PESection() {
  const { data: categories } = useSWR(
    "/categoria/633f844afb49ad6a414ca74a",
    fetcher
  );

  const checklistIdRoute = categories?.[0].id_check._id;

  return (
    <section className="PESection">
      <HeaderSectionChecklist
        title="Públicos específicos"
        subtitle={
          "Um checklist de heurísticas que levam em consideração caracteristicas de público específicos."
        }
        icon={UserCircle}
        seeMoreLink={`/checklist/${checklistIdRoute}`}
      />

      <div className="Items-PE">
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
