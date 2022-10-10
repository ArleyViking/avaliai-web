import { Header } from "./components/Header";
import "./styles/global.scss";
import { BannerHeader } from "./components/Banner/Header";
import { MiniDash } from "./components/MiniDash";
import { RecommendationSection } from "./components/Recommendation";
import { BannerAbout } from "./components/Banner/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <BannerHeader />
        <MiniDash />
        <RecommendationSection />
        <BannerAbout />
      </main>
    </div>
  );
}

export default App;
