"use client";
import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";

const Basket = forwardRef(function Basket(_, ref) {
  const basketRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  useImperativeHandle(ref, () => ({
    openBasket: () => setIsOpen(true),
    addItem: (item) => {
      setItems((prevItems) => {
        const existing = prevItems.find((p) => p.id === item.id);
        if (existing) {
          return prevItems.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p));
        }
        return [...prevItems, { ...item, quantity: 1 }];
      });
      animateCartButton();
    },
  }));

  useEffect(() => {
    if (basketRef.current) {
      gsap.to(basketRef.current, {
        duration: 0.5,
        x: isOpen ? 0 : 400,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const animateCartButton = () => {
    const cartButton = document.getElementById("cart-button");
    if (cartButton) {
      gsap.fromTo(cartButton, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" });
    }
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <button id="cart-button" onClick={() => setIsOpen((prev) => !prev)} className="fixed top-6 right-6 z-50 text-black">
        <div className="relative text-3xl">
          <FiShoppingCart />
          {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{totalItems}</span>}
        </div>
      </button>

      <div ref={basketRef} className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg p-6 z-40 translate-x-[400px]">
        <h2 className="text-xl font-bold mb-4">Din kurv</h2>
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
    </>
  );
});

export default Basket;
