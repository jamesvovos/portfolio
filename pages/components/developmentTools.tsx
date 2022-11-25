import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

// https://stackoverflow.com/questions/64079321/react-tooltip-and-next-js-ssr-issue
import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

import Image from "next/image";
import ReactLogo from "../../public/assets/logos/tools/react-logo.png";
import GraphQlLogo from "../../public/assets/logos/tools/graphql-logo.png";
import MapboxLogo from "../../public/assets/logos/tools/mapbox-logo.jpg";
import FigmaLogo from "../../public/assets/logos/tools/figma-logo.png";
import AmplifyLogo from "../../public/assets/logos/tools/amplify-logo.jpg";
import FirebaseLogo from "../../public/assets/logos/tools/firebase-logo.png";
import RaylibLogo from "../../public/assets/logos/tools/raylib-logo.png";
import MySqlLogo from "../../public/assets/logos/tools/mysql-logo.png";
import NextJsLogo from "../../public/assets/logos/tools/next-js-logo.jpg";
import JiraLogo from "../../public/assets/logos/tools/jira-logo.png";
import GithubLogo from "../../public/assets/logos/tools/github-logo.png";
import VercelLogo from "../../public/assets/logos/tools/vercel-logo.png";

export default function DevelopmentTools() {
  const [text, count] = useTypewriter({
    words: ["My dev toolkit:"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-center py-10 font-sourcecode text-3xl text-white">
        {text}
        <Cursor cursorColor="#0099FF" />
      </h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {/* Images will go here */}
        <Image
          data-tip="React/React Native"
          src={ReactLogo}
          alt="React Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="GraphQL"
          src={GraphQlLogo}
          alt="GraphQL"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="Mapbox"
          src={MapboxLogo}
          alt="Mapbox Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="Figma"
          src={FigmaLogo}
          alt="Figma Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          data-tip="AWS Amplify"
          src={AmplifyLogo}
          alt="Amplify Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <ReactTooltip />
        <Image
          data-tip="Google Firebase"
          src={FirebaseLogo}
          alt="Google Firebase Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="Raylib"
          src={RaylibLogo}
          alt="Raylib Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="MySQL"
          src={MySqlLogo}
          alt="MySQL Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="Next.js"
          src={NextJsLogo}
          alt="Next.js Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="Vercel"
          src={VercelLogo}
          alt="Vercel Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          data-tip="Jira"
          src={JiraLogo}
          alt="Jira Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
        <Image
          data-tip="GitHub"
          src={GithubLogo}
          alt="GitHub Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <ReactTooltip />
      </div>
      <h3 className="mt-4 text-sm text-white">James Vovos</h3>
      <p className="mt-1 text-lg font-medium text-gray-600">@jamesvovos</p>
    </div>
  );
}
