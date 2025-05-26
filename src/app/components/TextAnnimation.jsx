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
  
    const triggers = [];
  
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  
    // Scroll-triggered skalering af billedet
    const scaleTrigger = ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top+=100 center",
      end: "top-=100 top",
      scrub: true,
      animation: gsap.to(imageRef.current, { scale: 1.26, ease: "none" }),
      id: "textanimation-scale"
    });
    triggers.push(scaleTrigger);
  
    // SplitType animation
    const splitTypes = document.querySelectorAll(".reveal-type");
    splitTypes.forEach((char, index) => {
      const text = new SplitType(char, { types: "chars" });
  
      const splitTrigger = gsap.from(text.chars, {
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top-=250 top",
          scrub: true,
          id: `textanimation-split-${index}`,
        },
      });
  
      triggers.push(splitTrigger.scrollTrigger);
    });
  
    // Fade-in tekst 2
    const secondTextTrigger = gsap.from(secondTextRef.current, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: secondTextRef.current,
        start: "top 70%",
        end: "bottom",
        toggleActions: "play reverse play reverse",
        id: "textanimation-secondtext"
      },
    });
    triggers.push(secondTextTrigger.scrollTrigger);
  
    // Fade-in button
    const btnTrigger = gsap.from(btnRef3.current, {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: btnRef3.current,
        start: "top 80%",
        end: "bottom",
        toggleActions: "play reverse play reverse",
        id: "textanimation-button"
      },
    });
    triggers.push(btnTrigger.scrollTrigger);
  
    // Header background
    if (typeof window !== "undefined" && window.spotterHeader) {
      const bg = document.getElementById("header-bg");
  
      const headerTrigger = ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top-=140",
        end: "bottom+=70 top",
        onEnter: () => gsap.set(bg, { opacity: 0 }),
        onLeave: () => gsap.set(bg, { opacity: 1 }),
        onEnterBack: () => gsap.set(bg, { opacity: 0 }),
        onLeaveBack: () => gsap.set(bg, { opacity: 1 }),
        id: "textanimation-headerbg"
      });
  
      triggers.push(headerTrigger);
    }
  
    // 💣 Cleanup
    return () => {
      triggers.forEach(trigger => trigger?.kill());
    };
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
        <div className="grid place-content-center px-[clamp(4rem,11vw,20rem)] relative bg-[var(--white)] gap-10 pt-50 z-20">
          <p className="reveal-type text-[clamp(2rem,4.9vw,8rem)] text-[var(--spotter-green)] leading-tight italic text-center font-bold">
            Hver gang du køber Spotter, er du med til at støtte <span className="text-black">Psykiatrifonden.</span>
          </p>
          <p
            ref={secondTextRef}
            className="text-[clamp(1rem,2.5vw,5rem)] text-center"
          >
           Når du vælger Spotter, støtter du mere end din egen sundhed. En del af vores overskud går direkte til Psykiatrifondens arbejde med at fremme mental trivsel og støtte mennesker i sårbare livssituationer.
          </p>
          <div className="flex justify-center">
          <Link
  href="/psykiatrifonden"
  ref={btnRef3}
  className="inline-block bg-[var(--black)] text-[var(--white)] border border-[var(--black)] hover:bg-[var(--white)] hover:text-[var(--black)] font-bold text-lg px-6 py-2 rounded-xl w-36 text-center"
>
  Læs mere
</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
