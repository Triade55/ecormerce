"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import clsx from "clsx";
import useCart from "@/hooks/useCart";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  oldPrice?: number;
};

type Props = {
  product: Product;
};

export default function CardProduct({ product }: Props) {
  const [heart, setHeart] = useState<boolean>(false);
  const {addCart} = useCart()
  function handler() {
    addCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity:1
    })
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="container p-0">
        <div className="w-full bg-gray-900 shadow-lg rounded-xl p-4">
          <div className="flex flex-col">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <div className="absolute flex flex-col top-0 right-0 p-3">
                  <button
                    className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1 "
                    onClick={() => setHeart(!heart)}
                  >
                    <Heart
                      className={clsx("text-orange-500", heart && "fill-orange-500", "hover:fill-orange-500")}
                    />
                  </button>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  className=" w-full h-40 object-fill rounded-2xl"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap">
                  <div className="w-full text-sm flex items-center gap-1 text-gray-600">
                    <Star fill="orange" color="orange" className="size-4" />
                    <span className="text-gray-400 whitespace-nowrap mr-3">4.60</span>
                    <span className="mr-2 text-gray-400">{product.category}</span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0">
                    <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate">
                      {product.name}
                    </h2>
                  </div>
                </div>
                <div className="text-xs text-white italic line-through decoration-primary decoration-2">
                  {product.oldPrice ? product.oldPrice + " FCFA" : "2930 FCFA"}
                </div>
                <div className="text-sm text-white font-semibold mt-1 flex justify-end">
                  {product.price} FCFA
                </div>
                <div className="mt-2">
                  <Button variant="default" size="lg" className="rounded-xl w-full" onClick={handler}>
                    <span>Add Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
