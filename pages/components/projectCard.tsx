import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styles from "../styles/Home.module.css";

type Props = {};

export default function ProjectCard({}: Props) {
  return (
    <div className="relative font-black tracking-wide text-center p-40 bg-customblue-50">
      <ul className="py-10 leading-8 text-black text-5xl font-drukwideweb uppercase">
        <li className="py-10 transform skew-y-6">
          <a
            className="py-10 hover:border-white border-transparent border-2"
            href="#"
          >
            CLOCS-A
          </a>
        </li>
        <li className="py-10 transform skew-y-6 hover:border-white border-transparent border-2">
          Game Design Patterns
        </li>
        <li className="py-10 transform skew-y-6 hover:border-white border-transparent border-2">
          Game Design Patterns
        </li>
      </ul>
    </div>
  );
}
