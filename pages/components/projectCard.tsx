import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

import st from "../../public/assets/images/stripes.svg";
import sq from "../../public/assets/images/square.svg";

import img from "../../public/assets/images/clocs.png";
import img2 from "../../public/assets/images/game-asset-generator.png";
import img3 from "../../public/assets/images/ai.png";
import img4 from "../../public/assets/images/game-project.png";

import ProjectVideo from "./projectVideo";
const data = [
  {
    id: 1,
    image: img,
    demo: "https://youtu.be/ron3H1-aqj4",
    website: "https://clocs-a.org.au/",
    github: "https://github.com/CLOCS-A-FYP",
    title: "CLOCS-A Capstone Project",
    desc: "Final Year Capstone project in collaboration with Transport NSW & CLOCS-A. Initiative to develop several-cutting edge mobile apps that help construction and logistics companies across Australia monitor and adhere to compliance standards in trucking logistics. Collaborated with a team of 4 incredible developers to build 3 fully integrated apps.",
    tech1: "React Native",
    tech2: "GraphQL",
    tech3: "AWS Amplify",
  },
  {
    id: 2,
    image: img2,
    demo: "https://youtu.be/JbxVSpukm7I",
    website: "",
    github: "https://github.com/jamesvovos/ai-game-asset-creator",
    title: "AI Game Asset Creator",
    desc: "AI & NLP Game Asset Creator built with Python. Generate game assets procedurally using artificial intelligence, custom pipelines and natural language processing (NLP).",
    tech1: "Python",
    tech2: "LangChain",
    tech3: "Streamlit",
  },
  {
    id: 3,
    image: img3,
    demo: "https://youtu.be/JbxVSpukm7I",
    website: "",
    github: "https://github.com/jamesvovos/nlp-project-api",
    title: "Neural Network API",
    desc: "Built a custom neural network model that can be trained via API. The idea behind it was initially a chatbot which evolved to become a NPC creator for games. The API was built using FastAPI and SQLAlchemy. The neural network was built using PyTorch, utilising 3 linear layers and a relu activation function.",
    tech1: "Python",
    tech2: "PyTorch",
    tech3: "spaCy",
  },
  {
    id: 4,
    image: img4,
    demo: "https://youtu.be/JbxVSpukm7I",
    website: "",
    github: "https://github.com/jamesvovos/game-dev-custom-project",
    title: "Game Dev Custom Project",
    desc: "Custom game project showcasing the implementation of different software design patterns and data structures built in C++. This includes the state, composite, component, command and factory design patterns, as well as a graph/node data structure to represent the game world with different locations with adjacent location nodes.",
    tech1: "C++",
    tech2: "Raylib",
  },
];

export default function ProjectCard() {
  return (
    <section id="projects" className="projects container section mx-auto pt-20">
      <div className="sectionTitle font-sourcecode">
        <span className="titleSymbol">.</span>
        <h5 className="titleText">getProjects</h5>
        <span className="titleSymbol">()</span>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
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

                <div className="miniContainerDiv">
                  <span className="demoImg">
                    <Image src={image} alt={title} className="projectImage" />
                  </span>
                  <span className="square">
                    <Image src={sq} alt="Square" className="square" />
                  </span>
                  <span className="stripes">
                    <Image src={st} alt="Stripes" className="stripes" />
                  </span>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">
                  <p>{desc}</p>
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
