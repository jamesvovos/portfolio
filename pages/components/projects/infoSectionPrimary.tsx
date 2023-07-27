import React from "react";
import ProjectVideo from "../projectVideo";

type InfoSectionProps = {
  title: string;
  desc: string;
  video: string;
  thumbnail: string;
};

export default function InfoSectionPrimary(props: InfoSectionProps) {
  return (
    <section id="infoSectionPrimary" className="container mx-auto m-10">
      <div className="bg-customblue-50 flex lg:text-left rounded-xl md:flex-row text-center">
        <div className="py-5 px-5 md:flex md:items-left">
          <div className="md:w-1/2">
            <div className="relative text-4xl md:text-6xl py-2 text-white font-poppinsbold">
              <h3>{props.title}</h3>
            </div>

            <div className="relative text-base md:text-l lg:text-l xl:text-lg text-white font-poppins">
              <p>{props.desc}</p>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-6 pt-5">
            <ProjectVideo url={props.video} thumbnail={props.thumbnail} />
          </div>
        </div>
      </div>
    </section>
  );
}
