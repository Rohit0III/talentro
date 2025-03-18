/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"

// // Sample client logos (using placeholder images)
// const clients = [
//   { name: "Microsoft", logo: "/logo-adobe.png" },
//   { name: "Google", logo: "/logo-amazon.png" },
//   { name: "Amazon", logo: "/logo-apple.png" },
//   { name: "IBM", logo: "/logo-google.png" },
//   { name: "Oracle", logo: "/logo-IBM.png" },
//   { name: "Tesla", logo: "/logo-meta.jpeg" },
//   { name: "Apple", logo: "/logo-microsoft.png" },
//   { name: "Meta", logo: "/logo-oracle.png" },
//   { name: "Salesforce", logo: "/logo-salesforce.jpeg" },
//   { name: "Adobe", logo: "/logo-Tesla.png" },
// ]

// export function ClientsMarquee() {
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   useEffect(() => {
//     // Check if dark mode is active
//     const checkDarkMode = () => {
//       setIsDarkMode(document.documentElement.classList.contains("dark"))
//     }

//     // Initial check
//     checkDarkMode()

//     // Create a mutation observer to watch for class changes on the html element
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === "attributes" && mutation.attributeName === "class") {
//           checkDarkMode()
//         }
//       })
//     })

//     observer.observe(document.documentElement, { attributes: true })

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="py-16 bg-white dark:bg-accent overflow-hidden">
//       <div className="container mb-8">
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Trusted by <span className="text-primary">Industry Leaders</span>
//           </h2>
//           <p className="text-gray-medium dark:text-gray-light">
//             We've partnered with forward-thinking companies across various industries to deliver exceptional results.
//           </p>
//         </div>
//       </div>

//       <div className="relative">
//         {/* Gradient overlay on left */}
//         <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-accent to-transparent"></div>

//         {/* Gradient overlay on right */}
//         <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-accent to-transparent"></div>

//         {/* First marquee row */}
//         <div className="flex animate-marquee whitespace-nowrap py-8">
//           {clients.map((client, index) => (
//             <div key={`${client.name}-1-${index}`} className="mx-8 flex items-center justify-center">
//               <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
//                 <Image
//                   src={client.logo || "/placeholder.svg"}
//                   alt={`${client.name} logo`}
//                   fill
//                   className="object-contain"
//                 />
//                 {/* <div className="absolute inset-0 flex items-center justify-center font-bold text-accent dark:text-secondary">
//                   {client.name}
//                 </div> */}
//               </div>
//             </div>
//           ))}

//           {/* Duplicate set for seamless looping */}
//           {clients.map((client, index) => (
//             <div key={`${client.name}-1-dup-${index}`} className="mx-8 flex items-center justify-center">
//               <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
//                 <Image
//                   src={client.logo || "/placeholder.svg"}
//                   alt={`${client.name} logo`}
//                   fill
//                   className="object-contain"
//                 />
//                 {/* <div className="absolute inset-0 flex items-center justify-center font-bold text-accent dark:text-secondary">
//                   {client.name}
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// Sample client logos (using placeholder images)
const clients = [
  { name: "Microsoft", logo: "/1.svg" },
  { name: "Google", logo: "/2.svg" },
  { name: "Amazon", logo: "/4.svg" },
  { name: "IBM", logo: "/5.svg" },
  { name: "Oracle", logo: "/6.svg" },
  { name: "Tesla", logo: "/7.svg" },
  { name: "Apple", logo: "/8.svg" },
  { name: "Meta", logo: "/9.svg" },
  { name: "Salesforce", logo: "/10.svg" },
  { name: "Adobe", logo: "/11.svg" },
]

export function ClientsMarquee() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }

    // Initial check
    checkDarkMode()

    // Create a mutation observer to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          checkDarkMode()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-white dark:bg-accent overflow-hidden">
      <div className="container mb-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-minion mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-gray-medium font-bochan dark:text-gray-light">
            We&apos;ve partnered with forward-thinking companies across various industries to deliver exceptional results.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlay on left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-accent to-transparent"></div>

        {/* Gradient overlay on right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-accent to-transparent"></div>

        {/* First marquee row */}
        <div className="flex animate-marquee whitespace-nowrap py-8">
          {clients.map((client, index) => (
            <div key={`${client.name}-1-${index}`} className="mx-8 flex items-center justify-center">
              {/* Fixed dimensions container for consistent logo sizing */}
              <div className="relative h-32 w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  fill
                  sizes="160px"
                  className="object-contain"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {clients.map((client, index) => (
            <div key={`${client.name}-1-dup-${index}`} className="mx-8 flex items-center justify-center">
              {/* Fixed dimensions container for consistent logo sizing */}
              <div className="relative h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  fill
                  sizes="160px"
                  className="object-fill"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

