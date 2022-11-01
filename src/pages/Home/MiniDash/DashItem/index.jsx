import { WithScrollReveal } from "@/components/WithScrollReveal";
import { Counter } from "../../../../components/Stopwatch";
import "./styles.scss";

export function DashItem({ value, label }) {
  return (
    <WithScrollReveal>
      <div className="DashItem">
        <h4>
          <Counter count={value} label={label} />
        </h4>
        <p>{label}</p>
      </div>
    </WithScrollReveal>
  );
}
