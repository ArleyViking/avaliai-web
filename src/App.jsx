import { Header } from "./components/Header";
import "./styles/global.scss";

import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="Main">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
