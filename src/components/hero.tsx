import Image from 'next/image'
import { Separator } from '@/components//ui/separator'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          Available for Work • Australia
        </div>

        <div className="flex items-start gap-6 mb-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-balance leading-[1.1]">
            Hey, I'm <span className='text-sky-500'>James</span>
            <br />
            I'm a Software Engineer based in Melbourne, Australia.
          </h1>

          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-border shadow-sm shrink-0">
            <Image
              src="/avatars/james.jpg"
              alt="James portrait"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed">
          I've been developing web and mobile applications for the past 5+ years.
        </p>

        {/* Social Links */}
        <TooltipProvider>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/jamesvovos"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://linkedin.com/in/jamesvovos"
                  target="_blank"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:james.vovos@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Email</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>


        <Separator className="mt-8" />
      </div>
    </section>
  )
}
