"use client";

import { carFleet } from "@/lib/cosntants";
import Card from "./card";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
export default function Cars() {
  const [active, setActive] = useState(0);
  return (
    <section className="flex flex-col items-center bg-white max-w-[1536px] pt-24 pb-24 px-10 mx-auto">
      <span className="B1 uppercase block mb-4">the cars</span>
      <h2 className="H1 mb-12 lg:mb-20 text-center lg:text-left">
        Our Impressive Fleet
      </h2>
      <Carousel className="md:hidden w-[85%] mb-10 shadow-md rounded-xl">
        <CarouselContent>
          {carFleet.map((car) => (
            <CarouselItem key={`${car.name}_carousel`}>
              <Card
                className="w-full shadow-none"
                image={car.image}
                price={car.price}
                name={car.name}
                popular={car.popular}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
        {carFleet.map((car) => (
          <Card
            key={`${car.name}_grid`}
            image={car.image}
            price={car.price}
            name={car.name}
            popular={car.popular}
          />
        ))}
      </div>
      <div className="flex justify-between items-center gap-x-6">
        {Array.from({ length: 5 }, (_, index) => (
          <Pagination
            key={index}
            number={index}
            active={index === active}
            set={setActive}
          />
        ))}
      </div>
    </section>
  );
}

function Pagination({
  number,
  active,
  set,
}: {
  number: number;
  active?: boolean;
  set: Dispatch<SetStateAction<number>>;
}) {
  return (
    <button
      className={cn(
        "flex items-center justify-center w-9 h-9 p-5 rounded-full text-body/70",
        {
          "P1 text-accent border-2 border-accent": active === true,
          "hover:text-body focus:text-body": active === false,
        }
      )}
      onClick={() => set(number)}
    >
      0{number + 1}
    </button>
  );
}
