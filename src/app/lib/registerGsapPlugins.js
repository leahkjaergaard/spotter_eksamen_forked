import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerGsapPlugins() {
  if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}
