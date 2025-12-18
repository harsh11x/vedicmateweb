"use client"

import { Star, Quote } from "lucide-react"
import { FloatingSacredSymbols } from "@/components/illustrations/sacred-elements"
import { PanditDoodle } from "@/components/illustrations/pandit-doodle"

const testimonials = [
  {
    name: "Priya Sharma",
    nameHi: "प्रिया शर्मा",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Pandit Rajesh Shastri's guidance was incredible. His kundli analysis was spot-on. Felt like talking to a real pandit!",
    textHi: "पंडित राजेश शास्त्री का मार्गदर्शन अविश्वसनीय था। असली पंडित से बात करने जैसा लगा!",
    lang: "Hindi",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Karthik Iyer",
    nameHi: "கார்த்திக் ஐயர்",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "Amazing that I could consult in Tamil! The pandit understood everything perfectly. Highly recommended!",
    textHi: "தமிழில் ஆலோசனை பெற்றது மிகவும் நன்றாக இருந்தது!",
    lang: "Tamil",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Amit Patel",
    nameHi: "અમિત પટેલ",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "24/7 availability changed my life. Got guidance at 2 AM when I needed it most. Thank you Vedic Mate!",
    textHi: "૨૪/૭ ઉપલબ્ધતાએ મારું જીવન બદલી નાખ્યું!",
    lang: "Gujarati",
    gradient: "from-green-500 to-teal-500",
  },
  {
    name: "Lakshmi Reddy",
    nameHi: "లక్ష్మి రెడ్డి",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Speaking in Telugu made the consultation so comfortable. The predictions were surprisingly accurate!",
    textHi: "తెలుగులో మాట్లాడటం చాలా సౌకర్యంగా ఉంది!",
    lang: "Telugu",
    gradient: "from-pink-500 to-rose-500",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <FloatingSacredSymbols className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-saffron/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="absolute left-0 bottom-0 opacity-15 hidden xl:block">
        <PanditDoodle variant="female" className="w-40 h-60" />
      </div>
      <div className="absolute right-0 top-20 opacity-15 hidden xl:block">
        <PanditDoodle variant="male" className="w-44 h-64" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-saffron text-sm font-medium mb-4">Testimonials • भक्तों की आवाज़</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
            Loved by <span className="gradient-text">devotees</span> across India
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community of seekers who found divine guidance through Vedic Mate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-saffron/30 hover:shadow-xl hover:shadow-saffron/5 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-saffron/10 group-hover:text-saffron/20 transition-colors" />

              {/* Rating & Language */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white font-medium`}
                >
                  {testimonial.lang}
                </span>
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-3">"{testimonial.text}"</p>
              <p className="text-sm text-saffron/70 mb-6 font-medium">{testimonial.textHi}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "1,00,000+", label: "Happy Users", labelHi: "खुश उपयोगकर्ता" },
            { value: "4.9/5", label: "Average Rating", labelHi: "औसत रेटिंग" },
            { value: "15+", label: "Languages", labelHi: "भाषाएं" },
            { value: "34", label: "AI Pandits", labelHi: "AI पंडित" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-muted/30">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xs text-saffron/60">{stat.labelHi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
