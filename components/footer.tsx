"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-white dark:bg-primary/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="#home"
              className="text-2xl font-bold text-primary mb-4 block"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              Talentronaut
            </Link>
            <p className="text-gray-light mb-6">
              Cutting-edge technology solutions for forward-thinking enterprises. Innovating the future with AI, Web3,
              and next-generation development.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {["home", "services", "products", "case-studies", "blog", "contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link}`}
                    className="text-gray-light hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      if (link === "home") {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      } else {
                        const element = document.querySelector(`#${link}`)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }
                    }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-light hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-light hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-light hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Subscribe</h3>
            <p className="text-gray-light mb-4">Join our newsletter to get the latest updates and insights.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-gray-light/20 text-white placeholder:text-gray-light/70"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">Sign Up</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-light/20 mt-12 pt-6 text-center">
          <p className="text-gray-light text-sm">© {currentYear} Talentronaut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

