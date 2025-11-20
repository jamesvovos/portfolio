import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Project = {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  href?: string;
}

const projects: Project[] = [
  {
    title: 'React Native Nurse Application',
    description: 'Built a secure, privately distributed React Native app supporting nurse practitioner rounds across aged-care facilities in Australia. Due to its closed enterprise distribution, it can’t be publicly shared, but I’ve linked Access Telehealth for context.',
    image: '/nurse-app.png',
  },
  {
    title: 'React Native Doctor Application',
    description: 'We partnered with CLOCS-A and Transport NSW to prototype and build a cutting-edge logistics application designed to improve safety and compliance across Australia’s transport industry. The platform helps logistics and trucking companies more easily meet safety standards, reducing operational risk and contributing to safer roads. Key features include custom routing powered by Mapbox APIs and SDKs, digital pre-start vehicle checks, and a fully integrated full-stack web application that enables fleet managers to monitor and manage their operations in real time. It can’t be publicly shared, but I’ve linked CLOCS-A for context.',
    image: '/doctor-app.png',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold">Recent Projects</h2>
          <Button variant="outline" className="rounded-lg border-border hover:bg-accent hidden md:inline-flex">
            All Projects
          </Button>
        </div>
        
        <div className="grid xl:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden bg-muted/30">
                <img 
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
