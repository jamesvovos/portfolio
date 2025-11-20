import { Button } from '@/components/ui/button'
import { Separator } from '@/components//ui/separator'

export function Hero() {
  return (
    <section id="hero" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          Available for Work
        </div>
        
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-balance leading-[1.1]">
          Hey, I'm James.
          <br />
          I'm a Software Engineer based in Melbourne, Australia.
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed">
          I've been developing web and mobile applications for the past 5+ years.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="rounded-lg">
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="rounded-lg border-border hover:bg-accent">
            About Me
          </Button>
          <Separator className='mt-8' />
        </div>
      </div>
    </section>
  )
}
