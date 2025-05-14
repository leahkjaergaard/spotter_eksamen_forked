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
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Burger button */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-6 right-6 z-50 text-white">
        <div className="w-8 h-[2px] bg-black mb-2"></div>
        <div className="w-8 h-[2px] bg-black mb-2"></div>
        <div className="w-8 h-[2px] bg-black"></div>
      </button>

      {/* Overlay menu */}
      <div ref={menuRef} className="fixed top-0 right-0 w-full h-screen bg-black text-white z-40 px-12 pt-32" style={{ transform: "translateX(100%)" }}>
        <nav className="flex flex-col space-y-6 text-4xl font-bold">
          {["Produkter", "Om os", "Kontakt"].map((text, i) => (
            <Link key={text} href={`/${text.toLowerCase().replace(/\s/g, "-")}`} ref={(el) => (linksRef.current[i] = el)} className="opacity-0">
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
