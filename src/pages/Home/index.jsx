import { BannerHeader } from "./Banner/Header";
import { MiniDash } from "./MiniDash";
import { RecommendationSection } from "./Recommendation";
import { BannerAbout } from "./Banner/About";

import { UXSection } from "./UXSection";
import { AISection } from "./AISection";
import { PESection } from "./PESection";
import { Colaboration } from "@/components/Colaboration";

import { MHSection } from "./MHSection";
import { JMSection } from "./JMSection";

export function Home() {
  return (
    <>
      <BannerHeader />
      <MiniDash />
      <RecommendationSection />
      <BannerAbout />
      <UXSection />
      <AISection />
      <Colaboration
        title="Torne esse projeto colaborativo"
        subtitle="Você conhece algum conteúdo que esteja relacionado com heurística ou boas práticas de design de interface que possa virar listas de verificações?"
      />
      <PESection />
      <MHSection />
      <JMSection />
    </>
  );
}
