import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { DecorativeMandala } from "@/components/illustrations/decorative-mandala"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    nameHi: "मुफ़्त",
    price: "₹0",
    period: "forever",
    description: "Perfect for trying out Vedic Mate",
    features: ["3 chat consultations/month", "Daily horoscope", "Basic Kundli generation", "2 languages supported"],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Premium",
    nameHi: "प्रीमियम",
    price: "₹299",
    period: "/month",
    description: "Most popular for regular consultations",
    features: [
      "Unlimited chat consultations",
      "10 voice calls/month",
      "All 34 AI Pandits",
      "15+ languages",
      "Detailed Kundli with PDF",
      "Match making reports",
      "Priority support",
    ],
    cta: "Start Premium",
    popular: true,
    gradient: "from-saffron to-copper",
  },
  {
    name: "Family",
    nameHi: "परिवार",
    price: "₹599",
    period: "/month",
    description: "Best value for families",
    features: [
      "Everything in Premium",
      "Up to 5 family members",
      "Unlimited voice calls",
      "Family Kundli matching",
      "Muhurat calendar",
      "Dedicated pandit",
      "24/7 priority support",
    ],
    cta: "Start Family Plan",
    popular: false,
    gradient: "from-purple-500 to-pink-500",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <DecorativeMandala className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none" />
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-saffron text-sm font-medium mb-4">Pricing • मूल्य</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for you. Start free and upgrade as you grow in your spiritual journey.
            </p>
            <p className="text-base text-saffron/80 mt-2">अपनी आध्यात्मिक यात्रा के लिए सही योजना चुनें।</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 border ${plan.popular ? "border-saffron/50 shadow-xl shadow-saffron/10" : "border-border/50"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-saffron to-copper text-white text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-sm text-saffron/70">{plan.nameHi}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-saffron" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular
                      ? "bg-gradient-to-r from-saffron to-copper text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 text-left">
              {[
                { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time." },
                {
                  q: "Is there a free trial?",
                  a: "Yes, start with our free plan to experience Vedic Mate before upgrading.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, UPI, and net banking.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time with no questions asked.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border/50">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
