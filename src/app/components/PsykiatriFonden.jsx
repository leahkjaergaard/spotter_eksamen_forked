"use client";
import Image from "next/image";

export default function PsykiatriFonden() {
  return (
    <section className="w-full">
      {/* Hero-billede med overlay tekst */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src="/psykiatrifonden-hero.jpg" // Du skal lægge dette billede i din public-mappe
          alt="Psykiatrifonden hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide">Psykiatrifonden</h1>
        </div>
      </div>

      {/* Indhold */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Vi støtter mental sundhed</h2>
        <p className="text-lg leading-8 text-gray-700">Psykiatrifonden arbejder for at udbrede viden om mental sundhed og nedbryde tabuer om psykisk sygdom. Med oplysning, rådgivning og støtte hjælper de tusindvis af danskere hvert år. Vi samarbejder med Psykiatrifonden for at gøre en forskel i hverdagen.</p>
      </div>
    </section>
  );
}
