import React from "react";
import { SiReact, SiAwsamplify, SiGraphql, SiMapbox } from "react-icons/si";

import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

export default function ProjectTechStack() {
  return (
    <section className="text-center">
      <div className="container mx-auto flex justify-end pb-20">
        <div className="relative text-xl md:text-4xl flex justify-left text-black font-poppinsbold">
          <p>Tech Stack |</p>
          <span className="text-customblue-50">
            <SiReact className="cursor-pointer" data-tip="React/React Native" />
          </span>{" "}
          <span className="text-customblue-50">
            <SiAwsamplify className="cursor-pointer" data-tip="AWS Amplify" />
          </span>{" "}
          <span className="text-customblue-50">
            <SiGraphql className="cursor-pointer" data-tip="GraphQL" />
          </span>{" "}
          <span className="text-customblue-50">
            <SiMapbox className="cursor-pointer" data-tip="Mapbox" />
          </span>{" "}
          <ReactTooltip />
        </div>
      </div>
    </section>
  );
}
