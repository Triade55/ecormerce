import { categoryType } from "@/lib/types";
import Link from "next/link";
import React from "react";

type PropsCategory = {
  category: categoryType;
};

function Category({ category }: PropsCategory) {
  return (
    <Link
      className=" pl-8 py-1 flex text-sm hover:bg-gray-200 capitalize"
      href={"/"}
    >
      {category.name}{" "}
    </Link>
  );
}

type PropsCategories = {};
export default function Categories({}: PropsCategories) {
  return (
    <div className="bg-white rounded-t-md shadow-md">
      <div className="uppercase font-semibold pt-2 pl-4 text-sm">Catégories</div>
        <Category category={{ id: "1", name: "hu" }} />
        <Category category={{ id: "1", name: "hu" }} />
        <Category category={{ id: "1", name: "hu" }} />
      
    </div>
  );
}
