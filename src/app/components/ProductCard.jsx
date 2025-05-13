"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function ProductCard({ product, openBasket }) {
  const cardRef = useRef();
  const isSoldOut = product.sold_out === true;

  const handleAddToCart = () => {
    const originalCard = cardRef.current;
    const cartButton = document.getElementById("cart-button");

    if (!originalCard || !cartButton) return;

    const clone = originalCard.cloneNode(true);
    const originalRect = originalCard.getBoundingClientRect();
    const targetRect = cartButton.getBoundingClientRect();

    clone.style.position = "fixed";
    clone.style.top = `${originalRect.top}px`;
    clone.style.left = `${originalRect.left}px`;
    clone.style.width = `${originalRect.width}px`;
    clone.style.height = `${originalRect.height}px`;
    clone.style.zIndex = 1000;
    clone.style.pointerEvents = "none";
    clone.style.margin = 0;
    clone.style.transformOrigin = "top left";
    clone.classList.add("bg-white", "rounded", "shadow");
    document.body.appendChild(clone);

    gsap.to(clone, {
      top: targetRect.top,
      left: targetRect.left,
      scale: 0.1,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        document.body.removeChild(clone);
        openBasket?.();
      },
    });
  };

  return (
    <div ref={cardRef} className="relative">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="border p-4 rounded shadow hover:shadow-lg transition-all bg-white">
          {isSoldOut && <div className="absolute top-2 left-2 bg-red-800 text-white text-xs px-2 py-1 rounded">UDSOLGT</div>}

          {product.sale && <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded font-semibold">{typeof product.sale === "string" ? product.sale : "TILBUD"}</div>}

          <div className="flex justify-center items-center h-[200px] mb-4">
            <Image src={product.image} alt={product.name} width={300} height={150} className="object-contain" />
          </div>

          <div className="text-center">
            <h3 className="font-bold uppercase text-sm mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-1">{product.category}</p>
            {isSoldOut ? <p className="text-red-600 font-semibold">Ikke på lager</p> : <p className="text-base font-semibold">{product.price},–</p>}
          </div>
        </div>
      </Link>

      {!isSoldOut && (
        <button
          className="absolute bottom-4 right-4 bg-black text-white px-4 py-1 text-sm rounded hover:bg-gray-800 transition-all z-10"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          Læg i kurv
        </button>
      )}
    </div>
  );
}
