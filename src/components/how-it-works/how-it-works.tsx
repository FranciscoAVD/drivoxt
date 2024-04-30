import React from "react";
import line2 from "../../../public/Assets/Line 2.png";
import { howItWorks } from "@/lib/constants";
import HowIcon from "./how-icon";
import Blob from "./blob";
import Image from "next/image";

export default function How() {
  return (
    <section
      id="how"
      className="max-w-[1536px] mx-auto lg:min-h-screen pt-20 pb-[300px] lg:pb-[200px] space-y-12 bg-white"
    >
      <div className="space-y-4 text-center">
        <h2 className="B1">How it works</h2>
        <span className="H1">Four Easy Steps</span>
      </div>
      <div className="relative flex flex-col items-center">
        {howItWorks.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex justify-center w-[300px]"
            >
              <HowIcon
                icon={item.icon}
                text={item.text}
                title={item.title}
                direction={item.direction}
              />
              <Blob
                className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]"
                active={index === 1}
              />
              {index < howItWorks.length - 1 && (
                <Image src={line2} alt="" className="w-auto h-[200px]" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

