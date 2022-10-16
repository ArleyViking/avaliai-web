import { WithScrollReveal } from "@/components/WithScrollReveal";
import { DashItem } from "./DashItem";
import "./styles.scss";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";

export function MiniDash() {
  const { data: datas } = useSWR("/dash", fetcher);

  return (
    <div className="MiniDash">
      {!!datas &&
        datas?.map((data) => (
          <WithScrollReveal delay={800} key={data.nome}>
            <DashItem
              value={String(data.quant).padStart(2, "0")}
              label={data.nome}
            />
          </WithScrollReveal>
        ))}
    </div>
  );
}
