"use client";

import "../../app/globals.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TextToHeader() {
  const h1Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation (efter 2.5s)
    gsap.fromTo(
      h1Ref.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2.3, // <-- matcher Hero-timeline
        duration: 1,
        ease: "power2.out",
      }
    );

  // Vent lidt med at sætte startpositionen (for at undgå at scrollede sider fejlplacerer)
  requestAnimationFrame(() => {
    gsap.set(h1Ref.current, {
      y: "30rem",
      scale: 10,
      color: "#6DFFB9",
    });

    gsap.to(h1Ref.current, {
      y: "1rem",
      scale: 1.2,
      color: "#000000",
      ease: "none",
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    // Tving ScrollTrigger til at opdatere
    ScrollTrigger.refresh();
  });
}, []);


  return (
    <h1
      ref={h1Ref}
      className="sticky top-0 text-[clamp(1rem,4vw,1.5rem)] font-bold text-center z-50 opacity-0 italic tracking-[-0.08em]"
    >
      Spotter.
    </h1>
  );
}
