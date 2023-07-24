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
        <ProgressBar title={"JAVASCRIPT"} width={"55%"} text={"55%"} />
        <ProgressBar title={"JAVA"} width={"70%"} text={"70%"} />
        <ProgressBar title={"PYTHON"} width={"85%"} text={"85%"} />
        <ProgressBar title={"REACT NATIVE"} width={"95%"} text={"95%"} />
        <ProgressBar title={"REACT JS"} width={"70%"} text={"70%"} />
      </div>
    </section>
  );
}
