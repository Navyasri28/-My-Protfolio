import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Boppudi Navya Sri - Aspiring Data Scientist",
  description:
    "Portfolio of Boppudi Navya Sri, an aspiring data scientist specializing in machine learning, AI, and data engineering. Explore my projects, skills, and achievements.",
  keywords: "data scientist, machine learning, AI, data engineering, Python, portfolio, Boppudi Navya Sri",
  authors: [{ name: "Boppudi Navya Sri" }],
  openGraph: {
    title: "Boppudi Navya Sri - Aspiring Data Scientist",
    description: "Portfolio showcasing data science projects, machine learning expertise, and AI innovations.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
