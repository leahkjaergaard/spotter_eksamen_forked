"use client";
import Link from "next/link";

export default function HeaderIndex() {
  return (
    <header className="w-full bg-white text-black px-6 py-4 fixed z-40">
      <div className="mx-auto flex justify-between items-center text-[clamp(1rem,4vw,1.5rem)] font-bold">
        {/* Venstre side */}
        <nav className="flex gap-8">
          <Link href="/productlist" className="z-50">
            Produkter
          </Link>
          <a href="#omos" className="z-50">
            Om os
          </a>
        </nav>

        {/* Højre side */}
        <div className="z-50">LOGO</div>
      </div>
    </header>
  );
}
