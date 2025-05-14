"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.set(menuRef.current, { pointerEvents: "auto" });

      gsap.to(menuRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          delay: 0.3,
          duration: 1,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        x: "100%",
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menuRef.current, { pointerEvents: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Burger button */}
      <button onClick={() => setIsOpen(true)} className="fixed top-6 right-6 z-[999]">
        <div className="w-8 h-[2px] bg-black mb-2"></div>
        <div className="w-8 h-[2px] bg-black mb-2"></div>
        <div className="w-8 h-[2px] bg-black"></div>
      </button>

      {/* Overlay menu */}
      <div ref={menuRef} className="fixed top-0 right-0 w-full h-screen bg-black text-white z-[9999] px-12 pt-32 opacity-0 pointer-events-none" style={{ transform: "translateX(100%)" }}>
        {/* Luk-knap */}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-sm uppercase tracking-widest">
          Luk
        </button>

        <nav className="flex flex-col space-y-6 text-4xl font-bold mt-20">
          {["Produkter", "Om os", "Kontakt"].map((text, i) => (
            <Link key={text} href={`/${text.toLowerCase().replace(/\s/g, "-")}`} ref={(el) => (linksRef.current[i] = el)} onClick={() => setIsOpen(false)} className="opacity-0">
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
