import React from "react";
import ProjectVideo from "../projectVideo";

type InfoSectionProps = {
  title: string;
  desc: string;
  video: string;
  thumbnail: string;
};

export default function InfoSectionSecondary(props: InfoSectionProps) {
  return (
    <section id="infoSecondary" className="container mx-auto">
      <div className="projectInfoCard">
        <div className="infoCard bg-charcoal-100">
          <ProjectVideo url={props.video} thumbnail={props.thumbnail} />
          <div className="infoCardTextWrapperSecondary">
            <div className="infoCardTitleSecondary">
              <h3>{props.title}</h3>
            </div>

            <div className="infoCardDescSecondary">
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
