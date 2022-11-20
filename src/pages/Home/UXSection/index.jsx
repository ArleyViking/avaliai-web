import { HeaderSectionChecklist } from "../HeaderSectionChecklist";
import { Smiley } from "phosphor-react";
import "./styles.scss";
import { CategoryCard } from "../../../components/CategoryCard";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { Link } from "react-router-dom";

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
          categories?.slice(0, 4).map((category, i) => (
            <WithScrollReveal delay={i * 500} key={category.id}>
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
      <div className="Items-UX" id="items-responsive">
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
