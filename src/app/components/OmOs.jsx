"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Omos() {
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
    <section className="bg-[#F5F5F5] text-[#2c2c2c] py-24 px-4 sm:px-6 lg:px-16 space-y-32">
      {/* Introsektion */}
      <div className="max-w-4xl mx-auto text-center psy-section">
        <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">Spotter</h2>
        <h1 className="text-5xl font-bold mb-6">OM OS</h1>
        <p className="text-lg leading-relaxed">Virksomheden er grundlagt af to ejere, der begge lever med bipolar lidelse og ADHD. Det har været en naturlig del af rejsen og inspirationen bag navnet Spotter – et ord, der betyder “hjælper”.</p>
      </div>

      {/* Sektion 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center psy-section">
        <Image src="https://picsum.photos/800/600?random=3" alt="Mentalt helbred billede" width={800} height={600} className="w-full h-auto object-cover rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Vi ønsker at støtte</h2>
          <p className="text-base leading-relaxed mb-4">Spotter adskiller sig fra mange andre i branchen. Vi tilbyder kosttilskud, men henvender os til den almindelige dansker – ikke fitnessverdenen. Det handler om at tage hånd om både krop og sind.</p>
          <button className="mt-4 border border-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition">Læs mere</button>
        </div>
      </div>

      {/* Sektion 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center psy-section">
        <div>
          <h2 className="text-3xl font-bold mb-4">Baggrund</h2>
          <p className="text-base leading-relaxed mb-4">Jeg har tidligere arbejdet som chef hos Musclehouse i seks år, men ønskede noget mere menneskeligt. Hos Spotter er ærlig vejledning og nærvær kernen i vores arbejde og vores brand.</p>
          <button className="mt-4 border border-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition">Læs mere</button>
        </div>
        <Image src="https://picsum.photos/800/600?random=4" alt="Workshop billede" width={800} height={600} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Sektion 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center psy-section">
        <Image src="https://picsum.photos/800/600?random=5" alt="Psykiatrifonden billede" width={800} height={600} className="w-full h-auto object-cover rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Samarbejde med Psykiatrifonden</h2>
          <p className="text-base leading-relaxed mb-4">Vi har skabt tøj og events i samarbejde med Psykiatrifonden, og donerer overskuddet til deres arbejde. Vi tror på, at alle har brug for støtte – og vi vil gerne være dem, der hjælper.</p>
          <button className="mt-4 border border-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition">Læs mere</button>
        </div>
      </div>
    </section>
  );
}
