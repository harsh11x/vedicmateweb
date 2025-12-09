"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Horoscopes", href: "/horoscope" },
  { label: "Kundli", href: "/kundli" },
  { label: "Matching", href: "/matching" },
  { label: "AI Pandits", href: "/pandits" },
  { label: "Pricing", href: "/pricing" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Minimal Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          VedicMate.
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/signin" className="text-sm font-medium hover:underline">
            Sign In
          </Link>
          <Link href="/signup">
            <Button className="btn-zen rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-2 border-b border-border/50"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/signin" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full rounded-full">Sign In</Button>
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)}>
              <Button className="w-full btn-zen rounded-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

