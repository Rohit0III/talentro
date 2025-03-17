"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Generate points
    const particlesArray: any[] = []
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 20))

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 5 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const directionX = Math.random() * 1 - 0.5
      const directionY = Math.random() * 1 - 0.5
      const color = i % 3 === 0 ? "#D4503A" : i % 3 === 1 ? "#787979" : "#FFE2DE"

      particlesArray.push({ x, y, directionX, directionY, size, color })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesArray.forEach((particle) => {
        particle.x += particle.directionX
        particle.y += particle.directionY

        if (particle.x > canvas.width || particle.x < 0) {
          particle.directionX *= -1
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.directionY *= -1
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particlesArray.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(120, 121, 121, ${0.2 - distance / 500})`
            ctx.lineWidth = 1
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50 dark:opacity-30 z-0" />

      <div className="container relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-secondary/30 dark:bg-primary/10 animate-fade-in">
            <p className="text-sm font-medium text-primary">Next-Gen Technology Solutions</p>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-primary">Innovating</span> the Future with AI & Next-Gen Technology
          </h1>

          <p
            className="text-lg md:text-xl text-gray-medium dark:text-gray-light mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            End-to-end solutions in AI, Web3, SaaS, and Automation for forward-thinking enterprises.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6">Get a Free Consultation</Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 dark:border-secondary dark:text-secondary dark:hover:bg-secondary/10 px-6 py-6"
            >
              Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#services" aria-label="Scroll to services section">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

