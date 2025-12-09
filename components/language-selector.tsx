"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "as", name: "Assamese", native: "অসমীয়া" },
  { code: "ur", name: "Urdu", native: "اردو" },
  { code: "sa", name: "Sanskrit", native: "संस्कृतम्" },
  { code: "ks", name: "Kashmiri", native: "कॉशुर" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
]

export function LanguageSelector({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [selected, setSelected] = useState(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted/50">
          <Globe className="w-4 h-4" />
          {variant === "default" && <span>{selected.native}</span>}
          <ChevronDown className="w-3 h-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-80 overflow-y-auto">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setSelected(lang)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{lang.name}</span>
            <span className="text-muted-foreground">{lang.native}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
