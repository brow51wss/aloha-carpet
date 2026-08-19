"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GOOGLE_REVIEWS_URL, HOMEPAGE_REVIEWS, type GoogleReview } from "@/lib/google-reviews"

function Stars({ rating, name }: { rating: number; name: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars from ${name}`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#F9DB16] text-[#F9DB16]" />
      ))}
    </div>
  )
}

export function ReviewGrid({ reviews }: { reviews: GoogleReview[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <motion.div
          key={review.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.24) }}
        >
          <Card className="p-8 h-full border-2 border-gray-200 hover:border-[#F9DB16] transition-all bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20">
            <Stars rating={review.rating} name={review.name} />
            {review.quote ? (
              <blockquote className="mt-4 text-gray-600 leading-relaxed text-pretty">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
            ) : (
              <p className="mt-4 text-gray-500 text-sm">5-star Google review with no written comment.</p>
            )}
            <p className="mt-6 font-semibold text-[#283B7B]">{review.name}</p>
            <p className="text-sm text-gray-500">Google review</p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-32 relative bg-gradient-to-b from-white to-[#F9DB16]/20 scroll-mt-28">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9DB16] rounded-full mb-6">
            <span className="text-sm font-semibold text-[#283B7B]">Google Reviews</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6 text-[#283B7B]">
            What Kaua&apos;i Clients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed text-pretty">
            Reviews posted on Google, quoted as written.
          </p>
        </motion.div>

        <ReviewGrid reviews={HOMEPAGE_REVIEWS} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Button asChild size="lg" className="bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold">
            <Link href="/reviews">See All Reviews</Link>
          </Button>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#419FBE] hover:text-[#283B7B] underline underline-offset-4"
          >
            Read them on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
