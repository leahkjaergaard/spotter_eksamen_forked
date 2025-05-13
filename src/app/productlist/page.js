"use client";
import { useRef, useEffect, useState } from "react";
import Basket from "../components/Basket";
import GetProducts from "../components/GetProducts";

export default function ProductListPage() {
  const basketRef = useRef();
  const [openBasketFn, setOpenBasketFn] = useState(null);

  useEffect(() => {
    // Når ref'en er tilgængelig, sæt openBasket-funktionen
    if (basketRef.current) {
      setOpenBasketFn(() => basketRef.current.openBasket);
    }
  }, [basketRef.current]);

  return (
    <>
      <Basket ref={basketRef} />
      {openBasketFn && <GetProducts openBasket={openBasketFn} />}
    </>
  );
}
