import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export default function HowIcon({
    direction,
    title,
    text,
    icon,
  }: {
    direction: boolean;
    icon: StaticImageData;
    title: string;
    text: string;
  }) {
    return (
      <div
        className={cn("absolute flex items-center gap-x-6 w-[140px] lg:min-w-[300px]", {
          "left-0 top-0 translate-x-[-15%] md:translate-x-[-40%] lg:translate-x-[-90%] translate-y-[-10%] flex-col-reverse lg:flex-row justify-center":
            direction === true,
          "right-0 top-0 translate-x-[15%] md:translate-x-[40%] lg:translate-x-[90%] translate-y-[-10%] flex-col-reverse lg:flex-row-reverse":
            direction === false,
        })}
      >
        <section className="space-y-6 text-center lg:text-left">
          <h3 className="H2">{title}</h3>
          <p className="P1 text-body/70">{text}</p>
        </section>
        <Image src={icon} alt="" className="h-[150px] w-auto" />
      </div>
    );
  }
