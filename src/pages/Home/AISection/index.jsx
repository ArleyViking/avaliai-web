import "./styles.scss";

import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Layout } from "phosphor-react";

import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import useSWR from "swr";
import { api } from "@/services/api";

async function fetcher(url) {
  const response = await api.get(url);
  return response.data;
}

export function AISection() {
  const { data: categories } = useSWR(
    "/categoria/633f8430fb49ad6a414ca749",
    fetcher
  );
  const checklistIdRoute = categories?.[0].id_check._id;
  return (
    <section className="AISection">
      <HeaderSectionChecklist
        title="Arquitetura da informação"
        subtitle={
          "Um checklist de heurísticas sobre os aspectos de arquitetura da informação no seu software."
        }
        icon={Layout}
        seeMoreLink={`/checklist/${checklistIdRoute}`}
      />

      <div className="Items-AI">
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
