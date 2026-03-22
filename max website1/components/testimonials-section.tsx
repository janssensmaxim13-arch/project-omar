import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The attention to detail and expertise at Antiquités Belges is unmatched. I've been collecting for 30 years and this is my go-to source for exceptional pieces.",
    author: "Henri Dubois",
    location: "Paris, France",
  },
  {
    quote: "They helped me find the perfect 18th-century writing desk for my study. The restoration work was impeccable—you'd never know it was 250 years old.",
    author: "Margaret Thompson",
    location: "London, UK",
  },
  {
    quote: "As a museum curator, I appreciate their commitment to authenticity. Every piece comes with thorough documentation and provenance.",
    author: "Dr. Klaus Weber",
    location: "Munich, Germany",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground text-balance">
            What Our Collectors Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-lg p-8 relative"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-serif text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
