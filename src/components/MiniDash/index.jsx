import { WithScrollReveal } from "../WithScrollReveal";
import { DashItem } from "./DashItem";
import "./styles.scss";

export function MiniDash() {
  return (
    <div className="MiniDash">
      <DashItem value="08" label="Checklists montados" />
      <DashItem value="38" label="Categorias diferentes" />
      <DashItem value="142" label="Heurísticas de design" />
      <DashItem value="+1800" label="Itens de verificação" />
    </div>
  );
}
