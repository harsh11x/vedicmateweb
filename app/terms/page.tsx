import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-saffron text-sm font-medium mb-4">Terms of Service • सेवा की शर्तें</span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-8">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using Vedic Mate, you accept and agree to be bound by these Terms of Service. If
                    you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                  <p className="text-muted-foreground">
                    Vedic Mate provides AI-powered Vedic astrology consultations, horoscope readings, kundli generation,
                    and related spiritual guidance services. Our AI Pandits are trained on authentic Vedic scriptures
                    and traditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                  <p className="text-muted-foreground">
                    Our services are for informational and spiritual guidance purposes only. They should not be
                    considered as professional advice for medical, legal, financial, or other critical life decisions.
                    Always consult appropriate professionals for such matters.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                  <p className="text-muted-foreground">
                    You are responsible for providing accurate birth details and information for consultations. You
                    agree not to misuse the service or attempt to manipulate the AI systems.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Subscription and Payments</h2>
                  <p className="text-muted-foreground">
                    Paid subscriptions are billed according to the plan selected. You may cancel your subscription at
                    any time. Refunds are subject to our Refund Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
                  <p className="text-muted-foreground">
                    For questions about these Terms, please contact us at legal@vedicmate.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
