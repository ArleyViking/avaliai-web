import "./styles.scss";
import imgChecks from "@/assets/img-checks.svg";
import { WithScrollReveal } from "@/components/WithScrollReveal";
import { Link } from "react-router-dom";

export function BannerAbout() {
  return (
    <WithScrollReveal delay={600}>
      <div className="About">
        <div className="text">
          <h3 className="title">
            Conheça um pouco mais sobre esse projeto e como você pode usufruir
            dele.
          </h3>
          <Link to="/sobreoacervo">Conhecer o acervo</Link>
        </div>
        <img src={imgChecks} />
      </div>
    </WithScrollReveal>
  );
}
