import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props ={
    variante?:""
}
export default function CardSection({variante}:Props) {

  return (
    <Link href={"/"} className="hover:shadow-2xl p-4 rounded-xl flex flex-col relative">
      <Image
        src="/fils.jpg"
        alt="lms"
        width="11"
        height={10}
        className="w-full h-48"
      />
      <div className="text-sm truncate">Lorem ipsum dolor sit amet.</div>
      <div className="">
        <div
          className="
        font-bold"
        >
          1.000.000 FCFA
        </div>
        <div className="line-through ml-2 text-xs">990.000.000 fcfa</div>
      </div>
      <div className="absolute top-4 shadow-sm end-4 bg-primary text-sm p-1 rounded-sm">
        -45%
      </div>
    </Link >
  );
}
