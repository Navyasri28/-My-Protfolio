"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Code, BookOpen } from "lucide-react"

const stats = [
  { icon: Code, label: "Projects", value: "4+", color: "text-purple-600" },
  { icon: GraduationCap, label: "CGPA", value: "7.68", color: "text-blue-600" },
  { icon: Award, label: "Certifications", value: "4+", color: "text-green-600" },
  { icon: BookOpen, label: "Years Learning", value: "2+", color: "text-orange-600" },
]

const achievements = [
  { title: "10th Grade", score: "100%", description: "Sri Chaitanya School" },
  { title: "12th Grade", score: "98.6%", description: "Vignan Junior College" },
  { title: "B.Tech CGPA", score: "7.68", description: "Lovely Professional University" },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <img
                    src="/images/profile.png"
                    alt="Boppudi Navya Sri"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Computer Science student specializing in AI and Data Engineering at Lovely Professional
              University. With a strong foundation in data science and machine learning, I love turning complex data
              into actionable insights.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in data science has led me to work on diverse projects ranging from fake news detection to
              customer churn analysis, always striving to create solutions that make a real impact.
            </p>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{achievement.score}</div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">{achievement.title}</div>
                      <div className="text-xs text-gray-600">{achievement.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
