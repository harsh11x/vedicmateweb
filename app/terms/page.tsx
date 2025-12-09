import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Legal</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">Terms of<br />Service.</h1>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-black">
            <p className="font-mono text-sm text-muted-foreground mb-12">Last updated: December 2024</p>

            <div className="space-y-12">
              <section>
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using Vedic Mate, you accept and agree to be bound by these Terms of Service. If
                  you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h3>2. Service Description</h3>
                <p>
                  Vedic Mate provides AI-powered Vedic astrology consultations, horoscope readings, kundli generation,
                  and related spiritual guidance services. Our AI Pandits are trained on authentic Vedic scriptures
                  and traditions.
                </p>
              </section>

              <section>
                <h3>3. Disclaimer</h3>
                <p>
                  Our services are for informational and spiritual guidance purposes only. They should not be
                  considered as professional advice for medical, legal, financial, or other critical life decisions.
                  Always consult appropriate professionals for such matters.
                </p>
              </section>

              <section>
                <h3>4. User Responsibilities</h3>
                <p>
                  You are responsible for providing accurate birth details and information for consultations. You
                  agree not to misuse the service or attempt to manipulate the AI systems.
                </p>
              </section>

              <section>
                <h3>5. Subscription and Payments</h3>
                <p>
                  Paid subscriptions are billed according to the plan selected. You may cancel your subscription at
                  any time. Refunds are subject to our Refund Policy.
                </p>
              </section>

              <section>
                <h3>6. Contact</h3>
                <p>
                  For questions about these Terms, please contact us at <a href="mailto:legal@vedicmate.com">legal@vedicmate.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
