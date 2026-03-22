import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Antiquités Belges | Fine Antiques & Historical Relics',
  description: 'Discover rare antiques, vintage collectibles, and historical relics from Belgium and across Europe. Curated collection of fine furniture, porcelain, jewelry, and art.',
  keywords: ['antiques', 'relics', 'Belgium', 'vintage', 'collectibles', 'furniture', 'porcelain', 'art'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
