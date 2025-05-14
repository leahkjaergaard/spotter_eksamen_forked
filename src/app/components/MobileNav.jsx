"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function MobileNav({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(menuRef.current, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: "power3.out",
      pointerEvents: "auto",
    });

    if (isOpen) {
      tl.play();
    } else {
      gsap.to(menuRef.current, {
        duration: 0.3,
        y: "-100%",
        opacity: 0,
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  return (
    <nav ref={menuRef} className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-2xl font-semibold z-40 opacity-0 pointer-events-none -translate-y-full">
      <Link href="/shop" onClick={() => setIsOpen(false)}>
        Shop
      </Link>
      <Link href="/showroom" onClick={() => setIsOpen(false)}>
        Showroom
      </Link>
      <Link href="/om-os" onClick={() => setIsOpen(false)}>
        Om os
      </Link>
      <Link href="/kontakt" onClick={() => setIsOpen(false)}>
        Kontakt
      </Link>
    </nav>
  );
}
