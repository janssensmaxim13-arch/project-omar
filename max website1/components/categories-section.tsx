import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "Timepieces",
    description: "Grandfather clocks, pocket watches & more",
    image: "/images/antique-clock.jpg",
    count: "24 items",
  },
  {
    title: "Porcelain & Ceramics",
    description: "Ming dynasty, Delftware & European pottery",
    image: "/images/antique-vase.jpg",
    count: "38 items",
  },
  {
    title: "Fine Furniture",
    description: "Victorian, Art Nouveau & Baroque pieces",
    image: "/images/antique-furniture.jpg",
    count: "52 items",
  },
  {
    title: "Jewelry & Accessories",
    description: "Estate jewelry, Art Deco & vintage gems",
    image: "/images/antique-jewelry.jpg",
    count: "67 items",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Browse By Category
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground text-balance">
            Curated Collections
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative overflow-hidden bg-card rounded-lg aspect-[4/3]"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">
                      {category.count}
                    </p>
                    <h3 className="text-2xl font-serif text-primary-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="bg-primary-foreground/20 rounded-full p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
