import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Michael Thyer.',
    role: 'Chief Technology Officer at Access Telehealth',
    content:
      "James has been a extraordinary member of our development team, starting as a mobile developer and moving into a Full Stack and Mobile development role. James has great attention to detail and is not shy to ask important questions, constantly broaden his understanding of the tasks he works on and constantly learn and improve. James also has a great work attitude and is a considerable boon to any project he works on and it has been a true pleasure having James in our team.",
    rating: 5,
    image: 'avatars/michael.jpg',
  },
  {
    name: 'Anthony Miller.',
    role: 'Development Manager at Access Telehealth',
    content:
      "James is a consummate professional. His technical capabilities, especially in mobile development, are exceptional. More importantly, James has the right attitude. Always keen to learn more about technology, and equally keen to share his knowledge, James is a future leader.",
    rating: 5,
    image: 'avatars/anthony.jpg',
  },
  {
    name: 'David Nicolaides.',
    role: 'Digital Lead at Scriibi',
    content:
      'It was clear that James has a level of life experience that allows him to build professional and respectful relationships with a diverse range of people.  He was able to leverage this ability to motivate others and make others feel like their input was valued when working together.  James was able to manage his time and quickly identify ways to modify tasks to maintain the expected deliverable within the allowed time frame.  The ability to optimise for delivery time and the end users needs by adjusting the development process is a skill that is highly desirable in software development and James is able to do this at a level that is beyond the expected level. It was a pleasure to work with James and I know others in our team also shared this impression and had a high regard of his professional practice and genuine personality.',
    rating: 5,
    image: 'avatars/david.jpg',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Words From My Direct Managers</h2>
          <Button
            asChild
            variant="outline"
            className="hidden rounded-lg border-border hover:bg-accent md:inline-flex"
          >
            <a href="https://www.linkedin.com/in/jamesvovos/" target="_blank" rel="noopener noreferrer">
              View More
            </a>
          </Button>
        </div>

        <div className="grid gap-6 2xl:grid-cols-3">
          {testimonials.map((testimonial) => {
            const initials = testimonial.name
              .split(' ')
              .map((n) => n[0])
              .join('')

            return (
              <Card
                key={testimonial.name}
                className="flex h-full flex-col border border-border bg-card transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="mb-2 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-sky-500 text-sky-500"
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 pb-4">
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {testimonial.content}
                  </p>
                </CardContent>

                <CardFooter className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      {testimonial.image && (
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      )}
                      <AvatarFallback className="text-sm font-medium">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
