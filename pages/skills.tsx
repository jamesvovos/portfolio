import React from "react";
import ProgressBar from "./components/progressBar";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto pt-40">
      <div className="sectionTitle font-sourcecode">
        <span className="titleSymbol">.</span>
        <h5 className="titleText">getSkills</h5>
        <span className="titleSymbol">()</span>
      </div>
      <div className="skills">
        <ProgressBar title={"C++"} width={"75%"} text={"75%"} />
        <ProgressBar title={"C#"} width={"90%"} text={"90%"} />
        <ProgressBar title={"JAVASCRIPT"} width={"45%"} text={"45%"} />
        <ProgressBar title={"JAVA"} width={"70%"} text={"70%"} />
        <ProgressBar title={"PYTHON"} width={"85%"} text={"85%"} />
        <ProgressBar title={"React Native"} width={"95%"} text={"95%"} />
        <ProgressBar title={"React JS"} width={"65%"} text={"65%"} />
        <ProgressBar title={"Kotlin"} width={"40%"} text={"40%"} />
      </div>
    </section>
  );
}
