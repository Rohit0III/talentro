import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsMarquee } from "@/components/clients-marquee"
import { ProductsSection } from "@/components/products-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientsMarquee />
        <ProductsSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

