"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/components/auth-context"
import { Loader2 } from "lucide-react"

export default function ChatGatePage() {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()
    // We don't strictly need searchParams here unless we supported ?panditId=xyz redirect

    useEffect(() => {
        if (isLoading) return

        if (isAuthenticated) {
            // User is logged in -> Go to default Chat (Pandit 1) or /chat/1
            router.replace("/chat/1")
        } else {
            // User is NOT logged in -> Go to Login, then come back here (which will then redirect to /chat/1)
            router.replace("/signin?next=/chat")
        }
    }, [isAuthenticated, isLoading, router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0C0806] text-[#D4AF37]">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="font-serif text-lg animate-pulse">Entering Sanctum...</p>
            </div>
        </div>
    )
}
