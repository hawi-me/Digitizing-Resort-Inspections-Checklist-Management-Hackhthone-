"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { api } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"

type User = {
  id: number
  role: string
  full_name: string
  email: string
  department: string
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  useEffect(() => {
    // Check if we have a token in localStorage
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Redirect to login if not authenticated and not already on login page
    if (!isLoading && !token && pathname !== "/login") {
      router.push("/login")
    }

    // Redirect to dashboard if authenticated and on login page
    if (!isLoading && token && pathname === "/login") {
      router.push("/dashboard")
    }
  }, [isLoading, token, pathname, router])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const response = await api.post("/login", { email, password })
      const { token: newToken, user: userData } = response.data

      // Store token and user data
      localStorage.setItem("token", newToken)
      localStorage.setItem("user", JSON.stringify(userData))

      // Update state
      setToken(newToken)
      setUser(userData)

      // Set token for API requests
      api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`

      router.push("/dashboard")

      toast({
        title: "Login successful",
        description: `Welcome back, ${userData.full_name}!`,
      })
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Clear token and user data
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    // Update state
    setToken(null)
    setUser(null)

    // Remove token from API requests
    delete api.defaults.headers.common["Authorization"]

    router.push("/login")

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
  }

  return <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
