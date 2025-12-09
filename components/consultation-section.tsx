"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Mic, Send } from "lucide-react"

export function ConsultationSection() {
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState<"chat" | "voice">("chat")

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎙️</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience AI Consultation Right Now</h2>
            <span className="text-2xl">🎙️</span>
          </div>
          <p className="text-xl text-primary font-serif">अभी परामर्श लें - मुफ्त पहला सवाल</p>
        </div>

        {/* Consultation Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Chat Widget */}
          <div
            className={`bg-background rounded-xl border-2 ${activeTab === "chat" ? "border-primary" : "border-border"} p-6 shadow-lg transition-all`}
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">AI Chat</h3>
            </div>

            {/* Chat Interface */}
            <div className="bg-muted rounded-lg p-4 mb-4 h-48 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">
                    🙏 Namaste! I am Pandit Rajesh Shastri. How may I guide you today?
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-foreground font-serif">
                    नमस्ते! मैं पंडित राजेश शास्त्री हूं। आज मैं आपकी क्या सहायता कर सकता हूं?
                  </p>
                </div>
              </div>
            </div>

            {/* Selects */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <select className="bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground">
                <option>Select Pandit</option>
                <option>Pandit Rajesh Shastri</option>
                <option>Pandit Meera Devi</option>
                <option>Pandit Acharya Vikram</option>
              </select>
              <select className="bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground">
                <option>Language</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Tamil</option>
              </select>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Chat - FREE
            </Button>
          </div>

          {/* Voice Widget */}
          <div
            className={`bg-background rounded-xl border-2 ${activeTab === "voice" ? "border-primary" : "border-border"} p-6 shadow-lg transition-all`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Mic className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">AI Voice Call</h3>
            </div>

            {/* Voice Interface */}
            <div className="bg-muted rounded-lg p-4 mb-4 h-48 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
                <Mic className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground text-center">Press and hold to speak your question</p>
              <p className="text-xs text-primary font-serif mt-2">बोलने के लिए दबाएं और पकड़ें</p>
            </div>

            {/* Selects */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <select className="bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground">
                <option>Select Pandit</option>
                <option>Pandit Rajesh Shastri</option>
                <option>Pandit Meera Devi</option>
                <option>Pandit Acharya Vikram</option>
              </select>
              <select className="bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground">
                <option>Language</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Tamil</option>
              </select>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Start Call - FREE</Button>
          </div>
        </div>

        {/* Free Banner */}
        <div className="text-center mt-8">
          <div className="inline-block bg-primary/10 rounded-full px-6 py-3 border border-primary/30">
            <p className="text-lg font-semibold text-primary">✨ First Question Absolutely FREE ✨</p>
            <p className="text-sm text-primary/80 font-serif">पहला सवाल बिल्कुल मुफ्त</p>
          </div>
        </div>
      </div>
    </section>
  )
}
