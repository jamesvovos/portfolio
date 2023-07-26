import React from "react";
import { SiReact, SiAwsamplify, SiGraphql } from "react-icons/si";

import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

export default function ProjectTechStack() {
  return (
    <section id="text-center min-h-screen">
      <div className="container mx-auto grid grid-cols-2 pb-20">
        <div className="relative text-4xl flex justify-center text-black font-poppinsbold"></div>
        <div className="text-left">
          <div className="relative text-4xl flex justify-left text-black font-poppinsbold">
            <p>Tech Stack |</p>
            <span className="text-customblue-50">
              <SiReact
                className="cursor-pointer"
                data-tip="React/React Native"
              />
            </span>{" "}
            <span className="text-customblue-50">
              <SiAwsamplify className="cursor-pointer" data-tip="AWS Amplify" />
            </span>{" "}
            <span className="text-customblue-50">
              <SiGraphql className="cursor-pointer" data-tip="GraphQL" />
            </span>{" "}
            <ReactTooltip />
          </div>
        </div>
      </div>
    </section>
  );
}
