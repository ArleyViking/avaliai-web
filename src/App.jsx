import { Header } from "./components/Header";
import "./styles/global.scss";

import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="Main">
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
