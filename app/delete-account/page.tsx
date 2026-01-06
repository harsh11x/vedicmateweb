"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { deleteUserFromSupabase } from "@/lib/supabase-client"
import { deleteUser, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { AlertTriangle, Trash2, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function DeleteAccountPage() {
    const { user, loginWithGoogle, logout } = useAuth()
    const router = useRouter()
    const [step, setStep] = useState<"warning" | "confirm" | "processing" | "success">("warning")
    const [deleteConfirmation, setDeleteConfirmation] = useState("")
    const [error, setError] = useState<string | null>(null)

    // Handlers
    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
        } catch (err: any) {
            setError("Login failed. Please try again.")
        }
    }

    const handleDelete = async () => {
        if (deleteConfirmation !== "DELETE") {
            setError("Please type DELETE exactly to confirm.")
            return
        }

        if (!user) return

        setStep("processing")
        setError(null)

        try {
            // 1. Delete from Supabase first (before losing auth context if possible, or after - depending on RLS. Usually safer to do before or parallel if backend admin usage.)
            // Note: If using strict RLS, might need to be done while authed. If using admin key in backend, fine. 
            // Using client-side call here provided in requirements.
            if (user.email) {
                await deleteUserFromSupabase(user.email)
            }

            // 2. Delete from Firebase Auth
            // Requires recent login. If it fails, we might need re-auth.
            try {
                await deleteUser(user)
            } catch (firebaseError: any) {
                if (firebaseError.code === 'auth/requires-recent-login') {
                    // Prompt re-auth (simplified here by error message)
                    throw new Error("Security requires recent login. Please log out and log in again, then try deleting.")
                }
                throw firebaseError
            }

            // 3. Clear local storage/session handled by AuthContext mostly, but explicit clear if needed
            await logout() // This clears context state

            setStep("success")

            // Auto redirect after few seconds
            setTimeout(() => {
                router.push("/")
            }, 5000)

        } catch (err: any) {
            console.error("Deletion error:", err)
            setError(err.message || "An error occurred during account deletion.")
            setStep("confirm")
        }
    }

    // --- UI RENDERERS ---

    const renderLoginPrompt = () => (
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-16 h-16 bg-[#B8860B]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#B8860B]/30">
                <AlertTriangle className="w-8 h-8 text-[#B8860B]" />
            </div>
            <h2 className="text-2xl font-serif text-[#B8860B]">Authentication Required</h2>
            <p className="text-[#4A0E0E] max-w-md mx-auto">
                For your security, you must be signed in to delete your account.
                Please verify your identity.
            </p>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
                <Button
                    onClick={handleGoogleLogin}
                    className="w-full bg-white text-black border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 h-12 text-base"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )

    const renderWarning = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200 dark:border-red-900/30">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-500" />
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-serif text-[#4A0E0E] dark:text-red-400 mb-2">Delete Account?</h2>
                <p className="text-[#1A0F0D] opacity-80">Logged in as: <strong>{user?.displayName || user?.email}</strong></p>
            </div>

            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 p-6 rounded-lg text-left">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" /> Warning: Irreversible Action
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-red-700 dark:text-red-400 text-sm">
                    <li>Your profile details and birth charts will be permanently deleted.</li>
                    <li>Your generated reports and purchase history will be lost.</li>
                    <li>This action <strong>cannot be undone</strong>. You cannot recover your account.</li>
                </ul>
            </div>

            <div className="flex gap-4 justify-center pt-4">
                <Button variant="outline" onClick={() => router.push("/")} className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B]/10">
                    Cancel
                </Button>
                <Button onClick={() => setStep("confirm")} className="bg-red-600 hover:bg-red-700 text-white border-none shadow-lg shadow-red-500/20">
                    Continue to Deletion
                </Button>
            </div>
        </div>
    )

    const renderConfirm = () => (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
                <h2 className="text-2xl font-serif text-[#4A0E0E] mb-2">Final Confirmation</h2>
                <p className="text-[#1A0F0D]">
                    To verify your intent, please type <span className="font-bold font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded">DELETE</span> below.
                </p>
            </div>

            <div className="max-w-xs mx-auto space-y-4">
                <input
                    type="text"
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                    placeholder="Type DELETE"
                    className="w-full text-center p-3 border border-[#B8860B]/30 rounded-md focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none bg-white/50 backdrop-blur-sm"
                />

                {error && (
                    <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded border border-red-100">
                        {error}
                    </div>
                )}

                <Button
                    onClick={handleDelete}
                    disabled={deleteConfirmation !== "DELETE"}
                    className="w-full bg-red-600 hover:bg-red-700 text-white disabled:opacity-50 disabled:cursor-not-allowed h-12 font-bold tracking-wide"
                >
                    PERMANENTLY DELETE
                </Button>
                <Button variant="ghost" onClick={() => setStep("warning")} className="w-full text-[#1A0F0D] hover:text-[#B8860B]">
                    Back
                </Button>
            </div>
        </div>
    )

    const renderSuccess = () => (
        <div className="text-center space-y-6 py-8 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif text-green-700">Account Deleted</h2>
            <p className="text-[#1A0F0D]">
                Your account has been successfully removed. <br />
                We are sorry to see you go. May the stars guide you.
            </p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
    )

    const renderProcessing = () => (
        <div className="text-center space-y-6 py-12">
            <Loader2 className="w-12 h-12 text-[#B8860B] animate-spin mx-auto" />
            <h3 className="text-xl font-serif text-[#B8860B]">Processing Deletion...</h3>
            <p className="text-sm opacity-70">Please do not close this window.</p>
        </div>
    )

    return (
        <main className="min-h-screen bg-background paper-texture text-[#1A0F0D] flex flex-col">
            <Header />

            <div className="flex-grow flex items-center justify-center p-6 mt-16 mb-16">
                <div className="w-full max-w-lg bg-[#ffffff]/80 dark:bg-[#0C0806]/90 backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_8px_32px_rgba(212,175,55,0.1)] rounded-2xl p-8 md:p-12 relative overflow-hidden">

                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-2xl pointer-events-none" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-2xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-2xl pointer-events-none" />

                    {!user ? renderLoginPrompt() : (
                        <>
                            {step === "warning" && renderWarning()}
                            {step === "confirm" && renderConfirm()}
                            {step === "processing" && renderProcessing()}
                            {step === "success" && renderSuccess()}
                        </>
                    )}

                </div>
            </div>

            <Footer />
        </main>
    )
}
