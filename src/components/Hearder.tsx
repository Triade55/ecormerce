import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select
            className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
          >
            <option>all categories</option>
          </select>
          <input
            className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
          <Search size={30} />
        </div>

        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span className="font-bold md:text-xl">07 078 053 35</span>
          <span className="font-semibold text-sm text-gray-400">
            Support 24/7
          </span>
        </div>

        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="">
                <User />
              </a>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="">
                <div className="absolute -top-1 right-0 z-10 bg-primary text-white text-xs font-bold px-1 py-0.5 rounded-sm">
                  3
                </div>
                <Heart size={32} />
              </a>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="">
                <div className="absolute -top-1 right-0 z-10 bg-primary text-white text-xs font-bold px-1 py-0.5 rounded-sm">
                  12
                </div>
                <ShoppingCart size={32} />
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Your Cart</span>
          <span>$2,650,59</span>
        </div>
      </div>

      <hr />
    </header>
  );
}
