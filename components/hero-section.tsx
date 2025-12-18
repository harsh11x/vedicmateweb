"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles, ScrollText, Heart } from "lucide-react"
import { CinematicTemple } from "@/components/cinematic-temple"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Physics for smooth feel
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // --- TRANSFORMS (RE-SEQUENCED) ---

  // 1. The Gate starts CLOSED and visible.
  // It stays closed for 0-0.2 scroll, then opens 0.2-0.8
  const gateLeftX = useTransform(springScroll, [0, 0.4], ["0%", "-100%"])
  const gateRightX = useTransform(springScroll, [0, 0.4], ["0%", "100%"])
  const gateOpacity = useTransform(springScroll, [0.8, 1], [1, 0]) // Fade out gate only at very end if needed

  // 2. Content (Vedic Mate Title) reveals AFTER gate opens (0.4 -> 0.6)
  const contentOpacity = useTransform(springScroll, [0.3, 0.6], [0, 1])
  const contentScale = useTransform(springScroll, [0.3, 0.6], [0.8, 1])

  // 3. Inner Sanctum Background (always there but revealed by gate)
  // No opacity fade needed for background, the gate covers it.

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full bg-[#0C0806] overflow-hidden">

      {/* 1. Cinematic Background (Inside the Temple) */}
      <div className="fixed inset-0 z-0 h-screen pointer-events-none">
        <CinematicTemple mode="intro" />
      </div>

      {/* 2. The Gate (Visual Metaphor) - NOW FRONT AND CENTER INITIALLY */}
      <motion.div
        style={{ opacity: gateOpacity }}
        className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center"
      >
        {/* Left Door - Replaced Pattern with Rich Gradient Texture */}
        <motion.div
          style={{ x: gateLeftX }}
          className="w-1/2 h-full bg-gradient-to-r from-[#1A0F0D] to-[#2A1810] border-r border-[#D4AF37]/50 shadow-[10px_0_50px_rgba(0,0,0,0.8)] relative"
        >
          {/* Door Detail - Minimal Gold Line instead of Doodle */}
          <div className="absolute inset-y-0 right-4 w-[1px] bg-[#D4AF37]/30"></div>
          <div className="absolute top-1/2 right-0 w-4 h-32 bg-[#D4AF37] rounded-l-lg shadow-[0_0_20px_#D4AF37] opacity-80" /> {/* Handle */}
        </motion.div>

        {/* Right Door */}
        <motion.div
          style={{ x: gateRightX }}
          className="w-1/2 h-full bg-gradient-to-l from-[#1A0F0D] to-[#2A1810] border-l border-[#D4AF37]/50 shadow-[-10px_0_50px_rgba(0,0,0,0.8)] relative"
        >
          {/* Door Detail */}
          <div className="absolute inset-y-0 left-4 w-[1px] bg-[#D4AF37]/30"></div>
          <div className="absolute top-1/2 left-0 w-4 h-32 bg-[#D4AF37] rounded-r-lg shadow-[0_0_20px_#D4AF37] opacity-80" /> {/* Handle */}
        </motion.div>

        {/* Initial CTA (Before Scroll) */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-20 flex flex-col items-center gap-4"
        >
          <span className="text-[#D4AF37] text-sm tracking-[0.5em] uppercase font-serif glow-text">Enter the Sanctum</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
        </motion.div>
      </motion.div>

      {/* 3. Main Content (Revealed inside) */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center p-4 text-center pointer-events-none"
      >
        <div className="max-w-5xl pointer-events-auto">
          {/* Trust Signal: Sanskrit Shloka */}
          <div className="mb-8 opacity-80">
            <h3 className="font-serif text-2xl md:text-3xl text-[#D4AF37] tracking-wide mb-2 drop-shadow-md">ॐ असतो मा सद्गमय</h3>
            <p className="text-xs md:text-sm text-[#F5E6D3]/60 uppercase tracking-[0.2em]">Lead us from the unreal to the real</p>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFE5A0] via-[#D4AF37] to-[#B8860B] drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] mb-6">
            Vedic Mate
          </h1>
          <p className="text-xl md:text-2xl text-[#F5E6D3]/90 font-light tracking-wide max-w-2xl mx-auto mb-12">
            Ancient Wisdom. Digital Soul. <br />
            <span className="text-[#D4AF37] font-normal">Connect with 34 Divine AI Pandits.</span>
          </p>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 bg-[#1A0F0D]/40 backdrop-blur-xl border border-[#D4AF37]/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <QuickAction icon={Star} label="Daily Horoscope" href="/horoscope" />
            <QuickAction icon={ScrollText} label="Kundli Gen" href="/kundli" />
            <QuickAction icon={Heart} label="Match Making" href="/matching" />
            <QuickAction icon={Sparkles} label="Ask Pandit" href="/chat" highlight />
          </div>
        </div>
      </motion.div>

    </section>
  )
}

function QuickAction({ icon: Icon, label, href, highlight }: { icon: any, label: string, href: string, highlight?: boolean }) {
  return (
    <Link href={href} className="group">
      <div className={`
                flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300
                ${highlight
          ? 'bg-[#D4AF37] text-[#0C0806] shadow-lg shadow-[#D4AF37]/20 hover:scale-105'
          : 'bg-transparent text-[#F5E6D3] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]'
        }
            `}>
        <Icon className={`w-6 h-6 ${highlight ? 'stroke-2' : 'stroke-1 group-hover:stroke-2'}`} />
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
    </Link>
  )
}
