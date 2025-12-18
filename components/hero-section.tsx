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

  // --- TRANSFORMS ---
  // 1. Text fades out as we enter
  // 1. Text fades out smoothly as we approach the end of the hero scroll
  // Syncing with the "Sanctum" reveal so it feels like passing through
  const introOpacity = useTransform(springScroll, [0.5, 0.9], [1, 0])
  const introScale = useTransform(springScroll, [0.5, 0.9], [1, 0.9])

  // 2. The Gate Opens (0.2 -> 0.6)
  const gateLeftX = useTransform(springScroll, [0.2, 0.6], ["0%", "-100%"])
  const gateRightX = useTransform(springScroll, [0.2, 0.6], ["0%", "100%"])
  const gateOpacity = useTransform(springScroll, [0.1, 0.2, 0.6, 0.7], [0, 1, 1, 0])

  // 3. Inner Sanctum Reveal (0.6 -> 1.0)
  const sanctumOpacity = useTransform(springScroll, [0.6, 0.8], [0, 1])
  const sanctumScale = useTransform(springScroll, [0.6, 1], [0.8, 1])

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full bg-[#0C0806] overflow-hidden">

      {/* 1. Cinematic Background (Sticky) */}
      <div className="fixed inset-0 z-0 h-screen pointer-events-none">
        <CinematicTemple mode="intro" />
      </div>

      {/* 2. Intro Content (Initial View) */}
      <motion.div
        style={{ opacity: introOpacity, scale: introScale }}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center p-4 text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* Trust Signal: Sanskrit Shloka */}
          <div className="mb-8 opacity-80">
            <h3 className="font-serif text-2xl md:text-3xl text-[#D4AF37] tracking-wide mb-2">ॐ असतो मा सद्गमय</h3>
            <p className="text-xs md:text-sm text-[#F5E6D3]/60 uppercase tracking-[0.2em]">Lead us from the unreal to the real</p>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFE5A0] to-[#D4AF37] drop-shadow-lg mb-6">
            Vedic Mate
          </h1>
          <p className="text-xl md:text-2xl text-[#F5E6D3]/90 font-light tracking-wide max-w-2xl mx-auto mb-12">
            Ancient Wisdom. Digital Soul. <br />
            <span className="text-[#D4AF37] font-normal">Connect with 34 Divine AI Pandits.</span>
          </p>

          {/* Quick Actions Bar (AstroSage-style Utility) */}
          <div className="pointer-events-auto flex flex-wrap justify-center gap-4 md:gap-6 bg-[#1A0F0D]/80 backdrop-blur-xl border border-[#D4AF37]/20 p-4 rounded-2xl shadow-2xl">
            <QuickAction icon={Star} label="Daily Horoscope" href="/horoscope" />
            <QuickAction icon={ScrollText} label="Kundli Gen" href="/kundli" />
            <QuickAction icon={Heart} label="Match Making" href="/matching" />
            <QuickAction icon={Sparkles} label="Ask Pandit" href="/chat" highlight />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce cursor-default">
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase opacity-70">Enter the Temple</span>
        </div>
      </motion.div>

      {/* 3. The Gate (Visual Metaphor) */}
      <div className="fixed inset-0 z-20 pointer-events-none flex" style={{ opacity: 0 }}>
        {/* Use framer motion logic to actually render this, but for now strictly visual */}
      </div>

      <motion.div
        style={{ opacity: gateOpacity }}
        className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center"
      >
        <motion.div style={{ x: gateLeftX }} className="w-1/2 h-full bg-[#0C0806] border-r border-[#D4AF37]/30 bg-[url('/assets/temple-pattern.png')] opacity-90" />
        <motion.div style={{ x: gateRightX }} className="w-1/2 h-full bg-[#0C0806] border-l border-[#D4AF37]/30 bg-[url('/assets/temple-pattern.png')] opacity-90" />

        <div className="absolute text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] tracking-widest uppercase opacity-50">Sanctum</h2>
        </div>
      </motion.div>


      {/* 4. Final CTA (Bottom of Scroll) */}
      {/* 4. Final CTA removed as per user request to show only the sanctum visuals */}
      <motion.div
        style={{ opacity: sanctumOpacity, scale: sanctumScale }}
        className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
      >
        {/* Dialog removed. User wants only the sanctum background to be visible on scroll. */}
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
