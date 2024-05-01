"use client";

import { carFleet } from "../../lib/constants";
import Card from "./card";
import { cn } from "../../lib/utils";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

export default function Cars() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="flex flex-col items-center bg-white max-w-[1536px] pt-24 pb-24 px-10 mx-auto">
      <span className="B1 uppercase block mb-4">the cars</span>
      <h2 className="H1 mb-12 lg:mb-20 text-center lg:text-left">
        Our Impressive Fleet
      </h2>
      <Carousel setApi={setApi} className="md:hidden w-[85%] mb-10 shadow-md rounded-xl">
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
      <section className="md:hidden flex gap-x-2 items-center justify-between w-[85%] mb-6">
        <div className={cn(`h-1 w-8 rounded bg-stone-200`,{
          "bg-accent": current === 1
        })}/>
        <div className={cn(`h-1 w-8 rounded bg-stone-200`,{
          "bg-accent": current === 2
        })}/>
        <div className={cn(`h-1 w-8 rounded bg-stone-200`,{
          "bg-accent": current === 3
        })}/>
        <div className={cn(`h-1 w-8 rounded bg-stone-200`,{
          "bg-accent": current === 4
        })}/>
        <div className={cn(`h-1 w-8 rounded bg-stone-200`,{
          "bg-accent": current === 5
        })}/>
        <div className={cn(`h-1 w-8 rounded bg-stone-200`,{
          "bg-accent": current === 6
        })}/>
      </section>
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
