import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProjectItem from "./components/projectItem";
import DevelopmentTools from "./components/developmentTools";
import LanguagesGallery from "./components/languagesGallery";
import Hero from "./components/hero";
import ProjectCard from "./components/projectCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-charcoal-50 px-10">
        <section className="min-h-screen">
          <Navbar />
          <Hero />
        </section>

        {/* Create "About" component/page later */}
        <section>
          <div>
            <h3 className="text-3xl py-1">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              <span className="text-customblue-50"> CLOCS-A</span> in
              collaboration with{" "}
              <span className="text-customblue-50"> SEPA </span>
            </p>
          </div>
          <div>
            <ProjectItem
              link="https://nextjs.org/docs"
              title="Documentation"
              text="Find in-depth information about Next.js features and API."
            />
            <DevelopmentTools />
            <LanguagesGallery />
          </div>
          <div>
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
