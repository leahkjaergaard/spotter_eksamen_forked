// lib/gsap.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sørg for, at det kun sker én gang
let isRegistered = false;

export function registerGsapPlugins() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
}