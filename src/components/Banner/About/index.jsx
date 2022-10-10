import "./styles.scss";
import imgChecks from "../../../assets/img-checks.svg";
import { WithScrollReveal } from "../../WithScrollReveal";

export function BannerAbout() {
  return (
    <WithScrollReveal>
      <div className="About">
        <div className="text">
          <h3 className="title">
            Conheça um pouco mais sobre esse projeto e <br /> como você pode
            usufruir dele.{" "}
          </h3>
          <a href="">Conhecer o acervo</a>
        </div>
        <img src={imgChecks} />
      </div>
    </WithScrollReveal>
  );
}
