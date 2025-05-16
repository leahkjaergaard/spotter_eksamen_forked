import HeaderIndex from "./components/HeaderIndex";
import TextToHeader from "./components/TextToHeader";
import Hero from "./components/Hero";
import ProduktGuide from "./components/ProduktGuide";
import RunningClub from "./components/RunningClub";
import TextAnimation from "./components/TextAnnimation";
import SoMeCarousel from "./components/SoMeCarrussel";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <HeaderIndex />
      <TextToHeader />
      <Hero />
      <ProduktGuide />
      <RunningClub />
      <TextAnimation />
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-full">
          <SoMeCarousel />
        </div>
      </section>
      <Footer />
    </main>
  );
}
