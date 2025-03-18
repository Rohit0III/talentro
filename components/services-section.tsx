"use client"

import type React from "react"

import { useState } from "react"
import { Code, Smartphone, Database, Brain, CloudCog, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export function ServicesSection() {
  const services: Service[] = [
    {
      id: 1,
      title: "Web & Software Development",
      description: "Custom web applications, APIs, and enterprise software solutions with modern tech stacks.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone className="h-8 w-8" />,
    },
    {
      id: 3,
      title: "Blockchain & Web3 Solutions",
      description: "Smart contracts, dApps, NFT platforms, and blockchain integration services.",
      icon: <Database className="h-8 w-8" />,
    },
    {
      id: 4,
      title: "AI-driven Solutions",
      description: "Machine learning, natural language processing, and computer vision applications.",
      icon: <Brain className="h-8 w-8" />,
    },
    {
      id: 5,
      title: "SaaS Development",
      description: "End-to-end SaaS product development with subscription management and user analytics.",
      icon: <CloudCog className="h-8 w-8" />,
    },
  ]

  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-secondary/20 dark:bg-accent/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-minion mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-medium font-bochan dark:text-gray-light">
            Comprehensive technology solutions tailored to drive innovation and growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-accent rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-light/20 dark:border-gray-medium/20"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`
                mb-6 p-4 rounded-full inline-block 
                ${hoveredId === service.id ? "bg-primary text-white" : "bg-secondary/50 dark:bg-gray-medium/20 text-primary dark:text-secondary"}
                transition-all duration-300
              `}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-minion font-bold mb-3">{service.title}</h3>
              <p className="text-gray-medium font-bochan dark:text-gray-light mb-6">{service.description}</p>

              <Button
                variant="link"
                className="p-0 h-auto text-primary dark:text-primary font-bochan hover:text-primary/80 dark:hover:text-primary/80 font-medium"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

