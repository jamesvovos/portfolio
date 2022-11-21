import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styles from "../styles/Home.module.css";
import Particle from "./particle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's James Vovos",
      "Graduate Software Engineer studying Computer Science at Swinburne University.",
      "Great to meet you :)",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="text-center p-10">
      <Particle />
      <h2 className="text-5xl py-2 text-customblue-50 font font-medium">
        James Vovos
      </h2>
      <h3 className="text-2xl py-2">Creative Software Engineer.</h3>
      <p className="text-md py-5 leading-8 text-white font-sourcecode">
        {text}
        <Cursor cursorColor="#0099FF" />
      </p>
    </div>
  );
}
