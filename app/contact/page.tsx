"use client"

import { Phone, Mail, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
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
              <span className="text-sm font-semibold text-[#283B7B]">Free Quote</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-[1.1] mb-6 text-white">
              Request a <span className="text-[#F9DB16]">Free Quote</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed text-pretty max-w-2xl mx-auto">
              Tell us about the job. We serve homes, businesses, and vacation rentals across Kaua&apos;i. You can also
              call or text{" "}
              <a href="tel:8086311103" className="text-[#F9DB16] font-semibold hover:underline">
                (808) 631-1103
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
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <Card className="p-6 sm:p-10 border-2 border-gray-200 bg-white shadow-lg">
                <h2 className="text-2xl font-bold text-[#283B7B] mb-2">Quote request</h2>
                <p className="text-gray-600 mb-8">
                  Required fields are name, phone, email, and the service you need.
                </p>
                <QuoteForm />
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <a href="tel:8086311103" className="block group">
                <Card className="p-8 h-full border-2 border-gray-200 hover:border-[#F9DB16] transition-all bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20">
                  <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7 text-[#283B7B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#283B7B]">Call / Text</h3>
                  <p className="text-gray-600 leading-relaxed">(808) 631-1103</p>
                </Card>
              </a>

              <a href="mailto:absolutecarpetcleankauai@gmail.com" className="block group">
                <Card className="p-8 h-full border-2 border-gray-200 hover:border-[#F9DB16] transition-all bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20">
                  <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7 text-[#283B7B]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#283B7B]">Email</h3>
                  <p className="text-gray-600 leading-relaxed break-all">
                    absolutecarpetcleankauai@gmail.com
                  </p>
                </Card>
              </a>

              <Card className="p-8 h-full border-2 border-gray-200 hover:border-[#F9DB16] transition-all bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20 group">
                <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-[#283B7B]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#283B7B]">Service area</h3>
                <p className="text-gray-600 leading-relaxed">All of Kaua&apos;i, Hawaii</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
