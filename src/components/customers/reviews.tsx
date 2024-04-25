"use client";

import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { reviews } from "@/lib/cosntants";

export default function Reviews() {
  return (
    <section className="max-w-[1536px] flex flex-col items-center gap-y-10 py-10 lg:pt-20 px-4 text-center mx-auto bg-stone-100">
      <h2 className="uppercase H2 text-accent text-pretty">What our customers say</h2>
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {reviews.map((r, idx) => (
            <Review key={idx} review={r.review} customer={r.customer} image={r.image}/>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex h-10 w-10"/>
        <CarouselNext className="hidden lg:flex h-10 w-10"/>
      </Carousel>
    </section>
  );
}

function Review({
  review,
  image,
  customer,
}: {
  review: string;
  image: StaticImageData;
  customer: string;
}) {
  return (
    <CarouselItem>
      <div className="flex flex-col items-center justify-center gap-y-4 px-10">
        <p className="text-center text-2xl leading-[28px] font-medium mb-2">
          "{review}"
        </p>
        <div className="h-14 lg:h-12 w-14 lg:w-12 rounded-full overflow-hidden">
          <Image src={image} alt="" className="w-full h-auto" />
        </div>
        
        <span className="P1 text-body/70">{customer}</span>
      </div>
    </CarouselItem>
  );
}
