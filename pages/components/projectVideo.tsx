import React from "react";
// https://stackoverflow.com/questions/72235211/trying-to-use-react-player-throws-a-hydration-error
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Props = {
  url: string;
  thumbnail: string;
};

export default function ProjectVideo(props: Props) {
  return (
    <ReactPlayer
      className="react-player"
      width="100%"
      url={props.url}
      light={props.thumbnail}
      controls={true}
      playing={true}
    />
  );
}
