"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewGrid } from "@/components/reviews-section"
import { Button } from "@/components/ui/button"
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from "@/lib/google-reviews"

export default function ReviewsPage() {
  return (
    <main className="relative bg-white overflow-hidden">
      <Header />

      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-[#283B7B] via-[#283B7B] to-[#419FBE]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/images/api-attachments-wfgaz2vbuft156gu9sgz3.png)",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9DB16] rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-[#283B7B]" />
              <span className="text-sm font-semibold text-[#283B7B]">Google Reviews</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-[1.1] mb-6 text-white">
              What Kaua&apos;i Clients <span className="text-[#F9DB16]">Say</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed text-pretty max-w-2xl mx-auto">
              Reviews posted on Google, quoted as written.{" "}
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9DB16] font-semibold hover:underline"
              >
                Read them on Google
              </a>
              .
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#F9DB16]/10">
        <div className="container mx-auto px-4 lg:px-8">
          <ReviewGrid reviews={GOOGLE_REVIEWS} />

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold">
              <Link href="/contact">Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
