import HeaderIndex from "./components/HeaderIndex";
import TextToHeader from "./components/TextToHeader";
import Hero from "./components/Hero";
import ProduktGuide from "./componets/ProduktGuide";
import RunningClub from "./componets/RunningClub";
import TextAnimation from "./components/TextAnnimation";
import SoMeCarousel from "./componets/SoMeCarrussel";
import Footer from "./componets/Footer";

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
