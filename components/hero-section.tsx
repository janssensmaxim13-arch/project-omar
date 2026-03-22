import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-antiques.jpg"
          alt="Antique shop interior with vintage furniture and collectibles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-6">
            Since 1952 in Belgium
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-6 text-balance">
            Discover the Beauty of History
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed max-w-xl">
            Curated antiques and rare relics from across Europe. Each piece tells a story, 
            waiting to become part of yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-primary-foreground/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-primary-foreground/30" />
      </div>
    </section>
  )
}
