"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { Chrome as Google } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/pandits")
    } catch (err: any) {
      setError(err.message || "Failed to sign in")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push("/pandits")
    } catch (err: any) {
      setError(err.message || "Google sign in failed")
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">

      {/* Abstract Zen Element */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] border border-border rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] border border-border rounded-full opacity-20 pointer-events-none" />

      <div className="w-full max-w-sm z-10">
        <div className="mb-10 text-center">
          <Link href="/" className="text-3xl font-black tracking-tighter block mb-2">VedicMate.</Link>
          <p className="text-muted-foreground text-sm">Sign in to access your digital sanctum.</p>
        </div>

        <div className="bg-card border border-border p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            {error && <p className="text-xs text-red-500 text-center">{error}</p>}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" required className="bg-input border-transparent focus:border-black" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-black">Forgot?</Link>
              </div>
              <Input id="password" name="password" type="password" required className="bg-input border-transparent focus:border-black" />
            </div>

            <Button type="submit" className="w-full btn-zen" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or</span></div>
          </div>

          <Button variant="outline" className="w-full btn-zen-outline gap-2" onClick={handleGoogleSignIn}>
            <Google className="w-4 h-4" /> Continue with Google
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          New here? <Link href="/signup" className="text-black font-semibold hover:underline">Create account</Link>
        </p>
      </div>
    </main>
  )
}
