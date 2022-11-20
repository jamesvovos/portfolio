import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import ReactLogo from "../../public/assets/logos/tools/react-logo.png";
import CPlusPlusLogo from "../../public/assets/logos/languages/c-plus-plus-logo.png";
import KotlinLogo from "../../public/assets/logos/languages/kotlin-logo.png";
import PythonLogo from "../../public/assets/logos/languages/python-logo.png";
import CSharpLogo from "../../public/assets/logos/languages/c-sharp-logo.png";
import JavaLogo from "../../public/assets/logos/languages/java-logo.jpg";
import RubyLogo from "../../public/assets/logos/languages/ruby-logo.png";

export default function DevelopmentTools() {
  const [text, count] = useTypewriter({
    words: ["I've had experience with the following programming languages:"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-center py-10 font-sourcecode text-3xl">
        {text}
        <Cursor cursorColor="#0099FF" />
      </h1>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {/* Images will go here */}
        <Image
          src={KotlinLogo}
          alt="Kotlin Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={PythonLogo}
          alt="Python Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={CSharpLogo}
          alt="C# Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={CPlusPlusLogo}
          alt="C++ Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={JavaLogo}
          alt="Java Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
        <Image
          src={RubyLogo}
          alt="Ruby Logo"
          className="hover:opacity-75 hover:border-2 border-customblue-50 rounded-lg object-cover h-40 w-30"
        />
      </div>
      <h3 className="mt-4 text-sm text-white">James Vovos</h3>
      <p className="mt-1 text-lg font-medium text-gray-600">@jamesvovos</p>
    </div>
  );
}
