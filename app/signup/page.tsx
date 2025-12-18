"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CinematicTemple } from "@/components/cinematic-temple"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#050302] text-[#F5E6D3] font-sans relative overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <CinematicTemple mode="seated" />
      </div>

      {/* Overlay Gradient */}
      <div className="fixed inset-0 z-10 bg-black/40 pointer-events-none" />

      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <span className="text-[#D4AF37] font-serif font-bold text-3xl">ॐ</span>
            </div>
            <h1 className="text-3xl font-serif font-semibold mb-2 text-[#F5E6D3]">Begin Your Journey</h1>
            <p className="text-sm text-[#D4AF37]/80">अपनी यात्रा शुरू करें</p>
          </div>

          <div className="bg-[#1A1410]/60 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#D4AF37]">First Name</Label>
                  <Input id="firstName" placeholder="Priya" className="bg-[#050302]/50 border-[#D4AF37]/20 text-[#F5E6D3] placeholder:text-[#8B7355] focus:border-[#D4AF37]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#D4AF37]">Last Name</Label>
                  <Input id="lastName" placeholder="Sharma" className="bg-[#050302]/50 border-[#D4AF37]/20 text-[#F5E6D3] placeholder:text-[#8B7355] focus:border-[#D4AF37]" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#D4AF37]">Email</Label>
                <Input id="email" type="email" placeholder="devotee@example.com" className="bg-[#050302]/50 border-[#D4AF37]/20 text-[#F5E6D3] placeholder:text-[#8B7355] focus:border-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#D4AF37]">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-[#050302]/50 border-[#D4AF37]/20 text-[#F5E6D3] placeholder:text-[#8B7355] focus:border-[#D4AF37]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#D4AF37]">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="bg-[#050302]/50 border-[#D4AF37]/20 text-[#F5E6D3] placeholder:text-[#8B7355] focus:border-[#D4AF37]" />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="rounded border-[#D4AF37]/40 bg-transparent text-[#D4AF37] focus:ring-[#D4AF37] mt-1" />
                <span className="text-sm text-[#8B7355]">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#D4AF37] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#D4AF37] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button className="w-full bg-[#D4AF37] text-[#2D1B18] hover:bg-[#FFD700] font-medium h-11">
                Create Account
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#D4AF37]/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#1A1410]/0 px-2 text-[#8B7355] bg-black/20 backdrop-blur-sm rounded-full">or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full bg-transparent border-[#D4AF37]/20 text-[#F5E6D3] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                Google
              </Button>
              <Button variant="outline" className="w-full bg-transparent border-[#D4AF37]/20 text-[#F5E6D3] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                Phone
              </Button>
            </div>

            <p className="text-center text-sm text-[#8B7355] mt-6">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#D4AF37] hover:text-[#FFD700] font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
