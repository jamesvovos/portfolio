import React from "react";
import Image from "next/image";

type InfoSectionProps = {
  title: string;
  desc: string;
  image: any;
};

export default function InfoSectionSecondary(props: InfoSectionProps) {
  return (
    <section id="infoSectionSecondary" className="container mx-auto m-10">
      <div className="bg-charcoal-100 flex flex-col md:flex-row text-center md:text-left rounded-xl">
        {/* Image on larger screens */}
        <div className="md:w-1/2 order-last md:order-first py-5 px-5">
          <Image
            src={props.image}
            alt={props.title}
            style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
          />
        </div>

        {/* Title and description */}
        <div className="md:w-1/2 md:flex md:flex-col md:text-center lg:text-right px-5 py-5">
          <div className="relative text-4xl md:text-5xl py-2 text-customblue-50 font-poppinsbold">
            <h3>{props.title}</h3>
          </div>

          <div className="relative text-sm md:text-l lg:text-l xl:text-lg text-white font-poppins">
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
