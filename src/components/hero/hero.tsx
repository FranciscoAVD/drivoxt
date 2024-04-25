import Image from "next/image";
import { Button } from "../ui/button";
import people from "../../../public/Assets/Pics.png";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import heroImage from "../../../public/Assets/Hero Image.png";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:h-[650px] bg-stone-100 max-w-[1536px] px-10 mx-auto overflow-hidden"
    >
      <section className="relative lg:w-fit z-10 text-center lg:text-left h-full">
        <h1 className="H1 lg:w-fit mb-12">
          <span className=" block">Your Journey,</span>
          <span className=" block">Your Car,</span>
          <span className=" block">Your Way</span>
        </h1>
        <p className="B1 max-w-[350px] text-body/50 mb-6 lg:mb-12 mx-auto lg:mx-0">
          Experience the ultimate freedom of choice with Drivoxt - tailor your
          adventure by choosing from our premium fleet of vehicles
        </p>
        <Button className="w-fit">Get started</Button>
      </section>
      <section className="lg:absolute lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%] h-fit min-w-[600px] w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <Image src={heroImage} alt="" className="w-full h-auto" priority />
        <CarBlob />
      </section>
      <section className="hidden lg:flex realtive flex-col justify-evenly w-[190px] h-full z-10">
        <div className=" space-y-4">
          <Image src={people} alt="" className="w-full h-auto" />
          <div className="space-y-2">
            <h4 className="H2">12.5K PEOPLE</h4>
            <p className="B2 text-body/50">
              have used our services to rent, buy and even sell their car!
            </p>
          </div>
        </div>
        <div className=" space-y-8">
          <div className="space-y-2">
            <ActionButtons />
          </div>
          <Link
            href="/"
            className="flex items-center gap-x-4 B2 hover:text-body/50 transition"
          >
            Learn more <ArrowRightIcon className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </section>
  );
}

function ActionButtons() {
  return (
    <>
      <div className="space-x-2">
        <ActionButton>Rent</ActionButton>
        <ActionButton>Buy</ActionButton>
      </div>
      <div className="space-x-2">
        <ActionButton>Sell</ActionButton>
        <ActionButton>Consult</ActionButton>
      </div>
    </>
  );
}
function ActionButton({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <Button
      variant={"secondary"}
      className={cn(
        `relative actions hover:text-white hover:bg-transparent overflow-hidden ${className}`
      )}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-accent scale-x-0 -z-10" />
      {children}
    </Button>
  );
}

function CarBlob() {
  return (
    <div className="hidden lg:block lg:absolute lg:top-0 xl:top-[2%] 2xl:top-[5%] lg:right-[24%] xl:right-[26%] 2xl:right-[27%] w-[140px] p-4 bg-white/50 rounded-2xl z-50 card-blur">
      <span className="H1 block">50+</span>
      <span className="block text-body/50 text-center">
        Car Types Available
      </span>
      <div className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[30%] w-6 h-6 flex items-center justify-center rounded-full bg-black/[5%]">
        <div className="flex items-center justify-center w-4 h-4 rounded-full bg-slate-100/50">
          <div className="w-2 h-2 rounded-full bg-white/90 " />
        </div>
      </div>
    </div>
  );
}
