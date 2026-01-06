import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A0F0D] text-[#F5E6D3]/90 relative border-t border-[#D4AF37]/20 pt-20 pb-10">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B]" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">

        {/* Brand Column */}
        <div>
          <Link href="/" className="font-serif text-2xl text-[#F5E6D3] tracking-tight mb-2 block">
            Vedic Mate.
          </Link>
          <span className="block text-[#F5E6D3] font-serif text-sm mb-4 opacity-90">धर्म संस्थापनार्थाय (For the sake of Dharma)</span>

          <p className="leading-relaxed mb-6 text-[#F5E6D3] opacity-90">
            The most advanced digital sanctum for Vedic astrology.
            Blending ancient scripture with modern intelligence.
          </p>

          <div className="flex gap-4">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Youtube} />
          </div>
        </div>

        {/* Quick Links (AstroSage Density) */}
        <div>
          <h4 className="text-[#F5E6D3] font-serif font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Astro Services</h4>
          <ul className="space-y-3">
            <FooterLink href="/horoscope">Daily Horoscope</FooterLink>
            <FooterLink href="/kundli">Free Kundli</FooterLink>
            <FooterLink href="/matching">Gun Milan / Matching</FooterLink>
            <FooterLink href="/panchang">Today's Panchang</FooterLink>
            <FooterLink href="/calendar">Hindu Calendar 2025</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-[#F5E6D3] font-serif font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Vedic Tools</h4>
          <ul className="space-y-3">
            <FooterLink href="/gemstones">Gemstone Suggestion</FooterLink>
            <FooterLink href="/rudraksha">Rudraksha Guide</FooterLink>
            <FooterLink href="/numerology">Numerology Report</FooterLink>
            <FooterLink href="/tarot">AI Tarot Reading</FooterLink>
            <FooterLink href="/vastu">Vastu Compass</FooterLink>
          </ul>
        </div>

        {/* Contact / Trust */}
        <div>
          <h4 className="text-[#F5E6D3] font-serif font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Sanctum Support</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span className="text-[#F5E6D3]">Vedic Research Inst, Varanasi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span className="text-[#F5E6D3]">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span className="text-[#F5E6D3]">pandits@vedicmate.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#F5E6D3] opacity-80">
        <p>© 2025 Vedic Mate. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacypolicy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#D4AF37]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li className="py-1">
      <Link href={href} className="hover:text-[#FFD700] hover:translate-x-1 transition-all inline-block py-0.5">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <Link href="#" className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A0F0D] transition-all">
      <Icon className="w-4 h-4" />
    </Link>
  )
}
