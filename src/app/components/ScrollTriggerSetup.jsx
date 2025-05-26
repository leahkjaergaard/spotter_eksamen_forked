"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function ScrollTriggerSetup() {
  useEffect(() => {
    if (!ScrollTrigger?.refresh) return;

    gsap.registerPlugin(ScrollTrigger);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // Justér om nødvendigt

    // Ryd kun timeout – ikke triggers!
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return null; // Ingen visuel rendering
}
