import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor" // Ensure this path is correct
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Kingsmere Home Improvements | Electric Garage Doors & Awnings",
  description:
    "Family-run UK home improvement specialists since 2016. Premium electric garage doors, awnings, and home transformations.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#3e5f72", 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      {/* cursor-none here is a safety fallback */}
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased theme-home selection:bg-primary selection:text-primary-foreground`}>
        {/* The Custom Cursor sits outside {children} so it's always on top */}
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}