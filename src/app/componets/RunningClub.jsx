"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function RunningClub() {
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
    <section className="h-screen relative px-[clamp(4rem,12vw,20rem)] flex items-center">
      <div ref={containerRef} className="flex w-full gap-8">
        {/* Venstre tekst */}
        <div className="flex flex-col w-[50%] justify-evenly">
          <div ref={titleRef}>
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] text-black font-bold tracking-tighter">
              Mangler du en løbeklub?
            </h1>
            <h2 className="opacity-70 text-[clamp(0.2rem,4vw,1.5rem)]">
              Tirsdage kl. 7:30, Nørrebrogade 26
            </h2>
          </div>

          <p
            ref={descRef}
            className="text-[clamp(0.2rem,4vw,1.2rem)]"
          >
            Hver tirsdag kl. 7:30 løber vi fra vores butik på Nørrebrogade 26.
            Alle niveauer er velkomne – uanset om du er nybegynder eller erfaren
            løber. Vi deler os op i tempo-grupper, så alle kan være med. Efter
            løbet byder vi på en kop kaffe og god stemning i butikken.
          </p>

          <button
            ref={btnRef}
            className="bg-black text-white font-bold text-lg px-6 py-2 rounded-xl w-28"
          >
            Tilmeld
          </button>
        </div>

        {/* Højre billeder + kort */}
        <div className="w-[50%] grid grid-cols-2">
          {[1, 2, 3].map((n, i) => (
            <Image
              key={n}
              ref={(el) => (imagesRef.current[i] = el)}
              src={`https://picsum.photos/300/300?grayscale&random=${n}`}
              alt={`Random ${n}`}
              width={300}
              height={300}
            />
          ))}

          <div
            ref={cardRef}
            className="max-w-[287.28px] max-h-[287.28px] bg-[#4D6A4E] text-white flex flex-col justify-between font-sans"
          >
            <div className="text-right leading-tight text-[clamp(1rem,2.5vw,2rem)] font-extrabold uppercase pr-2">
              <p className="italic">Spotter</p>
              <p className="-mt-3 italic">Runner</p>
              <p className="-mt-3 italic">Club</p>
            </div>

            <div className="text-left text-sm font-semibold flex pt-3 pr-3 pl-3 justify-between">
              <div>
                <p>Tuesdays</p>
                <p>7:15am</p>
              </div>
              <p className="text-base italic font-semibold">@Spotter</p>
            </div>

            <div className="pt-3">
              <h2 className="text-[clamp(1.5rem,5vw,8rem)] font-extrabold leading-none italic">
                RUN
              </h2>
              <h2 className="text-[clamp(1.5rem,5vw,8rem)] font-extrabold leading-none italic -mt-4.5 text-right pr-2">
                CLUB
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
