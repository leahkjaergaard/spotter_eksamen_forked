"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Basket from "./Basket";
import BurgerMenu from "./BurgerMenu";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Header() {
  const pathname = usePathname();
  const isIndex = pathname === "/";
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isIndex && typeof window !== "undefined") {
      window.spotterHeader = headerRef.current;
    }
  }, [isIndex]);

  useEffect(() => {
    if (!isIndex || !textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Fade-in efter delay
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 2.3,
        duration: 1,
        ease: "power2.out",
      }
    );

    requestAnimationFrame(() => {
      gsap.set(textRef.current, {
        y: "27rem",
        scale: 10,
        color: "#6DFFB9",
      });

      gsap.to(textRef.current, {
        y: "0rem",
        scale: 1.2,
        color: "#000000",
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    });
  }, [isIndex]);

  return (
    <header ref={isIndex ? headerRef : null} className={`w-full px-6 py-5 fixed z-30 text-black ${!isIndex ? "bg-white" : ""}`}>
      {/* Transparent overlay til index */}
      {isIndex && <div id="header-bg" className="absolute inset-0 bg-white z-[-1] transition-opacity duration-0" />}

      {/* TextToHeader animation (kun på index) */}
      {isIndex && (
        <h1 ref={textRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(1rem,4vw,1.5rem)] font-bold text-center z-30 opacity-0 italic tracking-[-0.08em] pointer-events-none">
          Spotter.
        </h1>
      )}

      {/* Desktop */}
      <div className="w-full max-w-[1400px] mx-auto hidden lg:flex justify-between items-center relative z-50">
        {/* VENSTRE */}
        <nav className="flex gap-6 text-lg">
          <Link href="/productlist" className="hover:underline">
            Produkter
          </Link>
          <Link href="/omos" className="hover:underline">
            Om os
          </Link>
          <Link href="/psykiatrifonden" className="hover:underline">
            Psykiatrifonden
          </Link>
          <Link href="/contact" className="hover:underline">
            Kontakt
          </Link>
        </nav>

        {/* HØJRE */}
        <div className="flex items-center">
          <Basket />
        </div>

        {/* CENTER logo – kun hvis ikke på index */}
        {!isIndex && (
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="font-bold italic tracking-[-0.08em] text-[clamp(1rem,4vw,1.5rem)] scale-[1.2]">
              Spotter.
            </Link>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-end gap-5">
        <Basket />

        {/* CENTER logo – kun hvis ikke på index */}
        {!isIndex && (
          <div className="absolute left-1/2 -translate-x-1/2 font-bold italic tracking-[-0.08em] text-2xl">
            <Link href="/">Spotter.</Link>
          </div>
        )}

        <BurgerMenu />
      </div>
    </header>
  );
}
