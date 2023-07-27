import React from "react";
import ProjectVideo from "../projectVideo";

export default function ProjectBanner() {
  return (
    <div className="text-left container mx-auto flex-wrap grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      {/* On small and medium screens (col-span-1) */}
      <div className="md:col-span-1">
        <h2 className="relative text-4xl md:text-6xl lg:text-8xl py-2 text-customblue-50 font-poppinsbold">
          CLOCS-A
        </h2>
        <h3 className="relative text-base md:text-lg py-2 text-black font-poppins">
          Final Year Capstone project in collaboration with Transport NSW &
          CLOCS-A. Initiative to develop several-cutting edge mobile apps that
          help construction and logistics companies across Australia monitor and
          adhere to compliance standards in trucking logistics. Collaborated
          with a team of 4 incredible developers to build 3 fully integrated
          apps.
        </h3>
      </div>

      {/* On small and medium screens (col-span-1) */}
      <div className="md:col-span-1">
        <div className="relative text-3xl md:text-4xl flex justify-left gap-8 py-3 text-gray-600 bg-charcoal-100 rounded">
          <ProjectVideo
            url="https://youtu.be/ron3H1-aqj4"
            thumbnail=""
          />
        </div>
      </div>
    </div>
  );
}
