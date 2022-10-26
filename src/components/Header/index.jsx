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

        <a
          href="https://docs.google.com/spreadsheets/d/18R6A4kaGIvC0CZaRwKMPakpP9ATRurFSqV1MGuKzqo4/edit?usp=sharing"
          target="_blank"
          className="botaoPrimario"
        >
          Nosso template
        </a>
      </div>
    </header>
  );
}
