import React from "react";

export default function About() {
  return (
    <section id="about" className="container mx-auto pt-30">
      <div className="sectionTitle font-sourcecode">
        <span className="titleSymbol">.</span>
        <h5 className="titleText">getAbout</h5>
        <span className="titleSymbol">()</span>
      </div>
      <div>
        <p className="text-md py-2 leading-8 text-white">
          Hey my name is James, I'm a final year Computer Science student
          majoring in Software Engineering at the University of Swinburne. I'm
          passionate about working with people to help innovate in the tech
          industry. I'm excited to showcase some of my past portfolio work
          including my final year Capstone project
          <span className="text-customblue-50"> "CLOCS-A"</span> in
          collaboration with <span className="text-customblue-50"> SEPA. </span>
        </p>
      </div>
    </section>
  );
}
