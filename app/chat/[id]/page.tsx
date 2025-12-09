"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Mic, Send, Volume2, VolumeX, Sparkles, StopCircle } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { PANDITS } from "@/lib/pandit-data"
import { useAuth } from "@/context/auth-context"

export default function ChatPage() {
    const params = useParams()
    const router = useRouter()
    const { user, loading } = useAuth()
    const panditId = params.id as string
    const pandit = PANDITS[panditId]

    // Auth Protection
    useEffect(() => {
        if (!loading && !user) {
            router.push(`/signin?redirect=/chat/${panditId}`)
        }
    }, [user, loading, router, panditId])

    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isThinking, setIsThinking] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isThinking])

    // Initial Greeting
    useEffect(() => {
        if (!pandit) return
        const timer = setTimeout(() => {
            setMessages([{ role: 'assistant', content: pandit.greeting || "Welcome to the Sanctum. The stars respond to those who ask. What is your query?" }])
        }, 500)
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
            setIsThinking(false)

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
                                setMessages(prev => {
                                    const updated = [...prev]
                                    updated[updated.length - 1] = { role: 'assistant', content: assistantMessage }
                                    return updated
                                })
                            }
                        } catch (e) {
                            // Ignore parse errors
                        }
                    }
                }
            }

        } catch (error) {
            console.error(error)
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection interrupted. Please try again." }])
            setIsThinking(false)
        }
    }

    if (loading) return <div className="h-screen bg-background flex items-center justify-center">Loading Sanctum...</div>
    if (!user) return null // Will redirect

    return (
        <main className="min-h-screen bg-background text-foreground font-sans flex flex-col relative">

            {/* Minimal Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
                <Link href="/pandits" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Exit</span>
                </Link>

                <div className="flex flex-col items-center">
                    <span className="font-bold text-sm tracking-tight">{pandit?.name || "AI Pandit"}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{pandit ? pandit.specialization.split(',')[0] : "Vedic Guide"}</span>
                </div>

                <div className="w-8" /> {/* Spacer for centering */}
            </header>

            {/* Chat Area */}
            <div className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-6 mb-24 overflow-y-auto">
                <AnimatePresence mode="popLayout">
                    {messages.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex mb-6 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`
                                    max-w-[85%] p-4 md:p-5 rounded-2xl text-base md:text-lg leading-relaxed
                                    ${msg.role === 'user'
                                        ? 'bg-black text-white rounded-tr-sm'
                                        : 'bg-secondary text-foreground rounded-tl-sm'
                                    }
                                `}
                            >
                                <p className="whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        </motion.div>
                    ))}
                    {isThinking && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start mb-6"
                        >
                            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-secondary rounded-tl-sm text-sm text-muted-foreground">
                                <Sparkles className="w-4 h-4 animate-spin-slow" />
                                <span>Consulting Vedic texts...</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
                <div className="max-w-3xl mx-auto relative flex items-center gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask your query..."
                        className="flex-1 bg-secondary hover:bg-secondary/80 transition-colors rounded-full h-12 md:h-14 px-6 outline-none text-foreground placeholder:text-muted-foreground"
                    />
                    <Button
                        size="icon"
                        className="h-12 w-12 md:h-14 md:w-14 rounded-full btn-zen shrink-0"
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isThinking}
                    >
                        <Send className="w-5 h-5 ml-0.5" />
                    </Button>
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground opacity-50">AI Guidance can be imprecise.</p>
                </div>
            </div>

        </main>
    )
}
