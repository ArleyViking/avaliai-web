import { DashItem } from "./DashItem";
import "./styles.scss";

export function MiniDash() {
  return (
    <div className="MiniDash">
      <DashItem value="08" label="Checklists pré-montados" />
      <DashItem value="40" label="Categorias diferentes" />
      <DashItem value="128" label="Heurísticas de design" />
      <DashItem value="+1800" label="Itens de verificação" />
    </div>
  );
}
