"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerSetup() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Justér hvis nødvendigt

    return () => clearTimeout(timeout);
  }, [pathname]); // <-- kør hver gang ruten ændrer sig (altså ved navigation)

  return null;
}
