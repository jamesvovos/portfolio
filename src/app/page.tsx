import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
      <main className="flex-1 py-20 px-6 md:px-12 lg:px-16 bg-background">
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
  );
}
