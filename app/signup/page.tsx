"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { Chrome as Google } from "lucide-react"

export default function SignUpPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const name = `${formData.get("firstName")} ${formData.get("lastName")}`

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: name })
      router.push("/pandits")
    } catch (err: any) {
      setError(err.message || "Failed to create account")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push("/pandits")
    } catch (err: any) {
      setError(err.message || "Google sign up failed")
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">

      {/* Abstract Zen Element */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] border border-border rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] border border-border rounded-full opacity-20 pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="mb-8 text-center">
          <Link href="/" className="text-3xl font-black tracking-tighter block mb-2">VedicMate.</Link>
          <p className="text-muted-foreground text-sm">Join the digital sanctum.</p>
        </div>

        <div className="bg-card border border-border p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleEmailSignUp} className="space-y-4">
            {error && <p className="text-xs text-red-500 text-center">{error}</p>}

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" placeholder="Aditi" required className="bg-input border-transparent focus:border-black" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" placeholder="Sharma" required className="bg-input border-transparent focus:border-black" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" required className="bg-input border-transparent focus:border-black" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required className="bg-input border-transparent focus:border-black" />
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" required className="mt-1 rounded bg-input border-border" />
              <span className="text-xs text-muted-foreground">
                I agree to the <Link href="/terms" className="underline hover:text-black">Terms</Link> and <Link href="/privacy" className="underline hover:text-black">Privacy Policy</Link>.
              </span>
            </div>

            <Button type="submit" className="w-full btn-zen" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or</span></div>
          </div>

          <Button variant="outline" className="w-full btn-zen-outline gap-2" onClick={handleGoogleSignUp}>
            <Google className="w-4 h-4" /> Continue with Google
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account? <Link href="/signin" className="text-black font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </main>
  )
}
