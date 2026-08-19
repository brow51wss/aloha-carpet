"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Phone, Mail, Sparkles, Droplets, Wind, Zap, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewsSection } from "@/components/reviews-section"

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ReviewsSection />
      <VisualImpactSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-gradient-to-br from-[#419FBE]/10 via-[#F9DB16]/5 to-white">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/api-attachments-wfgaz2vbuft156gu9sgz3.png)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9DB16] rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-[#283B7B]" />
              <span className="text-sm font-semibold text-[#283B7B]">15+ Years of Experience</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-[1.1] mb-6 text-[#283B7B]">
              {"Kaua'i's Premium"} <span className="text-[#F9DB16]">Steam Cleaning</span> & Surface Restoration Experts
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed text-pretty mb-8 max-w-xl">
              {"Expert steam cleaning, window cleaning, tile & grout restoration, and professional general cleaning services for homes, businesses, and vacation rentals across Kaua\'i."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold text-lg px-8 h-14"
              >
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#419FBE] text-[#419FBE] hover:bg-[#419FBE] hover:text-white font-semibold text-lg px-8 h-14 bg-transparent"
              >
                <a href="tel:8086311103">Call or Text for a Quote</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#F9DB16] mb-1">15+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F9DB16] mb-1">2,000+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F9DB16] mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Guaranteed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-carpet.png"
                alt="Freshly cleaned carpet in a Kaua'i home"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#283B7B]/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-[#F9DB16] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 bg-[#F9DB16] rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[#283B7B]" />
                </div>
                <div>
                  <div className="font-bold text-lg text-[#283B7B]">Family-Owned</div>
                  <div className="text-sm text-gray-600">Locally Operated & Trusted on Kaua'i</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      id: "carpet-upholstery",
      icon: Droplets,
      title: "Carpet & Upholstery",
      description: "Professional steam cleaning that removes deep-set dirt, stains, and buildup, restoring the look and feel of your carpets and furniture.",
      image: "/images/carpet-upholstery-sofa.png",
      images: [
        "/images/carpet-upholstery-sofa.png",
        "/images/carpet-upholstery-carpet.png",
        "/images/carpet-upholstery-chair.png",
      ],
    },
    {
      id: "window-cleaning",
      icon: Sparkles,
      title: "Window Cleaning",
      description: "Professional window cleaning using pure water technology for crystal-clear, streak-free results on homes, vacation rentals & businesses.",
      image: "/images/window-cleaning-entry.png",
      images: [
        "/images/window-cleaning-entry.png",
        "/images/window-cleaning-storefront.png",
      ],
    },
    {
      id: "tile-grout",
      icon: Wind,
      title: "Tile & Grout Restoration",
      description: "Professional tile and grout cleaning to remove embedded grime and restore your surfaces, with sealing available for added protection and longer-lasting results.",
      image: "/images/tile-grout-shower.png",
      images: [
        "/images/tile-grout-shower.png",
        "/images/tile-grout-floor.png",
        "/images/tile-grout-in-process.png",
      ],
    },
    {
      id: "industrialized-services",
      icon: Zap,
      title: "Industrialized Services",
      description: "Additional services available for select projects, including move-in and move-out cleaning, VCT strip and wax, construction cleanup, and solar panel cleaning.",
      image: "/images/industrial-polished-floor.png",
      images: [
        "/images/industrial-polished-floor.png",
        "/images/industrial-hallway.png",
      ],
    },
  ]

  return (
    <section id="services" className="py-32 relative bg-gradient-to-b from-white to-[#F9DB16]/20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F9DB16]/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6 text-[#283B7B]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed text-pretty">
            Specialized cleaning services designed to deliver deep, lasting results for your home, business, or vacation rental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

type ServiceItem = {
  id: string
  icon: typeof Droplets
  title: string
  description: string
  image: string
  images?: string[]
}

function ServiceSlideshow({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || images.length < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [paused, images.length])

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? `${title} — recent work` : ""}
          fill
          className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          priority={i === 0}
        />
      ))}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show ${title} photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-[#F9DB16]" : "w-2.5 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const slideshow = Boolean(service.images && service.images.length > 1)

  return (
    <motion.div
      id={service.id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-28"
    >
      <Card className="group relative overflow-hidden border-2 border-gray-200 hover:border-[#F9DB16] transition-all duration-300 h-full bg-white hover:shadow-xl hover:shadow-[#F9DB16]/20 p-0 py-0 gap-0">
        <div className="aspect-[4/3] relative overflow-hidden">
          {slideshow ? (
            <ServiceSlideshow images={service.images ?? []} title={service.title} />
          ) : (
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#283B7B]/90 via-[#283B7B]/50 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-8 z-10 pointer-events-none">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-[#283B7B]" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-balance text-white">{service.title}</h3>
                <p className="text-white/90 leading-relaxed text-pretty">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" ref={ref} className="py-32 bg-gradient-to-br from-[#419FBE]/20 via-[#F9DB16]/10 to-white">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9DB16] rounded-full mb-6">
              <span className="text-sm font-semibold text-[#283B7B]">Locally Owned & Trusted</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight mb-6 text-[#283B7B]">
              {"Trusted Cleaning Professionals Serving Kaua'i for Over 15 Years"}
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                {"Absolute Carpet Clean is a locally owned and operated business serving Kaua'i for over 15 years, delivering professional cleaning experience our clients can count on."}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                We specialize in steam cleaning, window cleaning, and tile and grout restoration, delivering reliable service and quality results our clients can count on.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white rounded-2xl border-2 border-[#F9DB16] shadow-sm">
                <div className="text-3xl font-bold text-[#F9DB16] mb-2">15+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border-2 border-[#F9DB16] shadow-sm">
                <div className="text-3xl font-bold text-[#F9DB16] mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Guaranteed</div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold">
              <Link href="/contact">Request a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function VisualImpactSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="relative h-full min-h-[500px] overflow-hidden border-2 border-gray-200 group hover:border-[#F9DB16] transition-colors bg-white hover:shadow-xl hover:shadow-[#F9DB16]/20">
              <Image
                src="/modern-clean-living-room-hawaii-vacation-rental-sp.jpg"
                alt="Clean living space"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#283B7B]/80 via-[#283B7B]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-balance mb-4 text-white">
                  Ready to Get Your Surfaces Looking Like New? We deliver reliable, professional cleaning with results you can see.
                </h3>
                <p className="text-lg text-white/90 max-w-2xl text-pretty mb-6">
                  {"Call today for a free quote and fast, reliable service across Kaua'i."}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F9DB16] text-[#283B7B] hover:bg-[#F9DB16]/90 font-semibold"
                >
                  <Link href="/contact">Request a Free Quote</Link>
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="p-8 border-2 border-gray-200 hover:border-[#F9DB16] transition-colors bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20">
              <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="h-7 w-7 text-[#283B7B]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#283B7B]">Professional-Grade Equipment</h4>
              <p className="text-gray-600 leading-relaxed">Advanced tools and proven methods for deeper, more effective cleaning.</p>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-[#F9DB16] transition-colors bg-white shadow-sm hover:shadow-lg hover:shadow-[#F9DB16]/20">
              <div className="h-14 w-14 bg-[#F9DB16] rounded-2xl flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-[#283B7B]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#283B7B]">Complete Cleaning Solutions</h4>
              <p className="text-gray-600 leading-relaxed">
                From steam cleaning to windows to full general cleans, we handle multiple services in one visit.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-32 relative bg-gradient-to-br from-[#283B7B] via-[#283B7B] to-[#419FBE]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/api-attachments-wfgaz2vbuft156gu9sgz3.png)",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6 text-white">
              {"Let's Get Your "}<span className="text-[#F9DB16]">Home or Rental</span>{" Looking Its Best"}
            </h2>
            <p className="text-xl text-white/80 text-pretty max-w-2xl mx-auto">
              {"Call or text today for a free quote and dependable, professional service across\nKaua‘i."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="tel:8086311103"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="p-8 text-center border-2 border-white/20 hover:border-[#F9DB16] transition-all h-full bg-white shadow-lg">
                <div className="h-14 w-14 bg-[#419FBE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F9DB16] group-hover:scale-110 transition-all">
                  <Phone className="h-6 w-6 text-white group-hover:text-[#283B7B]" />
                </div>
                <h3 className="font-bold mb-2 text-[#283B7B]">Call / Text   </h3>
                <p className="text-gray-600 text-sm mb-2">Speak directly with us</p>
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
              <Card className="p-8 text-center border-2 border-white/20 hover:border-[#F9DB16] transition-all h-full bg-white shadow-lg">
                <div className="h-14 w-14 bg-[#419FBE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F9DB16] group-hover:scale-110 transition-all">
                  <Mail className="h-6 w-6 text-white group-hover:text-[#283B7B]" />
                </div>
                <h3 className="font-bold mb-2 text-[#283B7B]">Email Us</h3>
                <p className="text-gray-600 text-sm mb-2">Send us a message anytime</p>
                <p className="text-[#419FBE] font-semibold text-sm break-all">absolutecarpetcleankauai@gmail.com</p>
              </Card>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <Card className="p-8 text-center border-2 border-white/20 hover:border-[#F9DB16] transition-all h-full bg-white shadow-lg">
                <div className="h-14 w-14 bg-[#419FBE] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F9DB16] group-hover:scale-110 transition-all">
                  <MapPin className="h-6 w-6 text-white group-hover:text-[#283B7B]" />
                </div>
                <h3 className="font-bold mb-2 text-[#283B7B]">Serving all of Kaua’i Hawaii</h3>
                <p className="text-gray-600 text-sm mb-2">Serving all of</p>
                <p className="text-[#419FBE] font-semibold">Kauai, Hawaii</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
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
