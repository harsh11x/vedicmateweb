"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { auth, googleProvider } from "@/lib/firebase"
import {
    onAuthStateChanged,
    signInWithPopup,
    signOut as firebaseSignOut,
    User
} from "firebase/auth"

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    loginWithGoogle: () => Promise<void>
    login: () => void // Kept for backward warning
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.error("Login failed", error)
            throw error
        }
    }

    const login = () => {
        console.warn("Use loginWithGoogle instead")
    }

    const logout = async () => {
        await firebaseSignOut(auth)
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            isLoading,
            loginWithGoogle,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
