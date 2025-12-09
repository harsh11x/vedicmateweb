import Link from "next/link"
import { Github, Twitter, Youtube, Disc } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 pb-0 overflow-hidden">

      {/* Top Section: Links & Copyright */}
      <div className="container mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Left: Copyright & Contact */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-sm text-neutral-500">
              © 2025 Vedic Mate Labs Inc. All rights reserved.
            </p>
            <Link href="mailto:support@vedicmate.ai" className="text-sm font-medium hover:underline">
              support@vedicmate.ai
            </Link>
          </div>

          <div className="flex gap-6 mt-8 md:mt-0">
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Youtube} />
            <SocialIcon icon={Github} />
            <SocialIcon icon={Disc} />
          </div>
        </div>

        {/* Right: Columns */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-neutral-400">Services</h4>
            <FooterLink href="/horoscope">Horoscope</FooterLink>
            <FooterLink href="/kundli">Kundli</FooterLink>
            <FooterLink href="/matching">Matching</FooterLink>
            <FooterLink href="/pandits">AI Pandits</FooterLink>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-neutral-400">Company</h4>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-neutral-400">Resources</h4>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/docs">Documentation</FooterLink>
            <FooterLink href="/changelog">Changelog</FooterLink>
            <FooterLink href="/roadmap">Roadmap</FooterLink>
          </div>

        </div>
      </div>

      {/* Bottom: Massive Watermark Text */}
      <div className="w-full border-t border-neutral-100 mt-auto">
        <div className="w-full px-2 md:px-2 pb-2 md:pb-8 overflow-visible leading-none flex justify-center">
          <h1 className="text-[19.5vw] font-black leading-[0.75] tracking-tighter text-black w-full text-center select-none pointer-events-none translate-y-0">
            VedicMate
          </h1>
        </div>
      </div>

    </footer>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-neutral-500 hover:text-black transition-colors block py-1">
      {children}
    </Link>
  )
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <Link href="#" className="text-black hover:opacity-70 transition-opacity p-2 -ml-2">
      <Icon className="w-5 h-5" />
    </Link>
  )
}
