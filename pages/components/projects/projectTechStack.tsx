import React, { ReactElement } from "react";
import {
  SiReact,
  SiAwsamplify,
  SiGraphql,
  SiMapbox,
  SiPython,
} from "react-icons/si";

import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

type ProjectTechStackProps = {
  techStack: string[];
};

const iconMap: { [key: string]: any } = {
  react: SiReact,
  awsamplify: SiAwsamplify,
  graphql: SiGraphql,
  mapbox: SiMapbox,
  python: SiPython,
  // Add more icons and their corresponding names here
};

export default function ProjectTechStack(
  props: ProjectTechStackProps
): ReactElement {
  const { techStack } = props;

  return (
    <section className="text-center">
      <div className="container mx-auto flex justify-end pb-20">
        <div className="relative text-xl md:text-4xl flex justify-left text-black font-poppinsbold">
          <p>Tech Stack |</p>
          {techStack.map((tech) => {
            const IconComponent = iconMap[tech.toLowerCase()];
            if (!IconComponent) {
              console.warn(`Icon for tech "${tech}" not found.`);
              return null;
            }
            return (
              <span key={tech} className="text-customblue-50">
                <IconComponent className="cursor-pointer" data-tip={tech} />
              </span>
            );
          })}
          <ReactTooltip />
        </div>
      </div>
    </section>
  );
}
