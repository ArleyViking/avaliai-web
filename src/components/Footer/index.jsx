import "./styles.scss";
import logo from "@/assets/icon-logo.svg";

export function Footer() {
  return (
    <div className="Footer">
      <div className="Content-footer">
        <div className="copy">
          <img src={logo} />
          <p>Copyright © 2022 avaliaí</p>
        </div>
        <p>
          <a href="https://repositorio.ufc.br/handle/riufc/70363" target="_blank"> Acesse a monografia</a> que deu origem a este projeto.
        </p>
      </div>
    </div>
  );
}
