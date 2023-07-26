import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profile from "../../public/assets/images/profile.jpg";
import Particle from "./particle";
import TechStack from "../components/techStack";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Nice to meet you, I'm James!",
      "Feel free to browse my portfolio.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="text-center min-h-screen">
      <Particle />
      <h2 className="relative text-5xl py-2 text-customblue-50 font font-medium">
        James Vovos
      </h2>
      <h3 className="relative text-2xl py-2 text-white">
        Creative Software Engineer Graduate.
      </h3>
      <p className="relative text-md py-5 leading-8 text-white font-sourcecode">
        {text}
        <Cursor cursorColor="#0062FD" />
      </p>
      <div className="relative text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a
          href="https://github.com/jamesvovos"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/jamesvovos/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-customblue-50 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image
          src={profile}
          layout="fill"
          objectFit="cover"
          alt="cartoon image"
        />
      </div>
      <TechStack />
    </div>
  );
}
