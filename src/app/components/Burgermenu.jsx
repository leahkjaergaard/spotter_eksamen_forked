"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const linksRef = useRef([]);

  const navLinks = [
    { label: "Produkter", href: "/productlist" },
    { label: "Psykiatrifonden", href: "/psykiatrifonden" },
    { label: "Om os", href: "/omos" },
    { label: "Kontakt", href: "/contact" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="z-[98] lg:hidden">
        <div className="w-8 h-[2px] bg-[var(--black)] mb-2"></div>
        <div className="w-8 h-[2px] bg-[var(--black)] mb-2"></div>
        <div className="w-8 h-[2px] bg-[var(--black)]"></div>
      </button>

      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-full h-screen bg-[var(--black)] text-[var(--white)] z-[1000] px-12 pt-32 opacity-0 pointer-events-none lg:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-[var(--white)] text-sm uppercase tracking-widest"
        >
          Luk
        </button>

        <div
          className="absolute left-1/2 -translate-x-1/2 top-5 opacity-0"
          ref={(el) => (linksRef.current[0] = el)}
        >
          <Link
            href="/"
            className="font-bold italic tracking-[-0.08em] text-[clamp(1.5rem,3.5vw,2rem)]"
          >
            Spotter.
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center h-full mt-[-6rem]">
          <nav className="flex flex-col items-center space-y-6 text-4xl font-bold text-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (linksRef.current[i + 1] = el)}
                onClick={() => setIsOpen(false)}
                className="opacity-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-20 text-center w-full opacity-0"
          ref={(el) => (linksRef.current[navLinks.length + 1] = el)}
        >
          <p>Nørrebrogade 26, 2200 København N</p>
          <p>kontakt@spotter.com</p>
          <p>+45 22 38 42 20</p>
        </div>
      </div>
    </>
  );
}
