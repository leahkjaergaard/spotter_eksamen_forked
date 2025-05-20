import Hero from "./components/Hero";
import ProduktGuide from "./components/ProduktGuide";
import RunningClub from "./components/RunningClub";
import TextAnimation from "./components/TextAnnimation";
import SoMeCarousel from "./components/SoMeCarrussel";
import BestSellers from "./components/BestSellers"

export default function Page() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <ProduktGuide />
      <RunningClub />
      <TextAnimation />
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-full">
          <SoMeCarousel />
        </div>
      </section>
    </main>
  );
}
