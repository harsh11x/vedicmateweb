"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Apple, Play } from "lucide-react"

export function AppDownloadSection() {
  return (
    <section id="download" className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">Take divine guidance everywhere</h2>
              <p className="text-lg text-background/70 leading-relaxed">
                Download the Vedic Mate app and connect with our AI Pandits anytime, anywhere. Available on iOS and
                Android.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Instant access to all 34 AI Pandits",
                "Voice and text consultations",
                "Push notifications for daily horoscope",
                "Offline kundli access",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-background/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-14 px-6 gap-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-14 px-6 gap-3">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-70">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-semibold">500K+</p>
                <p className="text-sm text-background/60">Downloads</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">4.8</p>
                <p className="text-sm text-background/60">App Rating</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[560px] bg-background/10 rounded-[3rem] border-4 border-background/20 p-3">
                <div className="w-full h-full bg-gradient-to-b from-gold/20 to-gold/5 rounded-[2.5rem] flex flex-col items-center justify-center">
                  <Smartphone className="w-16 h-16 text-background/40 mb-4" />
                  <p className="text-background/60 text-sm">App Preview</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gold text-background px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                Free Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
