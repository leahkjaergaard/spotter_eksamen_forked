"use client";
import { useRef, useEffect, useState } from "react";
import Basket from "../components/Basket";
import GetProducts from "../components/GetProducts";
import Footer from "../components/Footer";

export default function ProductListPage() {
  const basketRef = useRef();
  const [basketReady, setBasketReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBasketReady(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Basket ref={basketRef} />
      {basketReady && basketRef.current && <GetProducts openBasket={basketRef.current.openBasket} addToBasket={basketRef.current.addItem} />}
      <Footer />
    </>
  );
}
