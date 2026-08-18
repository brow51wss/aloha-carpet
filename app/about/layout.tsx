import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Absolute Carpet Clean Kauai",
  description: "Learn about Absolute Carpet Clean Kauai - a locally owned and operated cleaning business serving Kaua'i for over 15 years. Professional carpet, window, tile & grout cleaning with 100% satisfaction guaranteed.",
  openGraph: {
    title: "About Us | Absolute Carpet Clean Kauai",
    description: "Learn about Absolute Carpet Clean Kauai - a locally owned and operated cleaning business serving Kaua'i for over 15 years.",
    type: "website",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
