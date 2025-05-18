"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-10">
      <div className="overflow-hidden">
        <h1 className="text-[clamp(2rem,30.5vw,30rem)] font-bold italic text-center leading-none tracking-[-0.08em] -ml-[8.5%]">Spotter</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-[clamp(4rem,10vw,20rem)] text-sm pt-20">
      <div className="flex justify-center">
        <div>
          <h3 className="font-bold pb-2 justify-center min-w-[175px] lg:min-w-fit">KONTAKT</h3>
          <p>Spotter</p>
          <p>Nørrebrogade 26</p>
          <p>2200 København N</p>
          <br />
          <p>CVR: 81818181</p>
          <p>
            Tlf:{" "}
            <a href="tel:+4522384220" className="underline hover:text-black">
              +45 22 38 42 20
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:kontakt@spotter.com" className="underline hover:text-black">
              kontakt@spotter.com
            </a>
          </p>
          </div>
        </div>

        <div className="flex justify-center">
        <div>
          <h3 className="font-bold pb-2 min-w-[150px] lg:min-w-fit">INFORMATION</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/terms" className="hover:underline">
                Handelsbetingelser
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
          </div>
        </div>

        <div className="flex justify-center">
        <div>
          <h3 className="font-bold pb-2 min-w-[175px] lg:min-w-fit">FØLG MED</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-black text-lg">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-black text-lg">
              <FaTiktok />
            </a>
          </div>
          </div>
        </div>

        <div className="flex justify-center">
        <div>
          <h3 className="font-bold pb-2 min-w-[150px] lg:min-w-fit">SPOTTER</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/om-os" className="hover:underline">
                Om os
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}
