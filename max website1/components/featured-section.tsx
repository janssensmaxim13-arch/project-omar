import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredItems = [
  {
    id: 1,
    name: "18th Century Grandfather Clock",
    origin: "England, c. 1780",
    price: "€4,850",
    image: "/images/antique-clock.jpg",
    badge: "Featured",
  },
  {
    id: 2,
    name: "Ming Dynasty Porcelain Vase",
    origin: "China, c. 1450",
    price: "€12,500",
    image: "/images/antique-vase.jpg",
    badge: "Rare",
  },
  {
    id: 3,
    name: "Victorian Writing Desk",
    origin: "Belgium, c. 1860",
    price: "€3,200",
    image: "/images/antique-furniture.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Art Deco Gold Brooch",
    origin: "France, c. 1925",
    price: "€1,890",
    image: "/images/antique-jewelry.jpg",
    badge: "New",
  },
  {
    id: 5,
    name: "17th Century World Map",
    origin: "Netherlands, c. 1650",
    price: "€8,750",
    image: "/images/antique-map.jpg",
    badge: "Rare",
  },
  {
    id: 6,
    name: "Baroque Mahogany Cabinet",
    origin: "Germany, c. 1720",
    price: "€6,400",
    image: "/images/antique-furniture.jpg",
    badge: null,
  },
]

export function FeaturedSection() {
  return (
    <section id="collection" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Handpicked Selection
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground text-balance">
              Featured Pieces
            </h2>
          </div>
          <Button variant="outline" className="w-fit">
            View All Items
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer border-0 shadow-none bg-transparent"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <Badge 
                      className="absolute top-4 left-4 bg-primary text-primary-foreground"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>

                {/* Details */}
                <div>
                  <p className="text-xs text-muted-foreground tracking-wide mb-1">
                    {item.origin}
                  </p>
                  <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-lg font-medium text-foreground">
                    {item.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
