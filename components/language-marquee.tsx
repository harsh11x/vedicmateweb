"use client"

const languages = [
  { name: "Hindi", native: "हिन्दी", greeting: "नमस्ते" },
  { name: "Tamil", native: "தமிழ்", greeting: "வணக்கம்" },
  { name: "Telugu", native: "తెలుగు", greeting: "నమస్కారం" },
  { name: "Bengali", native: "বাংলা", greeting: "নমস্কার" },
  { name: "Marathi", native: "मराठी", greeting: "नमस्कार" },
  { name: "Gujarati", native: "ગુજરાતી", greeting: "નમસ્તે" },
  { name: "Kannada", native: "ಕನ್ನಡ", greeting: "ನಮಸ್ಕಾರ" },
  { name: "Malayalam", native: "മലയാളം", greeting: "നമസ്കാരം" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ", greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" },
  { name: "Odia", native: "ଓଡ଼ିଆ", greeting: "ନମସ୍କାର" },
  { name: "Assamese", native: "অসমীয়া", greeting: "নমস্কাৰ" },
  { name: "Urdu", native: "اردو", greeting: "آداب" },
  { name: "Sanskrit", native: "संस्कृतम्", greeting: "नमस्ते" },
  { name: "Kashmiri", native: "कॉशुर", greeting: "आदाब" },
  { name: "Nepali", native: "नेपाली", greeting: "नमस्ते" },
]

export function LanguageMarquee() {
  return (
    <div className="relative overflow-hidden py-6 bg-gradient-to-r from-background via-muted/30 to-background">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-scroll-left">
        {[...languages, ...languages].map((lang, i) => (
          <div
            key={`${lang.name}-${i}`}
            className="flex-shrink-0 mx-6 flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border/50 shadow-sm hover:border-saffron/30 transition-colors"
          >
            <span className="text-lg font-medium text-saffron">{lang.native}</span>
            <span className="text-xs text-muted-foreground">{lang.greeting}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
