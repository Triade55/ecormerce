import CardProduct from "@/components/CardProduct";
import EmblaCarousel from "@/components/banner";
import { EmblaOptionsType } from "embla-carousel";
export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    { id: 1, src: "/one.jpg" },
    { id: 2, src: "/two.jpg" },
    { id: 3, src: "/three.jpg" },
  ];

  return (
    <>
      
      <div className="my-4">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </>
  );
}
