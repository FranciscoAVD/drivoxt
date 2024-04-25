import Image from "next/image";

import lexus from "../../public/logos/lexus.webp"
import volks from "../../public/logos/volkswagen.jpg"
import mercedes from "../../public/logos/mercedes.png"
import fiat from "../../public/logos/fiat.jpg"
import lincoln from "../../public/logos/lincoln.jpg"
import tesla from "../../public/logos/tesla.png"
import audi from "../../public/logos/audi.jpg"
const logos = [
   lexus,
   volks,
   mercedes,
   fiat,
   lincoln,
   tesla,
   audi
]
export default function LogoBanner() {
  return (
    <section className="max-w-[1536px] mx-auto lg:px-10 pb-4 bg-white overflow-hidden">
      <div className="flex items-center justify-between flex-wrap py-4 px-6 lg:rounded-bl-lg lg:rounded-br-lg shadow-md">
        {logos.map((logo, idx) => <Image key={idx} src={logo} alt="car logo"  className="w-20 aspect-image object-contain lg:w-28 h-auto"/>)}
      </div>
    </section>
  );
}
