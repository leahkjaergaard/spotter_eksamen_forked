"use client";

import Hero from "./components/Hero";
import ProduktGuide from "./components/ProduktGuide";
import RunningClub from "./components/RunningClub";
import TextAnimation from "./components/TextAnnimation";
import SoMeCarousel from "./components/SoMeCarrussel";
import BestSellers from "./components/BestSellers";
import Bundles from "./components/Bundles";
import LandingPageLoader from "./components/LandingPageLoader";

const mediaToPreload = [
  "/photos/hero.webp",
  "/photos/kreatin.webp",
  "/photos/maskotderdrikker.png",
  "/photos/Runningclub1.webp",
  "/photos/Runningclub2.webp",
  "/photos/Runningclub3.webp",
];

export default function Page() {
  return (
    <LandingPageLoader loadingMedia={mediaToPreload}>
      <main>
        <Hero />
        <BestSellers />
        <ProduktGuide />
        <Bundles />
        <TextAnimation />
        <RunningClub />
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full">
            <SoMeCarousel />
          </div>
        </section>
      </main>
    </LandingPageLoader>
  );
}