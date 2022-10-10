import { BannerHeader } from "./Banner/Header";
import { MiniDash } from "./MiniDash";
import { RecommendationSection } from "./Recommendation";
import { BannerAbout } from "./Banner/About";

import { UXSection } from "./UXSection";

export function Home() {
  return (
    <>
      <BannerHeader />
      <MiniDash />
      <RecommendationSection />
      <BannerAbout />
      <UXSection />
    </>
  );
}
