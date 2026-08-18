"use client"

import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#283B7B] text-white py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/api-attachments-wfgaz2vbuft156gu9sgz3.png)",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/images/api-attachments-zaomjfbedidsiq1wb0i1e.png"
                alt="Absolute Carpet Clean Kauai"
                width={200}
                height={60}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Professional cleaning services for Kauai. Family-owned, trusted for over 15 years, delivering exceptional
              results for homes and businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:8086311103"
                className="h-10 w-10 bg-[#419FBE] rounded-full flex items-center justify-center hover:bg-[#F9DB16] transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:absolutecarpetcleankauai@gmail.com"
                className="h-10 w-10 bg-[#419FBE] rounded-full flex items-center justify-center hover:bg-[#F9DB16] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F9DB16]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F9DB16]">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#carpet-upholstery" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  Carpet &amp; Upholstery
                </Link>
              </li>
              <li>
                <Link href="/#window-cleaning" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/#tile-grout" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  Tile &amp; Grout Restoration
                </Link>
              </li>
              <li>
                <Link href="/#industrialized-services" className="text-white/70 hover:text-[#419FBE] transition-colors">
                  Industrialized Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 lg:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Absolute Carpet Clean Kauai. All rights reserved.</p>
        <p className="text-white/60 text-sm">
          Crafted by{" "}
          <a
            href="https://varakit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#419FBE] hover:text-[#F9DB16] transition-colors font-medium"
          >
            VaraKit
          </a>
        </p>
      </div>
    </footer>
  )
}
