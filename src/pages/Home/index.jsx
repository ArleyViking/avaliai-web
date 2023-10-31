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

import mixpanel from "mixpanel-browser";

mixpanel.init("53c3542140a0bfa48c1af22952e5a897", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

// Set this to a unique identifier for the user performing the event.
mixpanel.identify("USER_ID");

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
