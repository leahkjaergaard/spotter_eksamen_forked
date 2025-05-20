"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useCartStore } from "../lib/useCartStore"; // 🆕 Zustand import

export default function ProductCard({ product }) {
  const cardRef = useRef();
  const isSoldOut = product.sold_out === true;
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = () => {
    const originalCard = cardRef.current;
    const cartButton = document.getElementById("cart-button");

    if (!originalCard || !cartButton) return;

    // 🛒 Add to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

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
      },
    });
  };

  return (
    <div ref={cardRef} className="relative product-card border p-4 rounded shadow hover:shadow-lg transition-all bg-white flex flex-col justify-between w-full max-w-[500px] mx-auto">
      <Link href={`/product/${product.slug}`}>
        <div className="mb-4">
        <div className="relative w-full aspect-[1/1] mb-4 overflow-hidden rounded">
        <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover"
        />
    </div>
        </div>

        <div className="text-left">
          <h3 className="font-bold uppercase text-base mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          {isSoldOut ? <p className="text-red-600 font-semibold">Ikke på lager</p> : <p className="text-base font-semibold">{product.price},–</p>}
        </div>
      </Link>

      <div className="flex justify-between items-center mt-4">
        {!isSoldOut && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="text-xl text-black hover:text-gray-700"
            aria-label="Læg i kurv"
          >
            <PiShoppingCartSimple />
          </button>
        )}
        <Link href={`/product/${product.slug}`} className="text-sm border-b-2 border-black hover:opacity-70">
          Læs mere
        </Link>
      </div>
    </div>
  );
}
