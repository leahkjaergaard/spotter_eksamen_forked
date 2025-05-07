"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextToHeader() {
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      h1Ref.current,
      { y: "60vh",
        scale: 10,
        color: "#6E22D7"
      }, // starter længere nede (midten-ish)
      {
        y: "2.5vh", // bevæger sig op til top
        scale: 1.2,
        color: "#000000",
        ease: "none",
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <h1
      ref={h1Ref}
      className="sticky top-0 text-[clamp(1rem,4vw,1.5rem)] font-bold text-center z-20"
    >
      Spotter.
    </h1>
  );
}
