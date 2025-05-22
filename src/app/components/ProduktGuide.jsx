"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function ProduktGuide() {
   const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const imagesRef = useRef([]);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.current,
    start: "top 60%",
    toggleActions: "play reverse play reverse",
  },
});

tl.from(titleRef.current, {
  opacity: 0,
  y: 30,
  duration: 0.7,
  ease: "power2.out",
})
.from(descRef.current, {
  opacity: 0,
  y: 30,
  duration: 0.7,
  ease: "power2.out",
}, "-=0.5") // starter 0.4 sek før forrige animation er færdig
.from(btnRef.current, {
  opacity: 0,
  y: 20,
  duration: 0.7,
  ease: "power2.out",
}, "-=0.5");
  }, []);

  return (
    <section className="h-screen relative px-[clamp(4rem,10vw,20rem)] flex items-center">
      <div ref={containerRef} className="flex flex-col lg:flex-row w-full gap-8 items-center">
        {/* Højre billeder + kort */}
        <div className="w-[99%] md:w-[74%] lg:w-[50%] relative p-8">
            <Image
                src={`https://picsum.photos/500/500?grayscale&random=1`}
                alt={"Random1"}
                width={500}
                height={500}
            />
            <Image
                src={`https://picsum.photos/200/200?grayscale&random=2`}
                alt={"Random2"}
                width={200}
                height={200}
                className="absolute -bottom-10 right-0 w-[40%] h-auto"
            />
            <h2 className="absolute top-1/3 left-0 translate-y-1/2 rotate-90 text-[var(--spotter-green)] text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight italic w-fit">
                KREATIN
            </h2>
        </div>
        {/* Venstre tekst */}
        <div className="flex flex-col w-[99%] md:w-[74%] lg:w-[50%] relative">
            <h1 ref={titleRef} className="text-[clamp(2rem,3.2vw,4rem)] text-[var(--black)] font-bold tracking-tighter pt-[6%] lg:pt-0">
              Hvorfor tager man kreatin?
            </h1>

          <p
            ref={descRef}
            className="text-[clamp(0.2rem,4vw,1.2rem)] pt-[5%] pb-[5%] lg:pt-[10%] lg:pb-[10%]"
          >
            Hver tirsdag kl. 7:30 løber vi fra vores butik på Nørrebrogade 26.
            Alle niveauer er velkomne – uanset om du er nybegynder eller erfaren
            løber. Vi deler os op i tempo-grupper, så alle kan være med. Efter
            løbet byder vi på en kop kaffe og god stemning i butikken.
          </p>

          <button
            ref={btnRef}
            className="bg-[var(--black)] text-[var(--white)] font-bold text-lg px-6 py-2 rounded-xl w-32"
          >
            Køb her
          </button>
        </div>
      </div>
    </section>
  );
}
