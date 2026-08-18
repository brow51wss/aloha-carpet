import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Absolute Carpet Clean Kauai | Professional Cleaning Services | 15+ Years Experience",
  description:
    "Kauai's trusted professional cleaning service with 15+ years of experience. Carpet cleaning, window cleaning, tile & grout, and industrial services for homes, businesses, and vacation rentals.",
  keywords: [
    "Kauai carpet cleaning",
    "window cleaning Kauai",
    "tile and grout cleaning",
    "industrial cleaning Hawaii",
    "vacation rental cleaning",
    "professional cleaning services Kauai",
  ],
  authors: [{ name: "Absolute Carpet Clean Kauai" }],
  generator: "v0.app",
  openGraph: {
    title: "Absolute Carpet Clean Kauai | Professional Cleaning Services",
    description:
      "Family-owned cleaning service with 15+ years of experience serving all of Kauai. Carpet, window, tile & grout, and industrial cleaning.",
    type: "website",
    locale: "en_US",
    siteName: "Absolute Carpet Clean Kauai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Absolute Carpet Clean Kauai | Professional Cleaning Services",
    description: "Family-owned cleaning service with 15+ years of experience serving all of Kauai.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Absolute Carpet Clean Kauai",
              description:
                "Professional cleaning services including carpet cleaning, window cleaning, tile & grout, and industrial cleaning for Kauai residents and businesses.",
              telephone: "+1-808-631-1103",
              email: "absolutecarpetcleankauai@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kauai",
                addressRegion: "HI",
                addressCountry: "US",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "City",
                name: "Kauai",
              },
              serviceType: [
                "Carpet Cleaning",
                "Window Cleaning",
                "Tile and Grout Cleaning",
                "Industrial Cleaning",
                "Steam Cleaning",
              ],
              foundingDate: "2010",
              slogan: "15+ years of professional cleaning experience",
            }),
          }}
        />
      </body>
    </html>
  )
}
