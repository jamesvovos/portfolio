import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import ReactLogo from "../../public/assets/logos/tools/react-logo.png";
import GraphQlLogo from "../../public/assets/logos/tools/graphql-logo.png";
import MapboxLogo from "../../public/assets/logos/tools/mapbox-logo.jpg";
import AwsLogo from "../../public/assets/logos/tools/aws-logo.png";
import FigmaLogo from "../../public/assets/logos/tools/figma-logo.png";
import DynamoDbLogo from "../../public/assets/logos/tools/dynamo-db-logo.png";
import AmplifyLogo from "../../public/assets/logos/tools/amplify-logo.jpg";
import FirebaseLogo from "../../public/assets/logos/tools/firebase-logo.png";
import RaylibLogo from "../../public/assets/logos/tools/raylib-logo.png";
import AndroidStudioLogo from "../../public/assets/logos/tools/android-studio-logo.jpg";
import MySqlLogo from "../../public/assets/logos/tools/mysql-logo.png";
import NextJsLogo from "../../public/assets/logos/tools/next-js-logo.jpg";
import PowerBiLogo from "../../public/assets/logos/tools/power-bi-logo.jpg";
import JiraLogo from "../../public/assets/logos/tools/jira-logo.png";
import GithubLogo from "../../public/assets/logos/tools/github-logo.png";

export default function DevelopmentTools() {
  const [text, count] = useTypewriter({
    words: ["Development Tools"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-center py-10 font-sourcecode text-3xl">
        {text}
        <Cursor cursorColor="#0099FF" />
      </h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {/* Images will go here */}
        <Image
          src={ReactLogo}
          alt="React Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={GraphQlLogo}
          alt="GraphQL Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={AwsLogo}
          alt="AWS Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={MapboxLogo}
          alt="Mapbox Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={FigmaLogo}
          alt="Figma Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={DynamoDbLogo}
          alt="DynamoDB Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={AmplifyLogo}
          alt="Amplify Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={FirebaseLogo}
          alt="Google Firebase Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={RaylibLogo}
          alt="Raylib Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={AndroidStudioLogo}
          alt="Android Studio Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={MySqlLogo}
          alt="MySQL Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={NextJsLogo}
          alt="NextJS Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={PowerBiLogo}
          alt="PowerBI Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={JiraLogo}
          alt="Jira Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={GithubLogo}
          alt="GitHub Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
      </div>
      <h3 className="mt-4 text-sm text-white">James Vovos</h3>
      <p className="mt-1 text-lg font-medium text-gray-600">@jamesvovos</p>
    </div>
  );
}
