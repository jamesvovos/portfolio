import React from "react";
import ProjectVideo from "../projectVideo";

export default function ProjectBanner() {
  return (
    <div className="text-left container mx-auto flex-wrap grid grid-cols-2 gap-4 my-10">
      <div className="col-span-1">
        <h2 className="relative text-8xl py-2 text-customblue-50 font font-poppinsbold">
          CLOCS-A
        </h2>
        <h3 className="relative text-l py-2 text-black font-poppins">
          Final Year Capstone project in collaboration with Transport NSW &
          CLOCS-A. Initiative to develop several-cutting edge mobile apps that
          help construction and logistics companies across Australia monitor and
          adhere to compliance standards in trucking logistics. Collaborated
          with a team of 4 incredible developers to build 3 fully integrated
          apps.
        </h3>
      </div>
      <div className="col-span-1">
        <div className="relative text-5xl flex justify-left gap-16 py-3 text-gray-600 bg-charcoal-100 rounded">
          <ProjectVideo
            url="https://www.youtube.com/watch?v=zbYBgy_ChGY"
            thumbnail=""
          />
        </div>
      </div>
    </div>
  );
}
