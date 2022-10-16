import { Header } from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";

import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="Main">
          <AppRoutes />
          <ToastContainer />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
