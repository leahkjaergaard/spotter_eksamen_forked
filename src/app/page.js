import HeaderIndex from "./componets/HeaderIndex";
import TextAnimation from "../app/componets/TextAnnimation";
import Hero from "../app/componets/Hero";
import TextToHeader from "./componets/TextToHeader";
import RunningClub from "./componets/RunningClub";
import ProduktGuide from "./componets/ProduktGuide";
import SoMeCarrussel from "./componets/SoMeCarrussel"

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
        <SoMeCarrussel />
      </div>
    </section>  
    </main>
  )
}

