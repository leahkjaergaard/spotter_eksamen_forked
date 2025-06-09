"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ loadingImages = [], done, onDone }) {
  useEffect(() => {
    if (done) {
      const tl = gsap.timeline({
        onComplete: onDone,
      });

      tl.to(".loader-text", {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      }).to(".loader-container", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [done, onDone]);

  return (
    <div className="loader-container fixed top-0 left-0 w-full h-full z-[9999] bg-white flex flex-col items-center justify-center">
      <div className="loader-text text-xl font-bold tracking-wide text-black animate-pulse">
        Spotter loader...
      </div>
    </div>
  );
}
