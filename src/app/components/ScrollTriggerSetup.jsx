"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function ScrollTriggerSetup() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial refresh for layout shifts
    ScrollTrigger.refresh();

    // Optional: kill all triggers on unmount if du får problemer
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // vi skal ikke vise noget
}
