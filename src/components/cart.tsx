"use client";
import useCartStore from "@/hooks/useCart";
import useCart from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Cart() {
    const qte = useCartStore((state) => state.qte);

  return (
    <Link className="" href="/heart">
      <div className="absolute -top-1 right-0 z-10 bg-primary text-white text-xs font-bold px-1 py-0.5 rounded-sm">
        {qte}
      </div>
      <ShoppingCart size={32} />
    </Link>
  );
}
