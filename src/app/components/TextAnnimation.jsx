"use client";

import "../../app/globals.css";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

export default function TextAnimation() {
  const imageRef = useRef(null);
  const secondTextRef = useRef(null);
  const btnRef3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const lenis = new Lenis({ smooth: true });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        gsap.to(imageRef.current, {
          scale: 1.26,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "bottom center",
            end: "bottom top",
            scrub: true,
            id: "textanimation-scale",
            // markers: true,
          },
        });

        const splitTypes = document.querySelectorAll(".reveal-type");
        splitTypes.forEach((char, index) => {
          const text = new SplitType(char, { types: "chars" });
          gsap.from(text.chars, {
            opacity: 0.2,
            stagger: 0.1,
            scrollTrigger: {
              trigger: char,
              start: "bottom center",
            end: "bottom top",
              scrub: true,
              id: `textanimation-split-${index}`,
            },
          });
        });

        gsap.from(secondTextRef.current, {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondTextRef.current,
            start: "bottom center",
            end: "bottom top",
            toggleActions: "play none none reverse",
            id: "textanimation-secondtext",
          },
        });

        gsap.from(btnRef3.current, {
          opacity: 0,
          y: 50,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: btnRef3.current,
            start: "bottom center",
            end: "bottom top",
            toggleActions: "play none none reverse",
            id: "textanimation-button",
          },
        });

        if (typeof window !== "undefined" && window.spotterHeader) {
          const bg = document.getElementById("header-bg");
          ScrollTrigger.create({
            trigger: imageRef.current,
            start: "bottom-=50 center",
            end: "bottom+=500 top",
            onEnter: () => gsap.set(bg, { opacity: 0 }),
            onLeave: () => gsap.set(bg, { opacity: 1 }),
            onEnterBack: () => gsap.set(bg, { opacity: 0 }),
            onLeaveBack: () => gsap.set(bg, { opacity: 1 }),
            id: "textanimation-headerbg",
          });
        }

        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return (
    <section>
      <section className="relative">
        <div className="sticky top-0 h-[97vh] flex justify-center z-10">
          <div
            ref={imageRef}
            className="w-[80%] h-[85%] bg-cover bg-center bg-no-repeat rounded-xl transform"
            style={{
              backgroundImage: "url('photos/animationsbilled.webp')",
            }}
          />
        </div>

        <div className="grid place-content-center px-[clamp(4rem,11vw,20rem)] relative bg-[var(--white)] gap-10 pt-50 z-20">
          <p className="reveal-type text-[clamp(2rem,4.9vw,8rem)] text-[var(--spotter-green)] leading-tight italic text-center font-bold">
            Hver gang du køber Spotter, er du med til at støtte{" "}
            <span className="text-black">Psykiatrifonden.</span>
          </p>
          <p
            ref={secondTextRef}
            className="text-[clamp(1rem,2.5vw,5rem)] text-center"
          >
            Når du vælger Spotter, støtter du mere end din egen sundhed. En del
            af vores overskud går direkte til Psykiatrifondens arbejde med at
            fremme mental trivsel og støtte mennesker i sårbare
            livssituationer.
          </p>
          <div className="flex justify-center" ref={btnRef3}>
            <Link
              href="/psykiatrifonden"
              className="border bg-[var(--black)] text-[var(--white)] px-6 py-2 text-xs tracking-wider hover:bg-[var(--white)] hover:text-[var(--black)] transition rounded-xl w-30 text-center"
            >
              Læs mere
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
