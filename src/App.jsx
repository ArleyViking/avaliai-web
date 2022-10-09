import { Header } from "./components/Header";
import "./styles/global.scss";
import { Banner } from "./components/Banner";
import { MiniDash } from "./components/MiniDash";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <MiniDash />
      </main>
    </div>
  );
}

export default App;
