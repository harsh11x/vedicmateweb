"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import Link from "next/link"

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-16 md:py-32 px-6 bg-black text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="mb-4 flex items-center gap-2 text-white/50">
              <span className="h-px w-8 bg-white"></span>
              <span className="text-xs uppercase tracking-widest font-bold">Mobile App</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-[0.9]">
              Wisdom in<br />Your Pocket.
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12 max-w-xl leading-relaxed">
              Access 34 AI Pandits, 24/7 consultation, and instant guidance. Anywhere, anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 h-14 md:h-16 px-8 gap-4 rounded-full w-full sm:w-auto"
                asChild
              >
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Download on the</p>
                    <p className="font-bold leading-none">App Store</p>
                  </div>
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border border-white/20 text-white hover:bg-white/10 h-14 md:h-16 px-8 gap-4 rounded-full w-full sm:w-auto"
                asChild
              >
                <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <Play className="w-6 h-6 fill-current" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Get it on</p>
                    <p className="font-bold leading-none">Google Play</p>
                  </div>
                </Link>
              </Button>
            </div>

            <div className="mt-12 md:mt-16 flex gap-8 md:gap-12 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold">100K+</p>
                <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest">Downloads</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">4.8</p>
                <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest">Rating</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Abstract representation of a phone or simplified mockup */}
            <div className="w-64 md:w-80 h-[480px] md:h-[600px] border-2 border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 bg-white/5 backdrop-blur-sm relative overflow-hidden">
              <div className="w-full h-full bg-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col p-4 md:p-6">
                <div className="h-6 md:h-8 w-20 md:w-24 bg-white/10 rounded-full mx-auto mb-6 md:mb-8"></div>
                <div className="space-y-3 md:space-y-4">
                  <div className="h-16 md:h-20 bg-white/5 rounded-2xl w-full"></div>
                  <div className="flex gap-3 md:gap-4">
                    <div className="h-24 md:h-32 bg-white/5 rounded-2xl w-full"></div>
                    <div className="h-24 md:h-32 bg-white/5 rounded-2xl w-full"></div>
                  </div>
                  <div className="h-32 md:h-40 bg-white/5 rounded-2xl w-full"></div>
                </div>
                <div className="mt-auto h-12 md:h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm md:text-base">Chat Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
