import "./styles.scss";
import logo from "../../assets/logo.svg";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header>
      <div className="content">
        <NavLink href="/">
          <span>
            <img className="logo" src={logo} alt="Logo" />
          </span>
        </NavLink>

        <nav className="navbar">
          <ul>
            <li>
              <NavLink href="/">
                <span> Tela inicial</span>
              </NavLink>
            </li>
            <li>
              <NavLink href="/sobreoacervo">
                <span>Sobre o acervo</span>
              </NavLink>
            </li>
            <li>
              <NavLink href="/contribua">
                <span> Contribua</span>
              </NavLink>{" "}
            </li>
          </ul>
        </nav>

        <button className="botaoPrimario">Nosso template</button>
      </div>
    </header>
  );
}
