import { MiniDash } from "./MiniDash";
import { BannerHeader } from "./Banner/Header";
import { RecommendationSection } from "./Recommendation";
import { BannerAbout } from "./Banner/About";

import { UXSection } from "./UXSection";
import { AISection } from "./AISection";
import { PESection } from "./PESection";
import { Colaboration } from "@/components/Colaboration";

import { MHSection } from "./MHSection";
import { JMSection } from "./JMSection";

import Hotjar from "@hotjar/browser";

const siteId = 3712959;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export function Home() {
  return (
    <>
      <BannerHeader />
      <MiniDash />
      <RecommendationSection />
      <BannerAbout />
      <UXSection />
      <PESection />
      <Colaboration
        title="Torne esse projeto colaborativo"
        subtitle="Você conhece algum conteúdo que esteja relacionado com heurística ou boas práticas de design de interface que possa virar listas de verificações?"
      />

      <AISection />
      <MHSection />
      <JMSection />
    </>
  );
}
