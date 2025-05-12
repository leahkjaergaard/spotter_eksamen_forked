"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextAnimation() {
  const imageRef = useRef(null);
  const secondTextRef = useRef(null); // 👈 ref til den anden tekst

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Skalering af billedet ved scroll
    gsap.to(imageRef.current, {
      scale: 1.26,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top+=100 center",
        end: "top-=100 top",
        scrub: true,
      },
    });

    // Reveal-type animation (SplitType)
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top-=250 top",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    // Fade-ind animation på anden tekst
    gsap.from(secondTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: secondTextRef.current,
        start: "top 70%",
        end: "bottom",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <main>
      <section className="relative h-[187vh]">
        {/* Sticky billede */}
        <div className="sticky top-0 h-screen flex justify-center">
          <div
            ref={imageRef}
            className="w-[80%] h-full bg-cover bg-center bg-no-repeat rounded-xl shadow-lg transform"
            style={{
              backgroundImage: "url('https://picsum.photos/1000/600?grayscale&random=4')",
            }}
          />
        </div>

        {/* Tekst der ruller ind over billedet */}
        <div className="grid place-content-center px-[clamp(4rem,9vw,20rem)] relative z-30 bg-white gap-10 pt-60 pb-30">
          <p className="reveal-type text-[clamp(2rem,5vw,8rem)] text-[#4D6A4E] leading-tight italic text-center font-bold">
            Hver gang du køber Spotter, er du med til at støtte <span className="text-black">Psykiatrifonden.</span>
          </p>
          <p
            ref={secondTextRef}
            className="text-[clamp(2rem,3vw,5rem)] text-center"
          >
            Når du køber et produkt ved spotter, støtter du psykiatrifonden, Når du køber et produkt ved spotter, støtter du psykiatrifonden, Når du køber et produkt ved spotter, støtter du psykiatrifonden
          </p>
        </div>
      </section>
    </main>
  );
}
