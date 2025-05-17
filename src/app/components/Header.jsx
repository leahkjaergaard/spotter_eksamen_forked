"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hidden md:flex w-full py-6 px-6 justify-between items-center text-black font-medium text-lg">
      {/* Venstre links */}
      <div className="flex gap-6">
        <Link href="/productlist" className="hover:underline">
          Produkter
        </Link>
        <Link href="/om-os" className="hover:underline">
          Om os
        </Link>
        <Link href="/psykiatrifonden" className="hover:underline">
          Psykiatrifonden
        </Link>
        <Link href="/contact" className="hover:underline">
          Kontakt
        </Link>
      </div>

      {/* Logo i midten */}
      <div className="absolute left-1/2 transform -translate-x-1/2 font-bold italic tracking-[-0.08em] text-2xl">
        <Link href="/">Spotter.</Link>
      </div>
    </header>
  );
}
