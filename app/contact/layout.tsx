import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Free Quote | Absolute Carpet Clean Kauai",
  description:
    "Request a free quote from Absolute Carpet Clean Kauai. Carpet, window, tile & grout, and industrial cleaning for homes, businesses, and vacation rentals across Kaua'i.",
  openGraph: {
    title: "Request a Free Quote | Absolute Carpet Clean Kauai",
    description:
      "Request a free quote for professional cleaning services across Kaua'i. Call, text, or send the form.",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
