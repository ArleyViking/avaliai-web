import { WithScrollReveal } from "@/components/WithScrollReveal";
import "./styles.scss";

export function DashItem({ value, label }) {
  return (
    <WithScrollReveal>
      <div className="DashItem">
        <h4>{value}</h4>
        <p>{label}</p>
      </div>
    </WithScrollReveal>
  );
}
