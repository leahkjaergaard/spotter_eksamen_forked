"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsapPlugins } from "../lib/registerGsapPlugins";

export default function ScrollTriggerSetup() {
  const pathname = usePathname();

  useEffect(() => {
    registerGsapPlugins(); // sikrer kun ét kald

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(); // genberegn triggers
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // ryd op ved sideskift
    };
  }, [pathname]);

  return null;
}
