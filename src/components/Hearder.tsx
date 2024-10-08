import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./cart";

export default function Hearder() {
  return (
    <header className="bg-white rounded-xl sticky top-2 z-10">
      <div className="container mx-auto px-4 py-8 flex items-center">
        <div className="mr-auto md:w-48 flex-shrink-0">
          <Link href={"/"}>
            <Image
              className="h-8 md:h-10"
              src="/logo.png"
              alt=""
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center relative">
          <select
            className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
          >
            <option>all categories</option>
          </select>
            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 outline-none "
              type="text"
              placeholder="I'm searching for ..."
            />
            <Search size={30} className="absolute end-2" />
        </div>

        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span className="font-bold">07 078 053 35</span>
          <span className="font-semibold text-sm text-gray-400">
            Support 24/7
          </span>
        </div>

        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link className="" href="/user">
                <User />
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Link className="" href="/heart">
                <div className="absolute -top-1 right-0 z-10 bg-primary text-white text-xs font-bold px-1 py-0.5 rounded-sm">
                  3
                </div>
                <Heart size={32} />
              </Link>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <Cart />
            </li>
          </ul>
        </nav>

        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Ton Panier</span>
          <span className="">1.000.000.000.000 FCFA</span>
        </div>
      </div>

      <hr />
    </header>
  );
}
