"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface CaseStudy {
  id: number
  title: string
  client: string
  category: string
  image: string
  description: string
  results: string[]
  technologies: string[]
}

export function CaseStudiesSection() {
  const categories = ["All", "Web", "AI", "Mobile", "Web3"]
  const [activeFilter, setActiveFilter] = useState("All")

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "AI-Powered Customer Insights Platform",
      client: "Global Retail Corp",
      category: "AI",
      image: "/ai-pexels.jpg?height=100&width=400",
      description:
        "Developed a comprehensive customer analytics platform that uses AI to extract actionable insights from customer data.",
      results: [
        "43% increase in customer retention",
        "2.7x ROI from targeted marketing campaigns",
        "60% reduction in data analysis time",
      ],
      technologies: ["Python", "TensorFlow", "React", "AWS"],
    },
    {
      id: 2,
      title: "Blockchain-Based Supply Chain Solution",
      client: "LogiTech Industries",
      category: "Web3",
      image: "/blockchain-pexels.jpg?height=200&width=400",
      description:
        "Created a transparent supply chain tracking system using blockchain technology for improved traceability and reduced fraud.",
      results: [
        "99.9% reduction in counterfeit products",
        "37% improvement in supply chain efficiency",
        "28% cost reduction in verification processes",
      ],
      technologies: ["Solidity", "Ethereum", "Next.js", "IPFS"],
    },
    {
      id: 3,
      title: "Cross-Platform Mobile Banking App",
      client: "FinSecure Bank",
      category: "Mobile",
      image: "/cross-platform-pexels.jpg",
      description:
        "Designed and developed a secure, feature-rich mobile banking application with biometric authentication and real-time notifications.",
      results: [
        "4.8/5 average user rating",
        "85% increase in mobile transactions",
        "52% reduction in customer service calls",
      ],
      technologies: ["React Native", "TypeScript", "Node.js", "Firebase"],
    },
    {
      id: 4,
      title: "E-commerce Website Redesign",
      client: "StyleFusion",
      category: "Web",
      image: "/e-commerce-pexels.jpg",
      description:
        "Completely redesigned the user experience and modernized the technology stack of a fashion e-commerce platform.",
      results: [
        "156% increase in conversion rate",
        "32% decrease in bounce rate",
        "2.4x increase in average order value",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Strapi", "Stripe"],
    },
  ]

  const filteredStudies =
    activeFilter === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeFilter)

  return (
    <section id="case-studies" className="py-24 bg-secondary/20 dark:bg-accent/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-minion md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-gray-medium dark:text-gray-light font-bochan mb-8">
            Explore our successful projects and see how we&apos;ve helped businesses transform and grow.
          </p>

          <div className="flex flex-wrap font-bochan justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-accent hover:bg-secondary dark:hover:bg-gray-medium/40"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-accent rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-72">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover"  />
                </div>

                <div className="p-6">
                  <Badge className="mb-2 bg-secondary text-primary dark:bg-primary/20 dark:text-secondary">
                    {study.category}
                  </Badge>
                  <h3 className="text-xl font-minion font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-medium font-minion dark:text-gray-light mb-2">Client: {study.client}</p>
                  <p className="text-gray-medium font-minion dark:text-gray-light mb-4">{study.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold font-minion mb-2">Results:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-medium font-bochan dark:text-gray-light">
                      {study.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap  font-bochan gap-2 mb-4">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary/40 dark:bg-gray-medium/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="link" className="p-0 h-auto text-primary font-bochan dark:text-primary hover:opacity-80">
                    View Full Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

