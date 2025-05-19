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
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <Image src={product.image} alt={product.name} width={800} height={800} className="w-full h-auto object-cover rounded" />
        <div className="mt-4 flex gap-4">
          <Image src={product.image} alt="thumb" width={100} height={100} className="object-cover rounded cursor-pointer border" />
          <Image src={product.image} alt="thumb" width={100} height={100} className="object-cover rounded cursor-pointer border" />
        </div>
      </div>

      <div className="flex flex-col justify-start">
        <Breadcrumbs product={product} />
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-sm text-gray-500 mb-6">{product.category}</p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">Proteinbar med peanut og banan. Den nyeste bar på markedet, som allerede har solgt mange eksemplarer.</p>

        <hr className="mb-6" />

        <div className="mb-6">
          <label htmlFor="variant" className="block text-sm font-medium mb-2 text-gray-700">
            Vælg variant:
          </label>
          <select id="variant" value={selectedVariant} onChange={(e) => setSelectedVariant(e.target.value)} className="border border-gray-300 px-4 py-2 rounded w-full">
            <option>Jordbær 1</option>
            <option>Jordbær 2</option>
            <option>Jordbær 3</option>
          </select>
        </div>

        <div className="mb-4">
          <p className="text-3xl font-semibold mb-2">{product.price},–</p>
          {product.sold_out ? (
            <p className="text-red-600 font-semibold">Ikke på lager</p>
          ) : (
            <>
              <button className="w-full bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition mb-3">Læg i kurv</button>{" "}
            </>
          )}
        </div>

        <hr className="my-6" />

        <div>
          <h3 className="text-md font-semibold mb-2">Spotters råd til dig</h3>
          <p className="text-sm text-gray-600 leading-relaxed">Det er vigtigt for os at nævne, at en proteinbar ikke skal erstatte anden form for kost, men skal stå som et suplement til en sund og nærende kost. Hvis du er det mindste i tvivl om noget, så tøv ikke med at komme ned i butikken og snak med os, eller send os en mail på kontakt@spotter.com </p>
        </div>
      </div>
    </div>
  );
}
