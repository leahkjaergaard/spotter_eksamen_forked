"use client";

import Image from "next/image";
import Header from "../components/Header";

export default function concact() {
    return (
      <main>
        <Header />
        <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-16 bg-[var(--white)]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-6xl">
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/photos/kontaktbutik.webp"
            alt="Kontakt os billede"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 text-left space-y-6 w-full">
          <h1 className="text-[clamp(2rem,3.2vw,4rem)] text-black font-bold tracking-tighter">Kontakt os</h1>
          <p className="text-[clamp(0.2rem,4vw,1.2rem)]">
            Har du spørgsmål? Skriv til os her – vi vender tilbage hurtigst muligt.
          </p>

          <form className="space-y-4">
  <input
    type="text"
    placeholder="Navn"
    className="w-full border border-black rounded px-4 py-2 text-sm focus:outline-none"
    required
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full border border-[var(--black)] rounded px-4 py-2 text-sm focus:outline-none"
    required
  />
  <textarea
    placeholder="Besked"
    rows="4"
    className="w-full border border-[var(--black)] rounded px-4 py-2 text-sm focus:outline-none resize-none min-h-[120px]"
    required
  ></textarea>
  <button
  type="submit"
  className="border bg-[var(--black)] text-[var(--white)] px-6 py-2 text-xs tracking-wider hover:bg-[var(--white)] hover:text-[var(--black)] transition rounded-xl w-30 text-center"
>
  Send
</button>

</form>
        </div>
      </div>
    </section>
      </main>
    );
  }