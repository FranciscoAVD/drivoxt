import Image from "next/image";
import mercedes from "../../../public/Assets/Why choose carrental.png";
import { cn } from "@/lib/utils";

export default function Why() {
  return (
    <section id="why" className="flex flex-col lg:flex-row bg-white max-w-[1536px] mx-auto px-10 py-20">
      <section className="text-center lg:text-left">
        <h2 className="H1 mb-6 lg:mb-32">
          Why Choose <span className="block">Drivoxt?</span>
        </h2>
        <p className="B1 lg:P1 text-body/70 max-w-[300px] mx-auto lg:mx-0">
          Join our satisfied customer who trust us for their journeys. We serve
          with a lot of values that you can feel directly.
        </p>
      </section>

      <div className="relative flex lg:block justify-center lg:justify-normal flex-wrap gap-4 pt-10 grow">
        <Image src={mercedes} alt="" className=" w-full h-auto" />
        <StatCard
          title="Quality & Variety"
          description="Explore our diverse range of premium vehicles."
          className="lg:top-0 lg:left-[50%]"
        />
        <StatCard
          title="Affordable Rates"
          description="Enjoy competitive prices without hidden fees."
          className="lg:bottom-[12%] lg:right-[12%]"
        />
        <StatCard
          title="Easy Booking"
          description="Reserve your car in just a few clicks."
          className="lg:top-[20%] lg:left-[10%]"
        />
      </div>
    </section>
  );
}

function StatCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `lg:absolute w-[200px] p-4 text-center bg-white/60 shadow-md shadow-black/10 space-y-2 rounded-xl card-blur ${className}`
      )}
    >
      <h4 className="B1 lg:B2">{title}</h4>
      <p className="P1 lg:P2 text-body/70">{description}</p>
    </div>
  );
}
