"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SoMeCarrussel() {
  const trackRef = useRef(null);
  const tlRef = useRef(null); // Gem timeline her

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    const tl = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });

    tlRef.current = tl;

    // Pause/resume when hovering individual images
    const imgs = track.querySelectorAll("img");
    imgs.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(tl, { timeScale: 0, duration: 0.5 }); // Slow pause
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(tl, { timeScale: 1, duration: 0.5 }); // Resume smoothly
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const images = [
    "https://picsum.photos/300/300?grayscale&random=1",
    "https://picsum.photos/300/300?grayscale&random=2",
    "https://picsum.photos/300/300?grayscale&random=3",
    "https://picsum.photos/300/300?grayscale&random=4",
    "https://picsum.photos/300/300?grayscale&random=5",
    "https://picsum.photos/300/300?grayscale&random=6",
    "https://picsum.photos/300/300?grayscale&random=7",
    "https://picsum.photos/300/300?grayscale&random=8",
  ];

  const loopImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full pt-20">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {loopImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[25%] px-2"
          >
            <img
              src={src}
              alt={`Carousel Image ${index + 1}`}
              className="w-full object-cover rounded-xl cursor-pointer"
              style={{
                height: `${150 + (index % 4) * 50}px`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
