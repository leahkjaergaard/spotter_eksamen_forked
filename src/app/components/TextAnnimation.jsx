"use client";

import "../../app/globals.css";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextAnimation() {
  const imageRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll-triggered skalering af billedet
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

    // SplitType animation
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top-=250 top",
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

    // Fade-in tekst 2
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

 if (typeof window !== "undefined" && window.spotterHeader) {
  const bg = document.getElementById("header-bg");

  ScrollTrigger.create({
    trigger: imageRef.current,
    start: "top-=140",
    end: "bottom+=70 top",
    onEnter: () => gsap.set(bg, { opacity: 0 }),
    onLeave: () => gsap.set(bg, { opacity: 1 }),
    onEnterBack: () => gsap.set(bg, { opacity: 0 }),
    onLeaveBack: () => gsap.set(bg, { opacity: 1 }),
  });
}
  }, []);

  return (
    <section>
      <section className="relative">
        {/* Sticky billede */}
        <div className="sticky top-0 h-[97vh] flex justify-center z-10">
          <div
            ref={imageRef}
            className="w-[80%] h-[85%] bg-cover bg-center bg-no-repeat rounded-xl transform"
            style={{
              backgroundImage: "url('https://picsum.photos/1000/600?grayscale&random=4')",
            }}
          />
        </div>

        {/* Tekst */}
        <div className="grid place-content-center px-[clamp(4rem,9vw,20rem)] relative bg-white gap-10 pt-50 z-20">
          <p className="reveal-type text-[clamp(2rem,5vw,8rem)] text-[#4D6A4E] leading-tight italic text-center font-bold">
            Hver gang du køber Spotter, er du med til at støtte <span className="text-black">Psykiatrifonden.</span>
          </p>
          <p
            ref={secondTextRef}
            className="text-[clamp(1rem,3.2vw,6rem)] text-center"
          >
            Når du køber et produkt ved spotter, støtter du psykiatrifonden, Når du køber et produkt ved spotter, støtter du psykiatrifonden, Når du køber et produkt ved spotter, støtter du psykiatrifonden
          </p>
        </div>
      </section>
    </section>
  );
}
