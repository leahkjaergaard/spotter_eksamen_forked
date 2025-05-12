"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Image from "next/image";

export default function GetProducts() {
  const [products, setProducts] = useState([]);

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

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Produkter</h2>
      {products.length === 0 ? (
        <p>Ingen produkter fundet.</p>
      ) : (
        <div className="grid gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h3 className="font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <span className="text-sm text-gray-500">{product.category}</span>
              <Image src={product.image} width={200} height={200} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
