"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play, Star, Smartphone, MessageCircle, Phone } from "lucide-react"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"
import { SacredKalash, SacredDiya } from "@/components/illustrations/sacred-elements"
import Link from "next/link"

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background mandala */}
      <DecorativeMandala className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" />

      <div className="absolute left-10 top-20 opacity-20 hidden xl:block">
        <SacredKalash className="w-24 h-36" />
      </div>
      <div className="absolute right-20 top-10 opacity-20 hidden xl:block">
        <SacredDiya className="w-20 h-24" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-[#F5E6D3] text-sm font-medium mb-4 tracking-wide opacity-90">Download App • ऐप डाउनलोड करें</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-[#F5E6D3]">
              Carry <span className="gradient-text-gold">divine wisdom</span> in your pocket
            </h2>
            <p className="text-lg text-[#F5E6D3]/80 mb-8">
              Get instant access to 34 AI Pandits, personalized horoscopes, and spiritual guidance. Available in 15+
              Indian languages.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: MessageCircle, text: "Chat Consultation" },
                { icon: Phone, text: "Voice Calls" },
                { icon: Smartphone, text: "Offline Mode" },
                { icon: Star, text: "Daily Horoscope" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#1A0F0D]/40 border border-[#D4AF37]/30 backdrop-blur-sm">
                  <feature.icon className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sm font-medium text-[#F5E6D3]">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-8 text-[#F5E6D3]">
              <div>
                <p className="text-2xl font-bold text-[#FFD700]">100K+</p>
                <p className="text-xs text-[#F5E6D3]/70">Downloads</p>
              </div>
              <div className="w-px h-10 bg-[#D4AF37]/20" />
              <div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-2xl font-bold text-[#FFD700]">4.8</span>
                </div>
                <p className="text-xs text-[#F5E6D3]/70">App Rating</p>
              </div>
              <div className="w-px h-10 bg-[#D4AF37]/20" />
              <div>
                <p className="text-2xl font-bold text-[#FFD700]">50K+</p>
                <p className="text-xs text-[#F5E6D3]/70">Reviews</p>
              </div>
            </div>

            {/* Download Buttons - Added proper links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-6 gap-3"
                asChild
              >
                <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-80 leading-none">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-6 gap-3"
                asChild
              >
                <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <Play className="w-6 h-6 fill-current" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-80 leading-none">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Phone Mockup with Pandit */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute -left-24 bottom-10 hidden lg:block animate-float"
                style={{ animationDelay: "1s" }}
              >
                <SacredKalash className="w-32 h-48 drop-shadow-lg opacity-80" />
              </div>

              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl shadow-foreground/20">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* App UI mockup */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold">Vedic Mate</p>
                        <p className="text-xs text-saffron">वैदिक मेट</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-copper" />
                    </div>

                    {/* Greeting */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-saffron/10 to-gold/10 border border-saffron/20">
                      <p className="text-sm text-muted-foreground">Good Morning</p>
                      <p className="font-semibold">Priya Sharma</p>
                      <p className="text-xs text-saffron mt-1">शुभ प्रभात, प्रिया जी</p>
                    </div>

                    {/* Today's horoscope */}
                    <div className="p-4 rounded-2xl bg-card border border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">Today's Horoscope • आज का राशिफल</p>
                      <p className="text-sm">The stars align favorably for new beginnings...</p>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white text-center">
                        <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-medium">Chat</p>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center">
                        <Phone className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-medium">Call</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card rounded-full px-4 py-2 shadow-xl border border-border/50 flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold">4.8</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-saffron to-copper text-white rounded-full px-4 py-2 shadow-xl text-sm font-medium">
                15+ Languages
              </div>

              <div className="absolute -right-20 top-20 hidden lg:block animate-float" style={{ animationDelay: "2s" }}>
                <SacredDiya className="w-28 h-44 drop-shadow-lg opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
