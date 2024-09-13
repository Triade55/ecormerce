import React from "react";
import Stars from "./Stars";
import Image from "next/image";

export default function ProductMin() {
  return <div>
  <Image src="/one.jpg" width={100} height={100} alt="" className="w-full"/>
    <div className="text-xs my-2">
        Lorem ipsum dolor sit amet.
    </div>
  </div>;
}
