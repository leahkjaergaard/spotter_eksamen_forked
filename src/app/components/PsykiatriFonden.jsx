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
    <section className="bg-[#f9f6f0] text-[#2c2c2c] py-20 px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 psy-section">
        <div>
          <Image src="https://picsum.photos/800/600?random=3" alt="Mentalt helbred billede" width={800} height={600} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">PSYKIATRIFONDEN</h2>
          <h1 className="text-4xl font-bold mb-6">Psykiatrifondens arbejde</h1>
          <p className="text-base leading-relaxed mb-6">Psykiatrifonden arbejder for et samfund, hvor alle har mulighed for et godt liv uanset psykisk sygdom. De tilbyder rådgivning, oplysning og undervisning for at nedbryde fordomme og skabe bedre forståelse for mental sundhed.</p>
          <button className="border bg-black text-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition rounded-xl w-32">LÆS MERE</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 psy-section">
        <div className="order-2 md:order-1">
          <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">PSYKIATRIFONDEN</h2>
          <h1 className="text-4xl font-semibold mb-4">Workshops & Oplysning</h1>
          <p className="text-base leading-relaxed mb-6">Gennem undervisning og oplysningskampagner arbejder Psykiatrifonden på at udbrede viden om psykisk sundhed, så vi sammen kan skabe en mere inkluderende fremtid.</p>
          <button className="border bg-black text-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition rounded-xl w-32">LÆS MERE</button>
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
          <h2 className="text-sm uppercase text-[#4D6A4E] tracking-widest mb-2">PSYKIATRIFONDEN</h2>
          <h1 className="text-4xl font-semibold mb-4">Støt arbejdet</h1>
          <p className="text-base leading-relaxed mb-6">Vil du støtte Psykiatrifondens arbejde for bedre mental trivsel i Danmark? Din støtte går direkte til rådgivning, kampagner og undervisning.</p>
          <button className="border bg-black text-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition rounded-xl w-32">LÆS MERE</button>
        </div>
      </div>
    </section>
  );
}
