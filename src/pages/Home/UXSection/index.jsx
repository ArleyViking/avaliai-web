import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Smiley } from "phosphor-react";
import "./styles.scss";
import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import useSWR from "swr";
import { api } from "@/services/api";

async function fetcher(url) {
  const response = await api.get(url);
  return response.data;
}
export function UXSection() {
  const { data: categories } = useSWR(
    "/categoria/633f8408fb49ad6a414ca748",
    fetcher
  );
  const checklistIdRoute = categories?.[0].id_check._id;

  return (
    <section className="UXSection">
      <HeaderSectionChecklist
        title="Experiência do Usuário"
        subtitle={
          "Um checklist de heurísticas sobre a satisfação e experiência do usuário."
        }
        icon={Smiley}
        variant={"regular"}
        seeMoreLink={`/checklist/${checklistIdRoute}`}
      />

      <div className="Items-UX">
        {!!categories &&
          categories?.slice(0, 4).map((category) => (
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
