"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/reviews") return pathname === "/reviews"
    if (href === "/about") return pathname === "/about"
    if (href === "/contact") return pathname === "/contact"
    return false
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F9DB16] shadow-lg"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/api-attachments-zaomjfbedidsiq1wb0i1e.png"
                  alt="Absolute Carpet Clean Kauai"
                  width={260}
                  height={78}
                  className="h-16 w-auto"
                  style={{ filter: "brightness(0) saturate(100%) invert(17%) sepia(47%) saturate(1513%) hue-rotate(201deg) brightness(93%) contrast(95%)" }}
                />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? "text-[#419FBE] border-b-2 border-[#419FBE] pb-1"
                      : "text-[#283B7B] hover:text-[#419FBE]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:8086311103" className="flex items-center gap-2 text-base font-semibold text-[#283B7B]">
                <Phone className="h-5 w-5 text-[#283B7B]" />
                (808) 631-1103
              </a>
              <Button asChild className="bg-[#283B7B] text-white hover:bg-[#419FBE] font-semibold text-base px-6">
                <a href="tel:8086311103">Call Now</a>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-[#283B7B] text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-0 right-0 z-40 bg-[#F9DB16] shadow-xl border-t-2 border-[#283B7B]/20 md:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-semibold py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-white bg-[#419FBE]"
                      : "text-[#283B7B] hover:bg-[#283B7B]/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#283B7B]/20 flex flex-col gap-3">
                <a
                  href="tel:8086311103"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-base font-semibold text-[#283B7B] py-2 px-4"
                >
                  <Phone className="h-5 w-5" />
                  (808) 631-1103
                </a>
                <Button asChild className="bg-[#283B7B] text-white hover:bg-[#419FBE] font-semibold text-base w-full">
                  <a href="tel:8086311103" onClick={() => setMobileOpen(false)}>Call Now</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
