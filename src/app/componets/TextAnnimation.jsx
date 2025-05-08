"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextAnimation() {
  const imageRef = useRef(null); // ⬅️ ref til billedet

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
        markers: true,
      },
    });

    // SplitType animation på tekst
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <main>
      <section className="relative h-[187vh]">
        {/* Sticky billede */}
        <div className="sticky top-0 h-screen flex justify-center z-40">
          <div
            ref={imageRef}
            className="w-[80%] h-full bg-cover bg-center bg-no-repeat rounded-xl shadow-lg transform"
            style={{
              backgroundImage: "url('https://picsum.photos/1000/600?grayscale&random=4')",
            }}
          />
        </div>

        {/* Tekst der ruller ind over billedet */}
        <div className="h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)] relative z-50 bg-white">
          <p className="reveal-type text-[clamp(2rem,5vw,8rem)] text-black">
            Hver gang du køber Spotter, er du med til at støtte psykiatrifondens arbejde for bedre mental sundhed.
          </p>
        </div>
      </section>

      <section className="h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)] bg-yellow-400">
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)]">
          Modern UI designers will expand their skillsets to include frontend.
        </p>
      </section>

      <section className="h-screen grid place-content-center px-[clamp(4rem,12vw,20rem)] bg-neutral-900 text-white">
        <p className="reveal-type text-[clamp(2rem,5vw,8rem)]">
          The web isn't static anymore, interactivity and motion now dominate.
        </p>
      </section>
    </main>
  );
}
