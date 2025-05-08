"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".collage-img");
    const container = containerRef.current;

    const containerBounds = container.getBoundingClientRect();
    const containerCenterX = containerBounds.width / 2;
    const containerCenterY = containerBounds.height / 2;

    // Timeline
    const tl = gsap.timeline();

    // Først: flyt hvert billede fysisk til midten
    images.forEach((img) => {
      const bounds = img.getBoundingClientRect();
      const offsetLeft = bounds.left - containerBounds.left;
      const offsetTop = bounds.top - containerBounds.top;

      const dx = containerCenterX - offsetLeft - bounds.width / 2;
      const dy = containerCenterY - offsetTop - bounds.height / 2;

      // Start hvert billede i midten (forskudt fra dets normale placering)
      gsap.set(img, {
        x: dx,
        y: dy,
        scale: 0.5,
        opacity: 0,
      });
    });

    // Trin 1: fade billederne ind i midten
    tl.to(images, {
      opacity: 1,
      scale: 1,
      stagger: 0.3,
      duration: 0.8,
      ease: "power2.out",
    });

    // Trin 2: flyt dem tilbage til deres normale placering
    tl.to(
      images,
      {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "+=0.2"
    );
  }, []);

  return (
    <section className="h-screen relative px-[clamp(4rem,12vw,20rem)] border-b border-black flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-3xl h-[400px]"
      >
        <Image
          src="https://picsum.photos/250/350?grayscale&random=4"
          alt="Random 4"
          width={250}
          height={350}
          className="absolute -top-10 right-25 shadow-lg z-0 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/400/300?grayscale&random=3"
          alt="Random 3"
          width={400}
          height={300}
          className="absolute bottom-5 left-30 shadow-lg z-10 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/275/315?grayscale&random=2"
          alt="Random 2"
          width={275}
          height={315}
          className="absolute -top-20 left-40 shadow-lg z-20 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/350/325?grayscale&random=5"
          alt="Random 5"
          width={350}
          height={325}
          className="absolute bottom-0 right-0 shadow-lg z-25 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/250/250?grayscale&random=1"
          alt="Random 1"
          width={250}
          height={250}
          className="absolute top-18 left-0 shadow-lg z-30 object-cover collage-img"
        />
        
        
        
        
      </div>
    </section>
  );
}
