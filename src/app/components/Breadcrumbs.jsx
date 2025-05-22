"use client";
import Link from "next/link";

export default function Breadcrumbs({ product }) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline">
            Forside
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/productlist" className="hover:underline">
            Produkter
          </Link>
        </li>
        <li>/</li>
        <li className="text-[var(--black)] font-semibold">{product.name}</li>
      </ol>
    </nav>
  );
}
