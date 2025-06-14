"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-300 to-blue-400 opacity-20"
        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-purple-200 to-blue-300 opacity-25"
        style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
