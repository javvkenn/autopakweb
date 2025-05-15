"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface NewsletterFormProps {
  className?: string
  buttonClassName?: string
  inputClassName?: string
  buttonText?: string
  placeholder?: string
}

export default function NewsletterForm({
  className = "",
  buttonClassName = "w-full bg-green-600 hover:bg-green-700",
  inputClassName = "",
  buttonText = "Subscribe",
  placeholder = "Your email address",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Subscription successful!",
          description: data.message,
        })
        setEmail("")
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-2 ${className}`}>
      <Input
        type="email"
        placeholder={placeholder}
        className={inputClassName}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <Button type="submit" className={buttonClassName} disabled={isLoading}>
        {isLoading ? "Subscribing..." : buttonText}
      </Button>
    </form>
  )
}
