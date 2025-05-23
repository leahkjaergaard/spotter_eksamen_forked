"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Basket from "./Basket";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

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
          id: "headerScrollTrigger", // 👈 unikt ID
          trigger: textRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getById("headerScrollTrigger")?.kill(); // 💥 ryd op
      headerTL.kill(); // 🧼 kill timeline
    };
  }, [isIndex]);

  return (
    <header ref={isIndex ? headerRef : null} className={`w-full px-6 py-5 fixed z-50 text-[var(--black)] ${!isIndex ? "bg-[var(--white)]" : ""}`}>
      {isIndex && <div id="header-bg" className="absolute inset-0 bg-[var(--white)] z-[-1] transition-opacity duration-0" />}

      {isIndex && (
        <h1 ref={textRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(1rem,4vw,1.5rem)] text-center z-30 opacity-0 italic tracking-[-0.08em] pointer-events-none">
          Spotter.
        </h1>
      )}

      <div className="w-full max-w-[1400px] mx-auto hidden lg:flex justify-between items-center relative z-50">
        {/* VENSTRE */}
        <nav className="flex gap-6 text-lg relative">
          {/* Mega menu til "Produkter" */}
          <div className="relative group">
            <Link href="/productlist" className="hover:underline">
              Produkter
            </Link>

            {/* Mega menu */}
            <div className="hidden group-hover:flex absolute left-0 top-full w-[1000px] bg-white shadow-xl p-10 mb-6 rounded-md z-50 transition-all duration-300 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
              <div className="grid grid-cols-5 gap-8 w-full">
                {/* Produkter */}
                <div className="flex flex-col gap-4">
                  <p className="text-gray-400 text-xs mb-2 font-medium">Produkter</p>
                  <Link href="/productlist?category=proteinpulver" className="text-sm font-normal hover:underline">
                    Proteinpulver
                  </Link>
                  <Link href="/productlist?category=kreatin" className="text-sm font-normal hover:underline">
                    Kreatin
                  </Link>
                  <Link href="/productlist?category=vegansk" className="text-sm font-normal hover:underline">
                    Vegansk
                  </Link>
                </div>

                {/* Accessories */}
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 mb-3 text-xs">Accessories</p>
                  <Link href="/productlist?category=merch" className="text-sm font-normal hover:underline">
                    Spotter merch
                  </Link>
                  <Link href="/productlist?category=udstyr" className="text-sm font-normal hover:underline">
                    Udstyr
                  </Link>
                </div>

                {/* Vejledning */}
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 mb-2 text-xs">Vejledning</p>
                  <Link href="/guides/opskrifter" className="text-sm font-normal hover:underline">
                    Opskrifter
                  </Link>
                  <Link href="/guides/ny" className="text-sm font-normal hover:underline">
                    Ny til træning?
                  </Link>
                </div>

                {/* Billede 2 – med Next.js Image komponent */}
                <div>
                  <Image src="https://picsum.photos/800/600?random=2" alt="Mentalt helbred billede" width={300} height={200} className="w-full h-[120px] object-cover rounded-lg" />
                </div>

                {/* Billede 2 – med Next.js Image komponent */}
                <div>
                  <Image src="https://picsum.photos/800/600?random=3" alt="Mentalt helbred billede" width={300} height={200} className="w-full h-[120px] object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>

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

        <div className="flex items-center">
          <Basket />
        </div>

        {!isIndex && (
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="font-bold italic tracking-[-0.08em] text-[clamp(1rem,4vw,1.5rem)] scale-[1.2]">
              Spotter.
            </Link>
          </div>
        )}
      </div>

      <div className="lg:hidden flex items-center justify-end gap-5">
        <Basket />
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
