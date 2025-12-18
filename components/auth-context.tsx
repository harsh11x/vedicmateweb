"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface AuthContextType {
    isAuthenticated: boolean
    isLoading: boolean
    login: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulated session check
        const storedAuth = localStorage.getItem("vedic_auth_token")
        if (storedAuth) {
            setIsAuthenticated(true)
        }
        setIsLoading(false)
    }, [])

    const login = () => {
        localStorage.setItem("vedic_auth_token", "demo_token_123")
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem("vedic_auth_token")
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
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
