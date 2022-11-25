import React from "react";
import { AiFillGithub } from "react-icons/ai";

import img from "../../public/assets/images/clocs.png";
import img2 from "../../public/assets/images/game-project.png";
import img3 from "../../public/assets/images/workout-demo.png";
import img4 from "../../public/assets/images/my-portfolio.png";

import ProjectVideo from "./projectVideo";
const data = [
  {
    id: 1,
    image: img,
    demo: "https://youtu.be/ron3H1-aqj4",
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
    demo: "https://youtu.be/yAHBWlFMhCU",
    website: "",
    github: "https://github.com/jamesvovos/game-dev-custom-project",
    title: "Game Dev Custom Project",
    desc: "Custom game project showcasing the implementation of different software design patterns and data structures built in C++. This includes the state, composite, component, command, singleton and factory design patterns, as well as a graph/node data structure to represent the game world with different locations with adjacent location nodes.",
    tech1: "C++",
    tech2: "Raylib",
  },
  {
    id: 3,
    image: img3,
    demo: "https://youtube.com/shorts/o3xaU4itXzk?feature=share",
    website: "",
    github: "https://github.com/jamesvovos/workout-tracker",
    title: "Workout Tracker App",
    desc: "Workout tracker app to log workouts, utilsing Firebase NoSQL database to store workout data. Ability to view and try out recommended exercises via an API and more.",
    tech1: "Kotlin",
    tech2: "Android Studio",
    tech3: "Firebase",
  },
  {
    id: 4,
    image: img4,
    demo: "https://youtu.be/m6Nax3S3Z_4",
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
                  <div className="githubIcon text-4xl">
                    <a href={github} target="_blank" rel="noreferrer">
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

                <div className="technologies flex text-white">
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
