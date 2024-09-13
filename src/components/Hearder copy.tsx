import Image from "next/image";
import Link from "next/link";
import React from "react";
import Profile from "./Profile";
import Icon from "./Icon";
import { Mail, ShoppingCart } from "lucide-react";

type Props = {};

export default function Hearder({}: Props) {
  return (
    <div className="flex justify-between p-4 border shadow-2xl ">
      <div className="flex gap-4 items-center">
        <Image src="/logo.png" alt="" width={100} height={100} />
        <div className="flex gap-4">
          <Link href={""}>Categories</Link>
          <Link href={""}>Brand</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>FAQs</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Icon bgColor="007BFF">
          <ShoppingCart  />
        </Icon>
        <Icon bgColor="E3E392" variant="notifi">
          <Mail  />
        </Icon>
        <div className="flex gap-4 items-center">
          <Profile />
          <div className="">
            <div className="text-sm text-gray-400">Hi , wellcome</div>
            <div className="text-xl">Jean Vanga</div>
          </div>
        </div>
      </div>
    </div>
  );
}
