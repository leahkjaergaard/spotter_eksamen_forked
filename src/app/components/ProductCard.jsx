"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { PiShoppingCartSimple } from "react-icons/pi";

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

    // Fjern direkte styling
    clone.style.position = "fixed";
    clone.style.top = 0;
    clone.style.left = 0;
    clone.style.margin = 0;
    clone.style.zIndex = 1000;
    clone.style.pointerEvents = "none";
    clone.style.transformOrigin = "center center";
    document.body.appendChild(clone);

    const dx = targetRect.left + targetRect.width / 2 - (originalRect.left + originalRect.width / 2);
    const dy = targetRect.top + targetRect.height / 2 - (originalRect.top + originalRect.height / 2);

    // Sæt startposition
    gsap.set(clone, {
      x: originalRect.left,
      y: originalRect.top,
      scale: 1,
      width: originalRect.width,
      height: originalRect.height,
    });

    // Animation
    gsap
      .timeline({
        onComplete: () => {
          document.body.removeChild(clone);
          openBasket?.();
        },
      })
      .to(clone, {
        duration: 0.8,
        x: `+=${dx}`,
        y: `+=${dy}`,
        scale: 0.1,
        ease: "power2.inOut",
      })
      .to(clone, {
        duration: 0.3,
        scale: 0,
        opacity: 0,
        ease: "back.in(1.4)",
      });
  };

  return (
    <div ref={cardRef} className="relative product-card border p-4 rounded shadow hover:shadow-lg transition-all bg-white flex flex-col justify-between w-full max-w-[px] mx-auto">
      <Link href={`/product/${product.slug}`}>
        <div className="mb-4">
          <div className="w-full h-[400px] relative mb-4 overflow-hidden rounded">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
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
