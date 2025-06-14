"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Collaborate from "@/components/collaborate"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <ParticleBackground />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Collaborate />
        <Contact />
      </main>
    </div>
  )
}
