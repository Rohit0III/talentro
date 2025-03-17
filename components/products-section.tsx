"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      title: "LinksUs",
      description: "LinksUs is a cutting edge platform With high data-driven systems to Link, build and explore Industry",
      image: "/linksus.png",
      tags: ["Content", "AI", "Analytics"],
    },
    {
      id: 2,
      title: "AI Mail Management",
      description: "A company that is founded on principle to distribute entire profitability to the employees and none to stakeholders.",
      image: "/saaa.png",
      tags: ["Email", "Automation", "Productivity"],
    },
    {
      id: 3,
      title: "AI Interview",
      description:
        "Skill Techies provides real-world internship experiences in various domains, guided by expert mentors.",
      image: "/skill-techies.png",
      tags: ["HR", "Recruitment", "Assessment"],
    },
    {
      id: 4,
      title: "AI Prompt Enhancer",
      description: "Optimize AI prompts and reduce token usage for more efficient AI interactions and cost savings.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "Optimization", "Cost-saving"],
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="products" className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-gray-medium dark:text-gray-light">
            Cutting-edge SaaS solutions powered by artificial intelligence to transform your workflow.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <ul className="space-y-4">
                {products.map((product, index) => (
                  <li key={product.id}>
                    <button
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeIndex === index
                          ? "bg-primary text-white shadow-lg"
                          : "bg-white dark:bg-accent/80 hover:bg-secondary dark:hover:bg-gray-medium/40"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                      <p
                        className={`text-sm truncate ${
                          activeIndex === index ? "text-white/80" : "text-gray-medium dark:text-gray-light"
                        }`}
                      >
                        {product.description}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-accent rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={products[activeIndex].image || "/placeholder.svg"}
                  alt={products[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {products[activeIndex].tags.map((tag) => (
                    <Badge key={tag} className="bg-secondary text-primary dark:bg-primary/20 dark:text-secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">{products[activeIndex].title}</h3>
                <p className="text-gray-medium dark:text-gray-light mb-6">{products[activeIndex].description}</p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">Try Demo</Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 dark:border-secondary dark:text-secondary dark:hover:bg-secondary/10"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

