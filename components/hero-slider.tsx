"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, ChevronsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import QuoteButton from "@/components/quote-button"
import { useSlider } from "@/context/slider-context"

const slides = [{
    id: 1,
    badge: "Eco-Friendly Packaging Solutions",
    title: "Sustainable Strength in Every Weave",
    description:
      "Leading WPP Bag Solutions for Every Industry. Durable, customizable, and environmentally responsible packaging.",
    color: "from-green-50 to-blue-50",
    imageUrl: "/placeholder.svg?height=1080&width=1920&text=Eco-Friendly+Packaging",
  },]


export default function HeroSlider() {
  const { currentSlide, setCurrentSlide, slides: contextSlides } = useSlider()
  const [isAutoplay, setIsAutoplay] = useState(true)

    // Use slides from context if available, otherwise use default slides
  const displaySlides = contextSlides.length > 0 ? contextSlides : slides

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === displaySlides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay, displaySlides.length])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === displaySlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? displaySlides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative py-0 pt-16 md:pt-16 overflow-hidden min-h-[100vh] flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`image-${currentSlide}`}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={displaySlides[currentSlide]?.imageUrl.url || "/placeholder.svg?height=1080&width=1920"}
              alt={displaySlides[currentSlide]?.title}
              fill
              priority
              className="object-cover"
            />
            {/* Simple gradient overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>



      <div className="container relative z-10">
        {/* Text Content with Animation - Centered */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">
                {displaySlides[currentSlide]?.badge}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight  text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {displaySlides[currentSlide]?.title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {displaySlides[currentSlide]?.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <QuoteButton className="bg-green-600 hover:bg-green-700 group relative overflow-hidden" />
              <Button
                variant="outline"
                className="group"
                asChild
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={displaySlides[currentSlide]?.buttonLink || "/products"}>
                  {displaySlides[currentSlide]?.buttonText || "Browse Products"}{" "}
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
          {displaySlides?.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-green-600" : "bg-gray-300"}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={currentSlide === index ? { scale: [1, 1.2, 1] } : {}}
              transition={currentSlide === index ? { duration: 1, repeat: Number.POSITIVE_INFINITY } : {}}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-16 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToServices}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronsDown className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Arrow Controls */}
        <motion.button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-20"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="h-6 w-6 text-green-600" />
        </motion.button>
        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md z-20"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="h-6 w-6 text-green-600" />
        </motion.button>
      </div>
    </section>
  )
}
