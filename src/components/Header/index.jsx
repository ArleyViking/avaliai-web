import "./styles.scss";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <div className="content">
        <a href="#">
          <img className="logo" src={logo} alt="Logo" />
        </a>

        <nav className="navbar">
          <ul>
            <li>
              <a href=""> Tela inicial</a>{" "}
            </li>
            <li>
              <a href=""> Sobre o acervo</a>{" "}
            </li>
            <li>
              <a href=""> Contribua</a>{" "}
            </li>
          </ul>
        </nav>

        <button className="botaoPrimario">Nosso template</button>
      </div>
    </header>
  );
}
