"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function GetProducts({ openBasket, addToBasket }) {
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
    <section className="px-4 sm:px-6 lg:px-16 py-10">
      <div className="grid md:grid-cols-2 items-center gap-8 mb-16">
        <div>
        <nav className="text-sm text-gray-500 mb-6 mt-25">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline">
            Forside
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/productlist" className="hover:underline">
            Produkter
          </Link>
        </li>
        </ol>
    </nav>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-black">Alle produkter</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
        <ProductFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">{filteredProducts.length === 0 ? <p>Ingen produkter fundet.</p> : filteredProducts.map((product) => <ProductCard key={product.id} product={product} openBasket={openBasket} addToBasket={addToBasket} />)}</div>
      </div>
    </section>
  );
}
