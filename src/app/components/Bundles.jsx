"use client";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import ProductCard from "./ProductCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bundles() {
  const [products, setProducts] = useState([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    async function fetchData() {
        const { data, error } = await supabase
          .from("spotter_produkter")
          .select("*")
          .eq("category", "Bundles");
      
        if (error) {
          console.error("Supabase-fejl:", error);
        } else {
          setProducts(data);
        }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
  
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
      });
  
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          delay: i * 0.1,
          duration: 0.7,
          ease: "power2.out",
        });
      });
  
      // 🧠 Dette sikrer korrekt timing
      ScrollTrigger.refresh();
    }, sectionRef);
  
    return () => ctx.revert();
  }, [products]);

  return (
    <section ref={sectionRef} className="px-[clamp(4rem,10vw,20rem)] py-10 flex flex-col items-center">
      <h1
        ref={titleRef}
        className="text-[clamp(2rem,3.2vw,5rem)] text-[var(--black)] font-bold tracking-tighter mb-8"
      >
        Bestsellers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
        {products.length === 0 ? (
          <p>Ingen produkter fundet.</p>
        ) : (
          products.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
