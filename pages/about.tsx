import React from "react";

export default function About() {
  return (
    <section id="about" className="container mx-auto pt-20">
      <div className="sectionTitle font-sourcecode">
        <span className="titleSymbol">.</span>
        <h5 className="titleText">getAbout</h5>
        <span className="titleSymbol">()</span>
      </div>
      <div>
        <p className="text-base py-2 leading-8 text-white text-center md:text-l lg:text-lg xl:text-lg">
          As a software engineer, I have had the opportunity to work on projects
          that positively impact individuals across Australia. My work spans
          from collaborating with{" "}
          <span className="text-customblue-50 text-base md:text-l lg:text-lg xl:text-lg">
            {" "}
            Transport NSW & CLOCS-A{" "}
          </span>{" "}
          to develop several cutting-edge mobile apps that help construction and
          logistics companies across Australia monitor and adhere to compliance
          standards in trucking logistics, to collaborating with agile startups
          helping to implement technology that enhances the learning and
          literacy skills of students Australia wide. With a passion for
          innovation and problem solving, I am driven to continue creating
          solutions that make a positive impact on people's lives.
        </p>
      </div>
    </section>
  );
}
