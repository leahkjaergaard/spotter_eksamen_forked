"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PsykiatriFonden() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".psy-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white text-[#2c2c2c] py-20 px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 psy-section">
        <div>
          <Image src="https://picsum.photos/800/600?random=3" alt="Mentalt helbred billede" width={800} height={600} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">Spotter</h2>
          <h1 className="text-4xl font-bold mb-6">OM OS</h1>
          <p className="text-base leading-relaxed mb-6">Virksomheden er grundlagt af to ejere, der begge lever med bipolar lidelse og ADHD. Det har været en naturlig del af rejsen og inspirationen bag navnet Spotter – et ord, der betyder “hjælper”. Vi ønsker at være en støtte og et supplement i hverdagen, uanset hvem du er. Spotter adskiller sig fra mange andre i branchen. Selvom vi primært tilbyder kosttilskud, henvender vi os ikke til den hardcore fitnessverden, men til den almindelige dansker, som ønsker at tage bedre hånd om både krop og sind.</p>{" "}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 psy-section">
        <div className="order-2 md:order-1">
          <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">Om os</h2>
          <h1 className="text-4xl font-semibold mb-4">Baggrund</h1>
          <p className="text-base leading-relaxed mb-6">
            Jeg har tidligere arbejdet som chef hos Musclehouse i seks år, hvor fokus i høj grad var på det kommercielle og corporate. Men jeg havde et behov for noget andet – noget mere menneskeligt. Hos Spotter ønsker vi at skabe en butik og et brand, hvor ærlighed og nærvær er i centrum. Vi går op i at give ærlig vejledning og tilbyde produkter, vi selv tror på. Det handler ikke bare om kosttilskud – det handler om at støtte mennesker i deres hverdag, både fysisk og mentalt. Vores vision er ambitiøs: Vi vil være den største forretning og det stærkeste brand inden for velgørenhed og mental sundhed. Når man bærer noget fra Spotter, skal det signalere, at man er et menneske, der vil det bedste – både for sig selv og for andre. Som leder drømmer jeg om at skabe et fællesskab omkring
            Spotter.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image src="https://picsum.photos/800/600?random=2" alt="Workshop billede" width={800} height={600} className="w-full h-auto object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center psy-section">
        <div>
          <Image src="https://picsum.photos/800/600?random=4" alt="Mentalt helbred billede" width={800} height={600} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">Spotter x PSYKIATRIFONDEN</h2>
          <h1 className="text-4xl font-semibold mb-4">Min svære baggrund</h1>
          <p className="text-base leading-relaxed mb-6">
            Jeg har haft en svær barndom og gennemgået perioder, hvor jeg ikke havde det godt. Det har gjort, at jeg i dag har et stærkt fokus på det mentale – på at respektere alle mennesker og se det gode i os alle. Nogle kæmper bare med indre dæmoner, som kræver mere plads og forståelse. Derfor tog jeg kontakt til Psykiatrifonden – og heldigvis var de med på idéen. Vi har siden samarbejdet om flere tiltag: Vi har designet og solgt tøj i deres navn, afholdt events og skabt opmærksomhed omkring psykisk sundhed gennem forskellige kampagner. Et af vores kommende projekter er at stå for stande på Roskilde Festival sammen med Psykiatrifonden. Her kan festivalgæster komme forbi og tale med nogen, hvis de har det svært eller bare har brug for et menneskeligt møde midt i kaosset. Alle vores
            events er fundraisingsbaserede, og hele overskuddet går direkte til Psykiatrifonden. Det er vigtigt for os at give noget tilbage, når man har mulighed for det. Det ligger også i navnet Spotter – vi vil gerne være dem, der hjælper.
          </p>{" "}
        </div>
      </div>
    </section>
  );
}
