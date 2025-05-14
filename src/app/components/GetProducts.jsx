"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GetProducts({ openBasket }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("spotter_produkter").select("*");
      if (error) {
        console.error("Supabase-fejl:", error);
      } else {
        setProducts(data);
      }
    }
    fetchData();
  }, []);

  // 🔁 Scroll animation
  useEffect(() => {
    const cards = gsap.utils.toArray(".product-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [products]);

  const categories = [...new Set(products.map((p) => p.category))];
  const filteredProducts = selectedCategory === "Alle" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="px-6 py-8">
      <h2 className="text-9xl font-black mb-6">Produkter</h2>
      <div className="flex gap-8">
        <ProductFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">{filteredProducts.length === 0 ? <p>Ingen produkter fundet.</p> : filteredProducts.map((product) => <ProductCard key={product.id} product={product} openBasket={openBasket} />)}</div>
      </div>
    </section>
  );
}
