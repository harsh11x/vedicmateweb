import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: ["3 Consultations", "Daily Horoscope", "Basic Kundli"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "₹299",
    period: "/mo",
    features: [
      "Unlimited Consultations",
      "10 Voice Calls",
      "Detailed Reports",
      "Priority Support",
    ],
    cta: "Go Premium",
    popular: true,
  },
  {
    name: "Family",
    price: "₹599",
    period: "/mo",
    features: [
      "Up to 5 Profiles",
      "Unlimited Calls",
      "Family Matching",
      "Dedicated Pandit",
    ],
    cta: "Family Plan",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-black"></span>
            <span className="text-xs uppercase tracking-widest font-bold">Invest</span>
          </div>
          <h1 className="text-massive leading-[0.85] tracking-tighter mb-8">
            Simple.<br />Transparent.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Choose the plan that fits your journey. No hidden fees. Just pure guidance.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300
                    ${plan.popular
                    ? "bg-black text-white shadow-2xl scale-105"
                    : "bg-background border border-border hover:border-black"
                  }
                `}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                      {plan.popular && <span className="text-[10px] uppercase tracking-widest opacity-80 mt-1 block">Most Popular</span>}
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black tracking-tight">{plan.price}</span>
                      {plan.period && <span className="text-sm opacity-60 font-medium">{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className={`w-4 h-4 ${plan.popular ? "text-white" : "text-black"}`} />
                        <span className={`text-sm ${plan.popular ? "text-neutral-300" : "text-muted-foreground"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full py-6 text-base font-semibold rounded-xl transition-all
                    ${plan.popular
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-black text-white hover:opacity-80"
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
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "Can I change plans?", a: "Yes, upgrade or downgrade anytime." },
              { q: "Is there a free trial?", a: "The Free plan is free forever." },
              { q: "Methods accepted?", a: "All major credit cards and UPI." },
              { q: "Can I cancel?", a: "Yes, cancel anytime instantly." },
            ].map((faq, i) => (
              <div key={i}>
                <h4 className="font-bold mb-3">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
