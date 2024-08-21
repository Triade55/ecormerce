import React, { Children } from "react";
import { Button } from "./ui/button";
import { ChevronRight, ShoppingCart } from "lucide-react";

type Props = {
  bgColor: string;
  variant?: "default" | "notifi";
  number?: number;
  children:React.ReactNode
};

export default function Icon({ bgColor, variant = "default",children }: Props) {
  return (
    <div
      className={`rounded-full relative border-2 p-4 inline-block bg-[#${bgColor}]`}
    >
        {children}
      
      {variant === "notifi" && (
        <div className="absolute text-sm top-0 text-white end-0 p-1.5 rounded-full bg-red-500">
          
        </div>
      )}
      {variant === "default" && (
        <div className="absolute text-sm bg-black top-0 text-white -end-1 px-1 rounded-full">
          5
        </div>
      )}
    </div>
  );
}
