import React from "react";
import ProjectVideo from "../projectVideo";

type InfoSectionProps = {
  title: string;
  desc: string;
  video: string;
  thumbnail: string;
};

export default function InfoSectionPrimary(props: InfoSectionProps) {
  return (
    <section className="projectInfoCard">
      <div>
        <div className="infoCard bg-customblue-50">
          <div className="infoCardTextWrapper">
            <div className="infoCardTitle">
              <h3>{props.title}</h3>
            </div>

            <div className="infoCardDesc">
              <p>{props.desc}</p>
            </div>
          </div>

          <div className="infoCardVideo"></div>
          <ProjectVideo url={props.video} thumbnail={props.thumbnail} />
        </div>
      </div>
    </section>
  );
}
