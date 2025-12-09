"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Pay as you go",
    price: "₹25",
    unit: "/minute",
    description: "Perfect for occasional consultations",
    features: [
      "Access to all 34 AI Pandits",
      "Text and voice chat",
      "15+ languages supported",
      "Consultation history saved",
      "Basic kundli generation",
    ],
    cta: "Start consulting",
    popular: false,
  },
  {
    name: "Monthly",
    price: "₹499",
    unit: "/month",
    description: "For regular guidance seekers",
    features: [
      "Everything in Pay as you go",
      "60 minutes included",
      "Priority pandit access",
      "Advanced kundli features",
      "Daily horoscope alerts",
      "Exclusive remedies guide",
    ],
    cta: "Subscribe now",
    popular: true,
  },
  {
    name: "Annual",
    price: "₹3,999",
    unit: "/year",
    description: "Best value for devotees",
    features: [
      "Everything in Monthly",
      "Unlimited consultations",
      "Personal pandit assignment",
      "Family kundli management",
      "Muhurat calendar access",
      "Priority support",
    ],
    cta: "Get annual plan",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that works for you. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 ${
                plan.popular ? "border-gold shadow-xl scale-105" : "border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gold text-background text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.unit}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full h-11 ${plan.popular ? "bg-foreground text-background hover:bg-foreground/90" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
