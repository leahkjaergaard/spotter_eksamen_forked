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
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5"
      ) // starter 0.4 sek før forrige animation er færdig
      .from(
        btnRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative px-[clamp(4rem,10vw,20rem)] items-center py-[clamp(4rem,10vw,20rem)]">
      <div ref={containerRef} className="flex flex-col lg:flex-row w-full gap-8 items-center">
        {/* Venstre tekst */}
        <div className="w-[99%] md:w-[74%] lg:w-[50%] flex flex-col order-2 lg:order-1">
          <div ref={titleRef}>
            <h1 className="text-[clamp(2rem,3.3vw,5rem)] text-black font-bold tracking-tighter">Mangler du en løbeklub?</h1>
            <h2 className="opacity-70 text-[clamp(1rem,2.3vw,1.5rem)]">Tirsdage kl. 7:30, Nørrebrogade 26</h2>
          </div>

          <p ref={descRef} className="text-[clamp(0.2rem,4vw,1.2rem)] lg:text-[clamp(0.2rem,4vw,1.2rem)] pt-[5%] pb-[5%] lg:pt-[10%] lg:pb-[10%]">
            Hver tirsdag kl. 7:40 løber vi fra vores butik på Nørrebrogade 26. Alle niveauer er velkomne – uanset om du er nybegynder eller erfaren løber. Vi deler os op i tempo-grupper, så alle kan være med. Efter løbet byder vi på en kop kaffe og god stemning i butikken.
          </p>

          <button ref={btnRef} className="bg-black text-white font-bold text-lg px-6 py-2 rounded-xl w-28">
            Tilmeld
          </button>
        </div>

        {/* Højre billeder + kort */}
        <div className="w-[99%] md:w-[74%] lg:w-[50%] grid grid-cols-2 order-1 lg:order-2">
          {[1, 2, 3].map((n, i) => (
            <Image key={n} ref={(el) => (imagesRef.current[i] = el)} src={`https://picsum.photos/300/300?grayscale&random=${n}`} alt={`Random ${n}`} width={300} height={300} />
          ))}

          <div ref={cardRef} className="aspect-square w-full bg-[#4D6A4E] text-white flex flex-col justify-between font-sans">
            <div className="text-right leading-tight text-[clamp(1.5rem,2vw,2rem)] md:text-[clamp(1.5rem,3vw,4rem)] lg:text-[clamp(1.5rem,2vw,2rem)] font-extrabold uppercase pr-[5%]">
              <p className="italic">Spotter</p>
              <p className="-mt-3 italic">Runner</p>
              <p className="-mt-3 italic">Club</p>
            </div>

            <div className="text-left text-[clamp(0.5rem,1.5vw,1rem)] md:text-[clamp(0.5rem,2vw,2rem)] lg:text-[clamp(0.5rem,1vw,1rem)] font-semibold flex pt-[3%] pr-[5%] pl-[5%] justify-between">
              <div>
                <p>Tuesdays</p>
                <p>7:15am</p>
              </div>
              <p className="text-base italic font-semibold">@Spotter</p>
            </div>

            <div className="pt-[1%]">
              <h2 className="text-[clamp(3rem,10vw,15rem)] md:text-[clamp(2rem,7vw,10rem)] lg:text-[clamp(1.5rem,5vw,4.5rem)] font-extrabold leading-none italic">RUN</h2>
              <h2 className="text-[clamp(3rem,10vw,15rem)] md:text-[clamp(2rem,7vw,10rem)] lg:text-[clamp(1.5rem,5vw,4.5rem)] font-extrabold leading-none italic -mt-[6%] text-right pr-[5%]">CLUB</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
