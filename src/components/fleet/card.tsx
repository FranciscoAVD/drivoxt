import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Card({
  image,
  popular,
  name,
  price,
  className,
}: {
  image: StaticImageData;
  popular: boolean;
  name: string;
  price: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `relative flex flex-col w-[270px] h-[380px]  p-2 rounded-xl shadow-md transition ${className}`,
        {
          "bg-stone-100": popular === false,
          "bg-accent": popular === true,
        }
      )}
    >
      <div className=" flex items-center justify-center relative md:static w-full h-[40%] bg-white rounded-tl-md rounded-tr-md">
        {popular && (
          <div className="absolute top-[5px] right-0 translate-y-[-40%] md:translate-x-[10%] rounded-full py-1 px-4 bg-white/50 text-body card-blur shadow-md uppercase text-sm">
            popular
          </div>
        )}
        <Image src={image} alt="" className="h-full object-contain w-auto" />
      </div>

      <section
        className={cn("flex flex-col grow justify-between pt-8 pb-4", {
          "text-white": popular === true,
        })}
      >
        <span className="H2">{name}</span>
        <div className="flex justify-between">
          <div>
            <span
              className={cn("P1 text-body/50", {
                "text-white/50": popular === true,
              })}
            >
              Starting at
            </span>
            <span className="block H2">${price}/day</span>
          </div>
          <Button
            asChild
            className={cn("text-lg px-6 py-5 mt-auto", {
              "bg-white text-accent hover:border-white hover:text-white":
                popular === true,
            })}
          >
            <Link href="/">Rent</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
