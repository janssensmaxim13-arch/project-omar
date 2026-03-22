import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Over 70 years of expertise in European antiques",
  "Certificate of authenticity with every purchase",
  "Worldwide shipping with premium insurance",
  "Expert restoration services available",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/hero-antiques.jpg"
              alt="Our antique shop interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6 text-balance">
              Preserving History, One Piece at a Time
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 1952 in the heart of Brussels, Antiquités Belges has been 
              a trusted name in European antiques for over seven decades. What began 
              as a small family shop has grown into one of Belgium&apos;s most respected 
              destinations for collectors and history enthusiasts alike.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our curators travel across Europe to source the finest pieces—from 
              ornate Victorian furniture to rare Ming dynasty porcelain. Each item 
              in our collection is carefully authenticated and restored to preserve 
              its historical integrity while ensuring it can be cherished for 
              generations to come.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
