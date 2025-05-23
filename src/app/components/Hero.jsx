"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = gsap.utils.toArray(".collage-img");
    const container = containerRef.current;

    if (!container || images.length === 0) return;

    const containerBounds = container.getBoundingClientRect();
    const centerX = containerBounds.width / 2;
    const centerY = containerBounds.height / 2;

    // Flyt hvert billede midlertidigt til midten
    images.forEach((img) => {
      const bounds = img.getBoundingClientRect();
      const offsetLeft = bounds.left - containerBounds.left;
      const offsetTop = bounds.top - containerBounds.top;

      const dx = centerX - offsetLeft - bounds.width / 2;
      const dy = centerY - offsetTop - bounds.height / 2;

      gsap.set(img, {
        x: dx,
        y: dy,
        scale: 0.5,
        opacity: 0,
      });
    });

    const tl = gsap.timeline();

    tl.to(images, {
      opacity: 1,
      scale: 1,
      stagger: 0.3,
      duration: 0.8,
      ease: "power2.out",
    }).to(
      images,
      {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "+=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="h-screen relative px-[clamp(4rem,12vw,20rem)] flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-[1600px] h-[600px]"
      >
        <Image
          src="https://picsum.photos/350/480?grayscale&random=1"
          alt="Random 1"
          width={350}
          height={480}
          className="absolute top-15 left-0 z-0 object-cover collage-img"
        />
         <Image
          src="https://picsum.photos/430/280?grayscale&random=5"
          alt="Random 5"
          width={430}
          height={280}
          className="absolute top-5 right-10 z-0 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/300/280?grayscale&random=4"
          alt="Random 4"
          width={300}
          height={280}
          className="absolute bottom-5 right-0 z-0 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/499/300?grayscale&random=3"
          alt="Random 3"
          width={499}
          height={300}
          className="absolute bottom-0 left-87.5 z-0 object-cover collage-img"
        />
        <Image
          src="https://picsum.photos/330/300?grayscale&random=2"
          alt="Random 2"
          width={330}
          height={300}
          className="absolute top-0 left-87.5 z-0 object-cover collage-img"
        />
      </div>
    </section>
  );
}