import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Reviews | Absolute Carpet Clean Kauai",
  description:
    "Google reviews from Kaua'i homes, condos, and vacation rentals. Carpet, windows, tile, and upholstery cleaning, quoted as posted.",
}

export default function ReviewsLayout({ children }: { children: ReactNode }) {
  return children
}
