import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Get in Touch
        </h2>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="px-6 py-3"
          >
            <a href="mailto:james.vovos@gmail.com">
              Send Email
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-6 py-3"
          >
            <a
              href="https://linkedin.com/in/jamesvovos"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
