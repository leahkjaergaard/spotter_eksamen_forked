import Hero from "./components/Hero";
import ProduktGuide from "./components/ProduktGuide";
import RunningClub from "./components/RunningClub";
import TextAnimation from "./components/TextAnnimation";
import SoMeCarousel from "./components/SoMeCarrussel";
import BestSellers from "./components/BestSellers"
import Bundles from "./components/Bundles";

export default function Page() {
  return (
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
  );
}
