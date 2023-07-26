import React from "react";
import Image from "next/image";
import figma from "../../../public/assets/images/figma.png";

export default function FigmaShowcase() {
  return (
    <section id="figmaShowcase" className="container mx-auto flex-col m-10">
      <div className="bg-customblue-50 flex-col text-center rounded-xl">
        <div className="py-5">
          <div className="">
            <h3 className="relative text-4xl md:text-6xl py-2 text-white font-poppinsbold">
              FIGMA DESIGNS
            </h3>
          </div>

          <div className="relative text-base md:text-lg lg:text-xl xl:text-lg py-10 text-white font-poppins mx-6 md:mx-20 xl:mx-60">
            <p>
              Designed multiple prototypes after discussions with key
              stakeholders and user testing. I designed the mobile device
              prototypes to match client specifications using Figma. This
              process involved using a collaborative approach with key
              stakeholders, and critical thinking to turn requirements into high
              quality code.
            </p>
          </div>
        </div>
        <div className="mx-auto md:mx-20 xl:mx-60">
          <Image
            src={figma}
            alt="Figma Designs Example"
            width={800}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
