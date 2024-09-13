import Banner from "@/components/banner";
import CardProduct from "@/components/CardProduct";
import CardSection from "@/components/CardSection";
import SectionContent, { Section, SectionHeader } from "@/components/Section";

import Categories from "@/components/shopping/Categories";
import Price from "@/components/shopping/Price";
import { EmblaOptionsType } from "embla-carousel";
export default function Home() {
  const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
  // const SLIDES = [
  //   { id: 1, src: "/one.jpg" },
  //   { id: 2, src: "/two.jpg" },
  //   { id: 3, src: "/three.jpg" },
  // ];
  // const SLIDE_COUNT = 5
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const SLIDES = [
    "/one.jpg",
    "/two.jpg",
    "/three.jpg",

  ]
  return (
    <>
      <div className="my-4 relative">
        <Banner slides={SLIDES} options={OPTIONS}/>
      </div>
      <div className="mb-4">
        <Section>
          <SectionHeader variant="between"> Meilleures Offres </SectionHeader>
          <SectionContent number="6">
            <CardSection />
            <CardSection />
            <CardSection />
            <CardSection />
          </SectionContent>
        </Section>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        <div className="">
          <Categories/>
          <Price/>
        </div>
        <div className="col-span-3">

        </div>
      </div>
      
    </>
  );
}
