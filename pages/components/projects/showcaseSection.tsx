import React from "react";
import Image from "next/image";

type ShowcaseSectionProps = {
  title: string;
  desc: string;
  image: any;
};

export default function ShowcaseSection(props: ShowcaseSectionProps) {
  return (
    <section id="showcase" className="container mx-auto flex-col m-10">
      <div className="bg-customblue-50 flex-col text-center rounded-xl">
        <div className="py-5">
          <div className="">
            <h3 className="relative text-4xl md:text-6xl py-2 text-white font-poppinsbold">
              {props.title}
            </h3>
          </div>

          <div className="relative text-sm md:text-lg lg:text-xl xl:text-lg py-10 text-white font-poppins mx-6 md:mx-20 xl:mx-80">
            <p>{props.desc}</p>
          </div>
        </div>
        <div className="mx-auto md:mx-20 xl:mx-80">
          <Image
            src={props.image}
            alt={props.title}
            width={800}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
