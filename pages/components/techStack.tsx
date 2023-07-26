import Image from "next/image";
import React from "react";

import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

import react from "../../public/assets/images/tech/react-logo-svg-blue.png";
import aws from "../../public/assets/images/tech/aws-amplify-logo-svg-blue.png";
import python from "../../public/assets/images/tech/python.png";

const data = [
  {
    id: 1,
    logo: react,
    alt: "React Logo",
  },
  {
    id: 2,
    logo: python,
    alt: "Python Logo",
  },
];

export default function TechStack() {
  return (
    <section id="techStack">
      <div className="techStacks flex justify-center pt-20">
        <div className="relative text-4xl flex justify-center gap-16 py-5 px-2 text-white font-poppins">
          <p>Tech Stack |</p>
        </div>
        {data.map(({ id, logo, alt }) => {
          return (
            <div key={id} className="justify-center gap-16 py-5">
              <div className="techStackIcon">
                <Image
                  data-tip={alt}
                  src={logo}
                  alt={alt}
                  className="icon"
                  height={42}
                  width={42}
                  priority={true}
                />
                <ReactTooltip />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
