"use client";
import { useRef, useEffect } from "react";

export default function HeaderIndex() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Gør ref'en globalt tilgængelig, så du kan tilgå den i TextAnimation
    if (typeof window !== "undefined") {
      window.spotterHeader = headerRef.current;
    }
  }, []);

  return (
    <header
  ref={headerRef}
  className="w-full text-black px-6 py-4 fixed z-30"
>
  {/* BAGGRUND-overlay der bliver transparent */}
  <div
    id="header-bg"
    className="absolute inset-0 bg-white z-[-1] transition-opacity duration-0"
  />

  <div className="mx-auto flex justify-between items-center text-[clamp(1rem,4vw,1.5rem)] font-bold relative z-10">
    <nav className="flex gap-8">
      <a href="#produkter">Produkter</a>
      <a href="#omos">Om os</a>
    </nav>
    <div>LOGO</div>
  </div>
</header>
  );
}
