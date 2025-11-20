import Image from "next/image"

type SkillCategory =
  | "Language"
  | "Framework"
  | "Query Language"
  | "Containerization"
  | "Design and Prototyping"
  | "Version Control"

type Skill = {
  name: string
  category: SkillCategory
  image: string
  href: string
}

const skills: Skill[] = [
  {
    name: "Go",
    category: "Language",
    image: "/logos/go.svg",
    href: "https://go.dev",
  },
  {
    name: "React / React Native",
    category: "Framework",
    image: "/logos/react.svg",
    href: "https://react.dev",
  },
  {
    name: "TypeScript",
    category: "Language",
    image: "/logos/typescript.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "GraphQL",
    category: "Query Language",
    image: "/logos/graphql.svg",
    href: "https://graphql.org/",
  },
  {
    name: "Docker",
    category: "Containerization",
    image: "/logos/docker.svg",
    href: "https://www.docker.com/",
  },
  {
    name: "Figma",
    category: "Design and Prototyping",
    image: "/logos/figma.svg",
    href: "https://www.figma.com/",
  },
  {
    name: "GitHub",
    category: "Version Control",
    image: "/logos/github.svg",
    href: "https://github.com/",
  },
  {
    name: "NextJS",
    category: "Framework",
    image: "/logos/nextjs.jpg",
    href: "https://nextjs.org/",
  },
]

export function Skills() {
  // 4 columns, 2 rows
  const columns = [
    skills.slice(0, 2),
    skills.slice(2, 4),
    skills.slice(4, 6),
    skills.slice(6, 8),
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-semibold">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-10 sm:gap-x-16 xl:gap-x-20">
          {columns.map((column, i) => (
            <div key={i} className="space-y-8">
              {column.map((skill) => (
                <a
                  key={skill.name}
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  {/* Icon Container */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-foreground/30 bg-card/60 group-hover:border-foreground transition-colors border-dashed">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="leading-tight">
                    <h3 className="mb-1 text-[15px] md:text-[16px] font-medium text-foreground">
                      {skill.name}
                    </h3>
                    <p className="text-[12px] md:text-xs text-muted-foreground/70">
                      {skill.category}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
