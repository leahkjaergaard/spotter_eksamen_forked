"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "../lib/useCartStore";

export default function Basket() {
  const basketRef = useRef(null);
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const closeCart = useCartStore((state) => state.closeCart);

  useEffect(() => {
    if (basketRef.current) {
      gsap.to(basketRef.current, {
        duration: 0.5,
        x: isOpen ? 0 : 400,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      {/* Kurven */}
      <div ref={basketRef} className="fixed top-0 right-0 w-[300px] h-full bg-[var(--white)] shadow-lg p-6 z-[999] translate-x-[400px] overflow-y-auto">
        <button onClick={closeCart} className="text-gray-500 hover:text-[var(--black)] text-sm">
          Luk ✕
        </button>

        <h2 className="text-xl font-bold mb-6">Din kurv</h2>

        {items.length === 0 ? (
          <p className="text-sm text-gray-500">Kurven er tom.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="text-sm flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{item.price * item.quantity},–</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-semibold text-right">Total: {totalPrice},–</div>
          </>
        )}
      </div>

      {/* Kurv ikon */}
      <button id="cart-button" onClick={toggleCart} className="z-50 text-[var(--black)]">
        <div className="relative text-3xl">
          <FiShoppingCart />
          {totalItems > 0 && (
            <span className="bg-red-500 text-[var(--white)] text-xs w-5 h-5 rounded-full flex items-center justify-center absolute -top-1 -right-2">
              {totalItems}
            </span>
          )}
        </div>
      </button>
    </>
  );
}
