"use client";

import { useState } from "react";
import { RentForm } from "./rent/rent";
import { cn } from "@/lib/utils";

type TForms = "rent" | "buy" | "sell" | "consult";

export default function Forms() {
  const [active, setActive] = useState<TForms>("rent");

  return (
    <section className="max-w-[1536px] min-h-[600px] mx-auto bg-white px-10 py-10">
      <section className="md:max-w-xl lg:max-w-5xl mx-auto rounded-md lg:border border-stone-100 lg:shadow-lg lg:px-10 pt-8 pb-4">
        <section className="relative flex items-center justify-between md:justify-normal md:gap-x-4 mb-4 P1">
          <button
            type="button"
            onClick={() => setActive("rent")}
            className={cn("relative B1 md:P2 pb-1 z-[1]", {
              "text-body/50": active !== "rent",
              "border-b-2 border-accent": active === "rent",
            })}
          >
            Rent
          </button>
          <button
            type="button"
            onClick={() => setActive("buy")}
            className={cn("relative B1 md:P2 pb-1 z-[1]", {
              "text-body/50": active !== "buy",
              "border-b-2 border-accent": active === "buy",
            })}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setActive("sell")}
            className={cn("relative B1 md:P2 pb-1 z-[1]", {
              "text-body/50": active !== "sell",
              "border-b-2 border-accent": active === "sell",
            })}
          >
            Sell
          </button>
          <button
            type="button"
            onClick={() => setActive("consult")}
            className={cn("relative B1 pb-1 z-[1]", {
              "text-body/50": active !== "consult",
              "border-b-2 border-accent": active === "consult",
            })}
          >
            Consult
          </button>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-200 mx-0" />
        </section>
        <RentForm />
      </section>
    </section>
  );
}
