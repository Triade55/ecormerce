import {
  ChevronDown,
  ChevronUp,
  ChevronUpCircle,
  EyeIcon,
  Heart,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Stars from "./Stars";

export default function CardProduct() {
  return (
    <div className="border relative p-4 bg-white rounded-3xl">

      <div className="flex gap-1 ">
        <Image
          src="/one.jpg"
          alt=""
          width={100}
          height={100}
          className="w-full"
        />
        <div className="flex flex-col gap-4">
        <Image src={"/two.jpg"} alt="" width={100} height={100} />
        <Image src={"/three.jpg"} alt="" width={100} height={100} />
        <Image src={"/three.jpg"} alt="" width={100} height={100} />
        <Image src={"/two.jpg"} alt="" width={100} height={100} />
        </div>
      </div>
      <div className="m-4 flex flex-col gap-2">
        <div className="text-xl">Lorem ipsum dolor sit amet.</div>
        <div className="flex gap-2">
          <Stars n={4} />
        </div>
        <div className="">10.000 FCFA</div>
        <div className="flex gap-2">
          <Button >Add to Cart</Button>
          <Button size="icon" variant="outline">
            <Heart />
          </Button>

          <Button size="icon" variant="outline" >
            <EyeIcon />
          </Button>
        </div>
      </div>
      
    </div>
  );
}
