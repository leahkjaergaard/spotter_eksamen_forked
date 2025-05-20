"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProductCard from "./ProductCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BestSellers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("spotter_produkter")
        .select("*")
        .eq("bestsellers", true); // 👈 vis kun bestsellers

      if (error) {
        console.error("Supabase-fejl:", error);
      } else {
        setProducts(data);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-10">
      <h1 className="text-[clamp(2rem,3.2vw,5rem)] text-black font-bold tracking-tighter">
        Bestsellers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
        {products.length === 0 ? (
          <p>Ingen produkter fundet.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
