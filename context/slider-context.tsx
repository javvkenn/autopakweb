"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

// Define the slide type
export type Slide = {
  id: number
  badge: string
  title: string
  description: string
  color: string
  imageUrl?: string // Add image URL property
}

// Default slides
const defaultSlides: Slide[] = [
  {
    id: 0,
    badge: "EcoWeave",
    title: "Sustainable Packaging Solutions",
    description: "High-quality woven polypropylene bags for various industries.",
    color: "from-green-50 to-blue-50",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop",
  },
]

type SliderContextType = {
  currentSlide: number
  setCurrentSlide: (index: number) => void
  slides: Slide[]
}

// Create context with default values
const SliderContext = createContext<SliderContextType>({
  currentSlide: 0,
  setCurrentSlide: () => {},
  slides: defaultSlides,
})

export function SliderProvider({
  children,
  initialSlides = defaultSlides,
}: {
  children: React.ReactNode
  initialSlides?: Slide[]
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <SliderContext.Provider value={{ currentSlide, setCurrentSlide, slides: initialSlides }}>
      {children}
    </SliderContext.Provider>
  )
}

export function useSlider() {
  return useContext(SliderContext)
}
