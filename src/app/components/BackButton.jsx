"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label = "← Tilbage" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-sm text-[var(--black)] font-bold hover:text-gray-700 "
    >
      {label}
    </button>
  );
}
