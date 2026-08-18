"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, ClipboardList, CalendarCheck, Sparkles, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="relative bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
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
            <span className="text-sm font-semibold text-[#283B7B]">Locally Owned & Trusted</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-[1.1] mb-6 text-white">
            About <span className="text-[#F9DB16]">Absolute Carpet Clean</span>
          </h1>

          <p className="text-xl text-white/80 leading-relaxed text-pretty max-w-2xl mx-auto">
            {"Serving Kaua'i with professional cleaning services for over 15 years. Quality work, honest service, and results you can trust."}
          </p>
        </motion.div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <Image
              src="/images/Professional-Staff.webp"
              alt="Absolute Carpet Clean mascot"
              width={640}
              height={800}
              className="w-full max-w-md h-auto"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-4 right-4 sm:bottom-8 sm:right-0 bg-[#F9DB16] p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#283B7B]">15+</div>
                <div className="text-sm font-semibold text-[#283B7B]">Years in Business</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight mb-6 text-[#283B7B]">
              Our Story
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                As a locally owned and operated business, we take pride in serving our community and building lasting relationships with our customers. Our company was built on a simple commitment: do quality work and treat every customer with honesty and respect.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                Over the years we have had the privilege of helping families and businesses keep their spaces clean, healthy, and looking their best. We specialize in carpet cleaning, upholstery cleaning, tile and grout cleaning, and window cleaning, providing professional results with attention to detail.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                We believe that when someone invites us into their home or business, trust matters. {"That's"} why we take pride in our work and stand behind every job with premium service and a satisfaction guarantee.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                After more than a decade in business, we remain committed to delivering the same dependable service, quality results, and professionalism that our customers have come to rely on.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-[#419FBE]/10 rounded-xl">
                <div className="h-10 w-10 bg-[#F9DB16] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-[#283B7B]" />
                </div>
                <div className="text-sm font-semibold text-[#283B7B]">Premium Service</div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#419FBE]/10 rounded-xl">
                <div className="h-10 w-10 bg-[#F9DB16] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-[#283B7B]" />
                </div>
                <div className="text-sm font-semibold text-[#283B7B]">Satisfaction Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const processSteps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Request an Estimate",
      description: "Contact us by phone or through our website to request a quote and discuss your cleaning needs.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Schedule Your Service",
      description: "Due to high demand and limited availability, appointments are scheduled in advance based on our upcoming availability.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Professional Cleaning",
      description: "Using professional equipment and proven methods, we deliver premium cleaning results for carpets, upholstery, tile and grout, and windows.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Final Walk-Through",
      description: "We review the completed scope of work to ensure everything meets our standards and your expectations.",
    },
    {
      number: "05",
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work and are committed to making sure every customer is satisfied.",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-[#F9DB16]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9DB16] rounded-full mb-6">
            <span className="text-sm font-semibold text-[#283B7B]">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight mb-6 text-[#283B7B]">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From your first call to final walk-through, we make getting your space cleaned simple and stress-free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full border-2 border-gray-200 hover:border-[#F9DB16] transition-all bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <step.icon className="h-7 w-7 text-[#283B7B]" />
                  </div>
                  <div className="text-5xl font-bold text-[#419FBE]/20">{step.number}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#283B7B]">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-[#283B7B] rounded-2xl text-center"
        >
          <p className="text-white text-lg">
            <span className="text-[#F9DB16] font-semibold">Note:</span> Due to high demand, appointments are often scheduled several weeks in advance. We recommend contacting us early to reserve your spot.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-[#283B7B] via-[#283B7B] to-[#419FBE]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/api-attachments-wfgaz2vbuft156gu9sgz3.png)",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight mb-6 text-white">
              Ready to Get <span className="text-[#F9DB16]">Started?</span>
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-2xl mx-auto mb-10">
              {"Contact us today for a free quote and let us help you keep your space clean, healthy, and looking its best."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.a
              href="tel:8086311103"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="p-6 text-center border-2 border-white/20 hover:border-[#F9DB16] transition-all h-full bg-white shadow-lg">
                <div className="h-12 w-12 bg-[#419FBE] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#F9DB16] group-hover:scale-110 transition-all">
                  <Phone className="h-5 w-5 text-white group-hover:text-[#283B7B]" />
                </div>
                <h3 className="font-bold mb-1 text-[#283B7B]">Call / Text</h3>
                <p className="text-[#419FBE] font-semibold">(808) 631-1103</p>
              </Card>
            </motion.a>

            <motion.a
              href="mailto:absolutecarpetcleankauai@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="p-6 text-center border-2 border-white/20 hover:border-[#F9DB16] transition-all h-full bg-white shadow-lg">
                <div className="h-12 w-12 bg-[#419FBE] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#F9DB16] group-hover:scale-110 transition-all">
                  <Mail className="h-5 w-5 text-white group-hover:text-[#283B7B]" />
                </div>
                <h3 className="font-bold mb-1 text-[#283B7B]">Email Us</h3>
                <p className="text-[#419FBE] font-semibold text-sm">absolutecarpetcleankauai@gmail.com</p>
              </Card>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Card className="p-6 text-center border-2 border-white/20 hover:border-[#F9DB16] transition-all h-full bg-white shadow-lg">
                <div className="h-12 w-12 bg-[#419FBE] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#F9DB16] group-hover:scale-110 transition-all">
                  <MapPin className="h-5 w-5 text-white group-hover:text-[#283B7B]" />
                </div>
                <h3 className="font-bold mb-1 text-[#283B7B]">Service Area</h3>
                <p className="text-[#419FBE] font-semibold">All of Kauai, Hawaii</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold text-lg px-12 h-16"
            >
              <Link href="/contact">Request a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
