import React from "react";
import ProjectVideo from "../projectVideo";

type ProjectBannerProps = {
  title: string;
  desc: string;
  video: string;
};

export default function ProjectBanner(props: ProjectBannerProps) {
  return (
    <div className="text-left container mx-auto flex-wrap grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      {/* On small and medium screens (col-span-1) */}
      <div className="md:col-span-1">
        <h2 className="relative text-4xl md:text-6xl lg:text-8xl py-2 text-customblue-50 font-poppinsbold">
          {props.title}
        </h2>
        <h3 className="relative text-base md:text-lg py-2 text-black font-poppins">
          {props.desc}
        </h3>
      </div>

      {/* On small and medium screens (col-span-1) */}
      <div className="md:col-span-1">
        <div className="relative text-3xl md:text-4xl flex justify-left gap-8 py-3 text-gray-600 bg-charcoal-100 rounded">
          <ProjectVideo url={props.video} thumbnail="" />
        </div>
      </div>
    </div>
  );
}
