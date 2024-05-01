"use client";

import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { reviews } from "../../lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if(!api) return;
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  },[api])
  return (
    <section className="max-w-[1536px] flex flex-col items-center gap-y-10 py-10 lg:pt-20 px-4 text-center mx-auto bg-stone-100">
      <h2 className="uppercase H2 text-accent text-pretty">What our customers say</h2>
      <Carousel setApi={setApi} className="w-full max-w-3xl">
        <CarouselContent>
          {reviews.map((r, idx) => (
            <Review key={idx} review={r.review} customer={r.customer} image={r.image}/>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex h-10 w-10"/>
        <CarouselNext className="hidden lg:flex h-10 w-10"/>
      </Carousel>
      <section className="lg:hidden text-lg">
        <span className={cn("text-3xl")}>{current}</span> of 5
      </section>
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
          &quot;{review}&quot;
        </p>
        <div className="h-14 lg:h-12 w-14 lg:w-12 rounded-full overflow-hidden">
          <Image src={image} alt="" className="w-full h-auto" />
        </div>
        
        <span className="P1 text-body/70">{customer}</span>
      </div>
    </CarouselItem>
  );
}
