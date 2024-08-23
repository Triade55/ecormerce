import ProductMin from "@/components/ProductMin";
import Stars from "@/components/Stars";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Heart, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="border-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      <div className=" flex flex-col justify-between gap-4">
        <Image
          src={"/one.jpg"}
          alt=""
          width={100}
          height={100}
          className="w-full h-full "
        />
        <div className="grid grid-cols-6 gap-4 items-center justify-center">
          <Button size={"icon"} className="rounded-full">
            <ChevronLeft />
          </Button>
          <Image
            src={"/one.jpg"}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={"/one.jpg"}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={"/one.jpg"}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={"/one.jpg"}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <div className="text-end">
            <Button size={"icon"} className="rounded-full ">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-3xl uppercase">Lorem ipsum dolor sit amet.</div>
          <Button size="icon" variant="secondary">
            <Heart />{" "}
          </Button>
        </div>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quos adipisci repellat voluptas eius iusto vel? Deleniti, corporis.
          Quas quod cumque quasi illum perferendis, amet sed officia libero quis
          quam suscipit vero neque quibusdam, et sint. Ipsam laboriosam,
          eligendi tenetur quia mollitia, recusandae, cupiditate nisi aperiam
          libero corrupti maiores consequatur! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Inventore quos adipisci repellat
          voluptas eius iusto vel? Deleniti, corporis. Quas quod cumque quasi
          illum perferendis, amet sed officia libero quis quam suscipit vero
          neque quibusdam, et sint. Ipsam laboriosam, eligendi tenetur quia
          mollitia, recusandae, cupiditate nisi aperiam libero corrupti maiores
          consequatur!
        </div>
        <div className="my-4 flex justify-between ">
          <div className="flex gap-">
            <Button size="icon" variant="default">
              -
            </Button>
            <Input type="number" className="w-4/12" />
            <Button size="icon">
              <Plus />{" "}
            </Button>
          </div>

          <Stars n={3} />
        </div>
        <div className="text-3xl text-start font-bold italic">
          1.000.000.000 FCFA
        </div>
        <div className="flex gap-4 my-4">
          <Button
            variant="outline"
            size={"lg"}
            className="border-2 border-primary"
          >
            Acheter
          </Button>
          <Button size={"lg"}>Ajouter au panier</Button>
        </div>
        <fieldset className="border-t grid grid-cols-4 gap-4">
          <legend className="mx-8 my-2 font-semibold">
            Produits similaires
          </legend>
          <ProductMin />
          <ProductMin />
          <ProductMin />
          <ProductMin />
        </fieldset>
      </div>
    </div>
  );
}
