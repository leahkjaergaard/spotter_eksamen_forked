"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ProductSlugPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState("Standard");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase.from("spotter_produkter").select("*").eq("slug", slug).single();

      if (error) {
        console.error("Produkt ikke fundet:", error);
      } else {
        setProduct(data);
      }

      setLoading(false);
    }

    if (slug) fetchProduct();
  }, [slug]);

  if (loading) return <p className="p-6">Indlæser produkt...</p>;
  if (!product) return <p className="p-6">Produkt ikke fundet.</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <Image src={product.image} alt={product.name} width={800} height={800} className="w-full object-contain rounded" />
      </div>

      <div>
        <Breadcrumbs product={product} />

        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 text-sm mb-4">{product.category}</p>

        <p className="text-2xl font-semibold mb-4">{product.price},–</p>

        <div className="mb-4">
          <label htmlFor="variant" className="block text-sm font-medium mb-1">
            Vælg variant:
          </label>
          <select id="variant" value={selectedVariant} onChange={(e) => setSelectedVariant(e.target.value)} className="border px-3 py-2 rounded w-full">
            <option>Jordbær 1</option>
            <option>Jordbær 2</option>
            <option>Jordbær 3</option>
          </select>
        </div>

        {product.sold_out ? <p className="text-red-600 font-bold">Ikke på lager</p> : <button className="bg-black text-white px-6 py-3 rounded text-sm hover:bg-gray-800 transition-all">Læg i kurv</button>}

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2">Produktinfo</h3>
          <p className="text-sm text-gray-600 leading-relaxed">Dette er en placeholder beskrivelse. Du kan tilføje et "description"-felt i Supabase og erstatte denne tekst.</p>
        </div>
      </div>
    </div>
  );
}
