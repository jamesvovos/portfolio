import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  body: string;
  cta: string;
  description: string;
  image: string;
  logo: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "React Native Nurse Application",
    subtitle: "Enterprise Mobile • Healthcare",
    description:
      "Secure, privately distributed React Native app supporting nurse practitioner rounds across aged-care facilities across Australia.",
    body:
      "Due to its closed enterprise distribution, it can’t be publicly shared, but I’ve linked Access Telehealth for additional context.",
    image: "/projects/nurse-app.png",
    logo: "/logos/access-aged-care.svg",
    href: "https://accesstelehealth.com.au",
    cta: "Visit site",
    tags: ["React Native", "TypeScript", "Healthcare", "Enterprise"],
  },
  {
    title: "Trucking Logistics Application",
    subtitle: "Web Platform • Logistics",
    description:
      "Cutting-edge logistics platform built with CLOCS-A and Transport NSW to improve safety and compliance across Australia’s transport industry.",
    body:
      "Includes Mapbox-powered routing, digital pre-start checks, and a full-stack web dashboard for fleet operations.",
    image: "/projects/clocs-a.png",
    logo: "/logos/transport-nsw.png",
    href: "https://clocs-a.org.au",
    cta: "Visit site",
    tags: ["React", "Mapbox", "Logistics", "Safety"],
  },
];

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full">
      <Card className="group relative h-full overflow-hidden rounded-2xl border border-border/60 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-4">
            {/* Logo + Title Section */}
            <div className="flex items-center gap-3">
              {project.logo && (
                <div className="relative h-8 w-8 rounded-md overflow-hidden border border-border/40 bg-white p-1 shadow-sm">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{project.description}</p>
              <p>{project.body}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[0.7rem] font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-3">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="inline-flex items-center gap-1 text-xs font-medium"
              >
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.cta}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          <div className="md:w-64 lg:w-72">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border/70 bg-muted/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-left p-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-12">Recent Projects</h2>

      <div className="grid gap-6 md:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
