"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Trophy } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Specialized in A.I and D.E",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Aug 2023 - Present",
    grade: "CGPA: 7.68",
    icon: GraduationCap,
    color: "from-purple-500 to-blue-500",
  },
  {
    degree: "Higher Secondary (MPC)",
    specialization: "Mathematics, Physics, Chemistry",
    institution: "Vignan Junior College",
    location: "Hyderabad, Telangana",
    duration: "June 2021 - March 2023",
    grade: "Percentage: 98.6%",
    icon: Award,
    color: "from-blue-500 to-green-500",
  },
  {
    degree: "High School",
    specialization: "General Education",
    institution: "Sri Chaitanya School",
    location: "Guntur, Andhra Pradesh",
    duration: "June 2020 - March 2021",
    grade: "Percentage: 100%",
    icon: Trophy,
    color: "from-green-500 to-yellow-500",
  },
]

const certifications = [
  "Responsive Web Design - FREECODECAMP",
  "Microsoft Azure Data Fundamentals - MICROSOFT",
  "Introduction to Hardware and Operating Systems - IBM",
]

const awards = ["Smart India Hackathon Participant", "Boost Athletics Champion"]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                      <edu.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                        <Badge className={`bg-gradient-to-r ${edu.color} text-white border-0`}>{edu.grade}</Badge>
                      </div>
                      <p className="text-purple-600 font-semibold mb-1">{edu.specialization}</p>
                      <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
                      <p className="text-gray-500 text-sm">{edu.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                      <p className="text-gray-700">{cert}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Trophy className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Honors & Awards</h3>
                </div>
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <motion.div
                      key={award}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
                      <p className="text-gray-700">{award}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
