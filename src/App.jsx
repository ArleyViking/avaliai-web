import { Header } from "./components/Header";
import "./styles/global.scss";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Home />
      </main>
    </div>
  );
}

export default App;
