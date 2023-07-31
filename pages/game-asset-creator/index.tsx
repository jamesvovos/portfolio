import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectBanner from "../components/projects/projectBanner";
import ShowcaseSection from "../components/projects/showcaseSection";
import ProjectTechStack from "../components/projects/projectTechStack";
import InfoSectionPrimary from "../components/projects/infoSectionPrimary";
import InfoSectionSecondary from "../components/projects/infoSectionSecondary";

import Image from "next/image";
import st from "../../public/assets/images/stripes.svg";
import sq from "../../public/assets/images/square.svg";
import sc from "../../public/assets/images/scribble.svg";

import forest from "../../public/assets/images/forest.png";
import pipelineuml from "../../public/assets/images/pipeline-uml.png";
import promptuml from "../../public/assets/images/prompt-uml.png";
import chains from "../../public/assets/images/chains.svg";
import ui from "../../public/assets/images/ui.png";
import dialogue from "../../public/assets/images/dialogue.png";
import dreambooth from "../../public/assets/images/dreambooth.png";
import demo from "../../public/assets/images/demo.png";

export default function Project() {
  const techStack = ["python"];
  return (
    <div>
      <Head>
        <title>James Vovos - AI Game Asset Creator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-hintedwhite-50 px-10 relative overflow-hidden">
        {/* Change these to only be pages (refactor components to only be components later) */}
        <section className="min-h-screen">
          <Navbar />
          <div>
            <span className="square">
              <Image
                src={sq}
                alt="Square"
                className="square absolute overflow-hidden"
              />
            </span>
            <span className="stripes">
              <Image
                src={st}
                alt="Stripes"
                className="stripes absolute overflow-hidden"
              />
            </span>
            <ProjectBanner
              title="AI Game Asset Creator"
              desc="Procedurally generate game assets using artificial intelligence, custom pipelines and natural language processing (NLP). Create game assets from simple prompts such as a game description and theme. Utilises dreambooth research from Google and custom trained deep learning text-to-image generation models."
              video="https://youtu.be/JbxVSpukm7I"
            />
            <ProjectTechStack techStack={techStack} />
            <ShowcaseSection
              title="SAMPLE AI OUTPUT"
              desc="Here is a sample output the procedural pipeline created. This art was produced off of 2 simple inputs. One being a simple {theme} and the other being the {scene} of our game world. In this example 'skyrim' was the {theme} and 'set in the dark forests of Gloomhaven. The forest is looming with darkness and mystery with a river that glows blue at night for some reason. It evokes a sense of danger and foreboding, complimented by a misty atmosphere' was the {scene} in which our procedural model drew inspiration from."
              image={forest}
            />
            <span className="scribble">
              <Image
                src={sc}
                alt="Scribble"
                className="scribble absolute overflow-hidden"
              />
            </span>
            <InfoSectionSecondary
              title="CUSTOM PIPELINES"
              desc="Game asset creation pipelines could be added or modified depending on the type of 'game assets' a user would like to create. For example, if I wanted to create a 'character' in my game I would need a different set of instructions to train my AI model in contrast to creating a 'tree' or a 'potion'. Each set of instructions is different depending on the type of asset we intend to generate.
              "
              image={pipelineuml}
            />
            <InfoSectionPrimary
              title="LLM CHAINS"
              desc="The LangChain library was leveraged to chain together prompt templates that could then be passed to my large language model (LLM). Essentially, the problem with neural network models is that they don't really have memory (or a way to remember previous events outside of their 'token window'). To solve this problem, you can either utilise vector databases or chaining libraries (I opted to test out LangChain). The chains work by passing
              the output from our current chain to our next chain until all required outputs are delivered via the
              model sequentially and automatically. For this project, I utilised OpenAI's GPT-3.5-Turbo model as my LLM."
              image={chains}
            />
            <InfoSectionSecondary
              title="PROMPTS"
              desc="In order for users to be able to customise how they want each item to be stylised or created, I needed to
              provide my deep-learning text to image models with prompts to curate game assets to suit the stylistic
              preferences of users. To do this, I created a 'Prompts' class, where essentially different types of prompts are
              utilised, based on the type of asset users would like to create.
              For example: for game items we might want to design a prompt to specify whether we want the item
              to render as a highly realistic octane render, or a 2D sprite sheet. Alternatively, we may also want
              to render completely different types of assets such as textures, isometrics, maps, etc. Our prompt
              class allows us to create and tweak our prompts, based on the specific style requirements of the
              game asset types developers would like to create.
              "
              image={promptuml}
            />
            <InfoSectionPrimary
              title="TEXT-TO-IMAGE GENERATION"
              desc="Our architecture enables the ability to generate game art alongside text-based game assets. This
              could range from: 2D textures, isometric game worlds, game items or pickups, and more. I utilised new research from Google to train my own text-to-image generation model with my own custom data set. To do this, I leveraged Leonardo AI. Leonardo AI provided
              access to custom fine-tuned models that were trained on more specific data, building on top of
              Stable Diffusion’s open source model. They also provide access to a web interface and API
              that allowed me to train my own custom model via DreamBooth. By leveraging my own training data, I
              was then able to custom fine-tune my own models to generate higher quality image renders."
              image={dreambooth}
            />
            <InfoSectionSecondary
              title="SAMPLE IMAGE OUTPUTS"
              desc="Here are a few example text-to-image generations created by the program. NOTE: I did not always need to describe the items created by the model. For example: in some pipelines, the model would use the sample inputs to generate the descriptors for the image for me, before being passed to the text-to-image model. Essentially, I would use AI to provide the descriptors of the object, and then use AI again to create the object based on those descriptors."
              image={demo}
            />
            <InfoSectionPrimary
              title="USER INTERFACE"
              desc="I created a basic web app in Python using the Streamlit library. The user-interface aims to showcase
              the ease of use and efficiency in generating 2D game assets, from minimal human input.
              2D game assets such as game world items, textures, non-player character quests, objectives, items
              and even character backstories and dialogue can all be generated from a simple prompt."
              image={ui}
            />
            <InfoSectionSecondary
              title="SAMPLE TEXT OUTPUT"
              desc="Here is an example of some starter dialogue our AI model generated from a simple theme and game scene (This was done procedurally, after the model created characters and character backstory based on the initial inputs). The domain specific context of the application primarily focused on generating 2D game assets involved in creating
              non-player character quests; such as items, storyline, dialogue, objectives and non-player character
              backstories. However, the architecture can easily be extended to create more technical assets, due to
              its modular structure."
              image={dialogue}
            />
          </div>
          <div>
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
