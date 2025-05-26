"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useCartStore } from "../lib/useCartStore";

export default function ProductCard({ product }) {
  const cardRef2 = useRef();
  const isSoldOut = product.sold_out === true;
  const isOnSale = product.sale === true;
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const salePrice = Math.round(product.price * 0.7);

  const handleAddToCart = () => {
    const originalCard = cardRef2.current;
    const cartButton = document.getElementById("cart-button");

    if (!originalCard || !cartButton) return;

    addItem({
      id: product.id,
      name: product.name,
      price: isOnSale ? salePrice : product.price,
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
    clone.classList.add("bg-[var(--white)]", "rounded", "shadow");
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
    <div
      ref={cardRef2}
      className="group relative product-card border p-4 rounded shadow hover:shadow-lg transition-all bg-[var(--white)] flex flex-col justify-between w-full max-w-[500px] mx-auto"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="mb-4 relative">
          <div className="relative w-full aspect-[1/1] mb-4 overflow-hidden rounded">
            {/* Første billede */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover billede hvis det findes */}
            {product.image2 && (
              <Image
                src={product.image2}
                alt={`${product.name} alternativt billede`}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </div>

          {/* SALE badge */}
          {isOnSale && (
            <div className="absolute top-2 left-2 bg-[var(--spotter-green)] text-white text-xs font-bold px-2 py-1 rounded">
              TILBUD
            </div>
          )}
        </div>

        <div className="text-left">
          <h3 className="font-bold uppercase text-base mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>

          {isSoldOut ? (
            <p className="text-red-600 font-semibold">Ikke på lager</p>
          ) : isOnSale ? (
            <div className="flex gap-2 items-baseline">
              <span className="text-gray-400 line-through text-sm">{product.price},–</span>
              <span className="text-base font-semibold text-[var(--spotter-green)]">
                {salePrice},–
              </span>
            </div>
          ) : (
            <p className="text-base font-semibold">{product.price},–</p>
          )}
        </div>
      </Link>

      <div className="flex justify-between items-center mt-4">
        {!isSoldOut && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="text-xl text-[var(--black)] hover:text-gray-700"
            aria-label="Læg i kurv"
          >
            <div className="border bg-[var(--black)] text-[var(--white)] px-6 py-2 text-xs tracking-wider hover:bg-[var(--white)] hover:text-[var(--black)] transition rounded-xl w-30">
              Læg i kurv
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
