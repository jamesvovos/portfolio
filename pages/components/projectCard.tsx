import React from "react";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";

import img from "../../public/assets/images/driver-app.png";
import img2 from "../../public/assets/images/game-project.png";
import img3 from "../../public/assets/images/portfolio.png";

import ProjectVideo from "./projectVideo";
const data = [
  {
    id: 1,
    image: img,
    demo: "https://www.youtube.com/watch?v=NV0WNxvg8hQ",
    liveLink: "",
    github: "",
    title: "CLOCS-A Capstone Project",
    desc: "A Journey Location Identifier for Construction Logistics",
    tech1: "React Native",
    tech2: "GraphQL",
    tech3: "AWS Amplify",
  },
  {
    id: 2,
    image: img2,
    demo: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    liveLink: "",
    github: "",
    title: "Game Dev Custom Project",
    desc: "Game showcasing different software design patterns",
    tech1: "C++",
    tech2: "Raylib",
    tech3: "SDL2",
  },
  {
    id: 3,
    image: img3,
    demo: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    liveLink: "",
    github: "",
    title: "Game Dev Custom Project",
    desc: "Game showcasing different software design patterns",
    tech1: "React",
    tech2: "NextJS",
    tech3: "TailWindCSS",
  },
];

export default function ProjectCard() {
  return (
    <section id="projects" className="projects container section mx-auto pt-40">
      <div className="sectionTitle font-sourcecode">
        <span className="titleSymbol">.</span>
        <h5 className="titleText">getProjects</h5>
        <span className="titleSymbol">()</span>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            demo,
            title,
            tech1,
            tech2,
            tech3,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon text-4xl">
                    <a href={demo} target="_blank">
                      <AiFillYoutube className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon text-4xl">
                    <a href={github} target="_blank">
                      <AiFillGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="videoDiv">
                  <ProjectVideo url={demo} thumbnail={image.src} />
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">
                  <h3>{desc}</h3>
                </div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
