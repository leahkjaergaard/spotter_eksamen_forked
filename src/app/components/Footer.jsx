"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="overflow-hidden">
        <h1 className="text-[clamp(2rem,21vw,20rem)] font-bold text-center leading-none">SPOTTER</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6 max-w-[1200px] mx-auto text-sm">
        <div>
          <h3 className="font-bold mb-2">KONTAKT</h3>
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

        <div>
          <h3 className="font-bold mb-2">INFORMATION</h3>
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

        <div>
          <h3 className="font-bold mb-2">FØLG MED</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-black text-lg">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-black text-lg">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">SPOTTER</h3>
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
    </footer>
  );
}
