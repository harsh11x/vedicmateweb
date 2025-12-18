"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Horoscopes", href: "/horoscope" },
  { label: "Kundli", href: "/kundli" },
  { label: "Matching", href: "/matching" },
  { label: "Pandits", href: "/pandits" },
  { label: "Shop", href: "/shop" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-[#0C0806]/80 backdrop-blur-md border-b border-[#D4AF37]/20" />

      <div className="relative w-full px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Brand: Divine Gold */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-shadow">
            <span className="text-black font-serif font-bold text-xl">ॐ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#F5E6D3] group-hover:text-white transition-colors">Vedic Mate</span>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Digital Sanctum</span>
          </div>
        </Link>

        {/* Desktop Nav - Functional & Clean */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-[#F5E6D3]/80 hover:text-[#D4AF37] transition-colors flex items-center gap-1">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Area */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/signin" className="text-sm font-medium text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">Login</Link>
          <Link href="/signup">
            <Button className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FDB931] text-black hover:brightness-110 border border-[#B8860B] px-6 text-xs font-bold tracking-wide uppercase shadow-lg shadow-[#D4AF37]/20">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#D4AF37]">
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu - Glass Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0C0806]/95 backdrop-blur-2xl border-b border-[#D4AF37]/30 overflow-hidden relative z-40"
          >
            <div className="p-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif text-[#F5E6D3] hover:text-[#D4AF37] hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-[#D4AF37] py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#D4AF37]/20">
                <Link href="/signin" onClick={() => setIsOpen(false)} className="block text-center text-[#F5E6D3] mb-4 py-2">
                  Login
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FDB931] text-black font-bold h-12 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
