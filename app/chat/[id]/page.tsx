"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Mic, Send, Volume2, VolumeX, Sparkles } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CinematicTemple } from "@/components/cinematic-temple"
import { PANDITS } from "@/lib/pandit-data"

export default function ChatPage() {
    const params = useParams()
    const panditId = params.id as string
    const pandit = PANDITS[panditId]

    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isRecording, setIsRecording] = useState(false)
    const [audioEnabled, setAudioEnabled] = useState(true)
    const [isThinking, setIsThinking] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isThinking])

    // Initial Greeting using Personas
    useEffect(() => {
        if (!pandit) return

        const timer = setTimeout(() => {
            setMessages([{ role: 'assistant', content: pandit.greeting || "Welcome to the Sanctum. The stars respond to those who ask. What is your query?" }])
        }, 1000)
        return () => clearTimeout(timer)
    }, [pandit])

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const newMessages = [...messages, { role: 'user' as const, content: inputValue }]
        setMessages(newMessages)
        setInputValue("")
        setIsThinking(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newMessages,
                    panditId: panditId
                })
            })

            if (!response.ok) throw new Error('Failed to fetch response')
            if (!response.body) throw new Error('Response body is null')

            const reader = response.body.getReader()
            const decoder = new TextDecoder()
            let assistantMessage = ""

            // Add placeholder for assistant message
            setMessages(prev => [...prev, { role: 'assistant', content: "" }])
            setIsThinking(false) // Start showing the message instead of thinking

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                const text = decoder.decode(value, { stream: true })
                const lines = text.split('\n')

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6)
                        if (data === '[DONE]') break

                        try {
                            const json = JSON.parse(data)
                            const content = json.choices[0]?.delta?.content
                            if (content) {
                                assistantMessage += content
                                // Update the last message
                                setMessages(prev => {
                                    const updated = [...prev]
                                    updated[updated.length - 1] = { role: 'assistant', content: assistantMessage }
                                    return updated
                                })
                            }
                        } catch (e) {
                            // Ignore parse errors for partial chunks
                        }
                    }
                }
            }

        } catch (error) {
            console.error(error)
            setMessages(prev => [...prev, { role: 'assistant', content: "The connection to the cosmos was interrupted. Please try again." }])
            setIsThinking(false)
        }
    }

    return (
        <main className="flex flex-col h-[100dvh] bg-[#0C0806] text-[#F5E6D3] font-sans overflow-hidden relative selection:bg-[#D4AF37] selection:text-black">
            {/* Background - Sanctum Atmosphere */}
            <div className="absolute inset-0 z-0">
                <CinematicTemple mode="seated" />
            </div>

            {/* Header - Jewel Box */}
            <header className="flex-none z-50 px-4 py-4 md:px-6 md:py-6 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-[#0C0806]/80 to-transparent">
                <Link href="/" className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors group glass-panel rounded-full px-3 py-1.5 md:px-4 md:py-2">
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-serif text-sm md:text-lg tracking-tight">Return</span>
                </Link>

                <div className="flex items-center gap-3">
                    {/* Pandit Name Badge */}
                    {pandit && (
                        <div className="flex flex-col items-end mr-1">
                            <span className="text-[#D4AF37] font-serif text-base md:text-lg leading-none">{pandit.name}</span>
                            <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">{pandit.specialization.split(',')[0]}</span>
                        </div>
                    )}

                    <button
                        onClick={() => setAudioEnabled(!audioEnabled)}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 glass-panel transition-all"
                    >
                        {audioEnabled ? <Volume2 className="w-3 h-3 md:w-4 md:h-4" /> : <VolumeX className="w-3 h-3 md:w-4 md:h-4" />}
                    </button>
                </div>
            </header>

            {/* Chat Area - Scrollable */}
            <div className="flex-1 overflow-y-auto scrollbar-hide z-10 px-4 md:px-0 w-full max-w-3xl mx-auto flex flex-col">
                <div className="flex-1 space-y-6 py-6">
                    <AnimatePresence mode="popLayout">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`
                                        max-w-[85%] md:max-w-[75%] p-4 md:p-6 rounded-2xl text-base md:text-lg leading-relaxed shadow-lg backdrop-blur-md border
                                        ${msg.role === 'user'
                                            ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-white rounded-tr-sm'
                                            : 'bg-[#1A0F0D]/60 border-[#D4AF37]/10 text-[#FFE5A0] font-serif rounded-tl-sm'
                                        }
                                    `}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="flex items-center gap-2 mb-2 opacity-50">
                                            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                                            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Vedic Insight</span>
                                        </div>
                                    )}
                                    <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                                </div>
                            </motion.div>
                        ))}
                        {isThinking && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-start"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A0F0D]/40 border border-[#D4AF37]/10">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
                                    <span className="text-xs text-[#D4AF37] uppercase tracking-widest opacity-70">Consulting Scriptures...</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div ref={messagesEndRef} className="h-4" />
                </div>
            </div>

            {/* Input Area - Static Bottom */}
            <div className="flex-none z-20 pb-safe pt-2 bg-gradient-to-t from-[#0C0806] via-[#0C0806] to-transparent">
                <div className="container mx-auto max-w-2xl px-4 pb-4">
                    <div className="relative flex items-center gap-3 bg-[#1A0F0D]/90 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl px-3 py-2 shadow-[0_0_30px_rgba(212,175,55,0.1)] focus-within:border-[#D4AF37]/60 focus-within:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all">
                        <button
                            className={`p-2 rounded-full hover:bg-[#D4AF37]/10 transition-colors ${isRecording ? 'text-red-500 animate-pulse' : 'text-[#D4AF37]/60'}`}
                            onClick={() => setIsRecording(!isRecording)}
                        >
                            <Mic className="w-5 h-5" />
                        </button>

                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask for guidance..."
                            className="flex-1 bg-transparent border-none outline-none text-[#F5E6D3] placeholder-[#F5E6D3]/20 text-base md:text-lg font-serif px-2 caret-[#D4AF37] min-w-0"
                            autoFocus
                        />

                        <button
                            className="p-2 rounded-full bg-[#D4AF37] text-[#0C0806] hover:bg-[#FFD700] transition-colors shadow-lg shrink-0"
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isThinking}
                        >
                            <Send className="w-4 h-4 ml-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
