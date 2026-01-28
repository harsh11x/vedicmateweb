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

          <div className="flex gap-4 mb-6">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Youtube} />
          </div>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span className="text-[#F5E6D3]">Vedic Research Inst, Varanasi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <Link href="mailto:vedicmate@gmail.com" className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors">vedicmate@gmail.com</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[#F5E6D3] font-serif font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Legal</h4>
          <ul className="space-y-3">
            <FooterLink href="/terms">Terms & Conditions</FooterLink>
            <FooterLink href="/privacypolicy">Privacy Policy</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
            <FooterLink href="/refund">Refund Policy</FooterLink>
            <FooterLink href="/disclaimer">Disclaimer</FooterLink>
          </ul>
        </div>

        {/* Company / Trust */}
        <div>
          <h4 className="text-[#F5E6D3] font-serif font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Company</h4>
          <ul className="space-y-3">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/press">Press / Media</FooterLink>
            {/* <FooterLink href="/testimonials">Testimonials</FooterLink> */}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[#F5E6D3] font-serif font-medium mb-6 uppercase tracking-widest text-xs opacity-80">Support</h4>
          <ul className="space-y-3">
            <FooterLink href="/help">Help Center</FooterLink>
            <FooterLink href="/faq">FAQs</FooterLink>
            <FooterLink href="/abuse">Report Abuse</FooterLink>
            <li className="mt-4">
              <Link href="/contact" className="text-sm text-[#D4AF37] underline hover:text-[#Fdb931]">Contact Support</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#F5E6D3] opacity-80">
        <p>© 2025 Vedic Mate. All rights reserved.</p>
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

