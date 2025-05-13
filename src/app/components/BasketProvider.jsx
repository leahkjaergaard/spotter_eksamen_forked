"use client";
import { createContext, useContext, useRef } from "react";
import Basket from "./Basket";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const basketRef = useRef();

  const openBasket = () => {
    if (basketRef.current) {
      basketRef.current.openBasket();
    }
  };

  return (
    <BasketContext.Provider value={{ openBasket }}>
      {children}
      <Basket ref={basketRef} />
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
