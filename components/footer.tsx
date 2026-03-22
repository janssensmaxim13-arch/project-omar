import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif text-primary-foreground">
                Antiquités Belges
              </span>
              <span className="block text-xs text-primary-foreground/60 tracking-widest uppercase mt-1">
                Est. 1952 • Bruxelles
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Curating exceptional antiques and historical relics for 
              collectors and history enthusiasts since 1952.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#collection" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Authentication
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Porcelain & Ceramics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Timepieces
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Maps & Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/50 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Rue des Antiquaires 42<br />
                  1000 Bruxelles, Belgium
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/50 flex-shrink-0" />
                <a href="tel:+3225551234" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  +32 2 555 1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/50 flex-shrink-0" />
                <a href="mailto:info@antiquitesbelges.be" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  info@antiquitesbelges.be
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-foreground/50 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Tue - Sat: 10:00 - 18:00<br />
                  Sun: 12:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Antiquités Belges. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
