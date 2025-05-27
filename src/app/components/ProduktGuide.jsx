"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

export default function ProduktGuide() {
  const containerRef2 = useRef(null);
  const titleRef2 = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const largeImageRef = useRef(null);
  const smallImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "produktguide-trigger",
          trigger: containerRef2.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Titel og stort billede samtidig
      tl.from([titleRef2.current, largeImageRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
      })

      // Beskrivelse og knap
      .from(
        [descRef.current, btnRef.current],
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4"
      )

      // Lille billede: fade + scale pop-in, starter lidt før resten slutter
      .fromTo(
        smallImageRef.current,
        {
          opacity: 0,
          y: 10,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6" // starter lidt før den forrige animation slutter
      );
    }, containerRef2);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative px-[clamp(4rem,10vw,20rem)] flex items-center lg:h-screen">
      <div ref={containerRef2} className="flex flex-col lg:flex-row w-full gap-8 items-center">
        {/* Billeder */}
        <div className="w-[99%] md:w-[74%] lg:w-[50%] relative p-8">
          <Image
            ref={largeImageRef}
            src={`https://picsum.photos/500/500?grayscale&random=1`}
            alt={"Random1"}
            width={500}
            height={500}
          />
          <Image
            ref={smallImageRef}
            src="/photos/creatin.png"
            alt={"Random2"}
            width={200}
            height={200}
            className="absolute -bottom-10 right-0 w-[40%] h-auto"
          />
        </div>

        {/* Tekst */}
        <div className="flex flex-col w-[99%] md:w-[74%] lg:w-[50%] relative">
          <h1
            ref={titleRef2}
            className="text-[clamp(2rem,3.2vw,4rem)] text-[var(--black)] font-bold tracking-tighter pt-[6%] lg:pt-0"
          >
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

          <Link
            href="/product/biotechkreatin"
            ref={btnRef}
            className="border bg-[var(--black)] text-[var(--white)] px-6 py-2 text-xs tracking-wider hover:bg-[var(--white)] hover:text-[var(--black)] transition rounded-xl w-30 text-center"
          >
            Køb her
          </Link>
        </div>
      </div>
    </section>
  );
}
