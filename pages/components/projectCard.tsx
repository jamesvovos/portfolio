import React from "react";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

import img from "../../public/assets/images/driver-app.png";
import img2 from "../../public/assets/images/game-project.png";
import img3 from "../../public/assets/images/portfolio.png";

import ProjectVideo from "./projectVideo";
const data = [
  {
    id: 1,
    image: img,
    demo: "https://www.youtube.com/watch?v=NV0WNxvg8hQ",
    website: "https://clocs-a.org.au/",
    github: "https://github.com/CLOCS-A-FYP",
    title: "CLOCS-A Capstone Project",
    desc: "Construction logistics compliance app built to improve construction logistics safety in Australia in parnership with CLOCS-A and Transport NSW. Collaborated with a team of 4 developers to build 3 fully integrated apps. This includes 2 mobile applications built in React Native for iOS & Android platform support, as well as a web application built in React JS.",
    tech1: "React Native",
    tech2: "GraphQL",
    tech3: "AWS Amplify",
  },
  {
    id: 2,
    image: img2,
    demo: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    website: "",
    github: "https://github.com/jamesvovos/portfolio",
    title: "Game Dev Custom Project",
    desc: "Custom game project showcasing the implementation of different software design patterns and data structures built in C++. This includes the state, composite, component, command, singleton and factory design patterns, as well as a graph/node data structure to represent the game world with different locations with adjacent location nodes.",
    tech1: "C++",
    tech2: "Raylib",
  },
  {
    id: 3,
    image: img3,
    demo: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    website: "",
    github: "https://github.com/jamesvovos/portfolio",
    title: "My Portfolio Site",
    desc: "Portfolio website built from scratch to showcase some of my core project work utilsing the React/NextJS framework. This includes the implementation of React libraries for particles, tooltips and more.",
    tech1: "React",
    tech2: "Next.js",
    tech3: "Tailwind CSS",
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
            website,
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
                    <a href={website} target="_blank">
                      <AiFillChrome className="icon" />
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
