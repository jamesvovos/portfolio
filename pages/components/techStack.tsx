import React from "react";
import { DiReact, DiPython } from "react-icons/di";

import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

export default function TechStack() {
  return (
    <section id="text-center min-h-screen">
      <div className="flex justify-center pt-20">
        <div className="relative text-3xl lg:text-4xl flex justify-center text-white font-poppins">
          <p>Tech Stack |</p>
          <span className="text-customblue-50">
            <DiReact className="cursor-pointer" data-tip="React/React Native" />
          </span>{" "}
          <span className="text-customblue-50">
            <DiPython className="cursor-pointer" data-tip="Python" />
          </span>{" "}
          <ReactTooltip />
        </div>
      </div>
    </section>
  );
}
