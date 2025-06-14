"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Globe } from "lucide-react"

const skillCategories = [
  {
    id: "all",
    name: "All Skills",
    icon: Code,
    color: "text-purple-600",
  },
  {
    id: "programming",
    name: "Programming",
    icon: Code,
    color: "text-blue-600",
  },
  {
    id: "data-science",
    name: "Data Science",
    icon: Brain,
    color: "text-green-600",
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    icon: Database,
    color: "text-orange-600",
  },
  {
    id: "web",
    name: "Web Technologies",
    icon: Globe,
    color: "text-red-600",
  },
]

const skills = [
  {
    name: "Python",
    category: "programming",
    color: "bg-blue-500",
    description: "Versatile programming language perfect for data science, machine learning, and automation tasks.",
  },
  {
    name: "JavaScript",
    category: "programming",
    color: "bg-yellow-500",
    description: "Dynamic language for building interactive web applications and modern user interfaces.",
  },
  {
    name: "SQL",
    category: "programming",
    color: "bg-green-500",
    description: "Essential database query language for data extraction, manipulation, and analysis.",
  },
  {
    name: "Pandas",
    category: "data-science",
    color: "bg-purple-500",
    description: "Powerful Python library for data manipulation, cleaning, and exploratory data analysis.",
  },
  {
    name: "NumPy",
    category: "data-science",
    color: "bg-blue-600",
    description: "Fundamental package for scientific computing with support for large multi-dimensional arrays.",
  },
  {
    name: "Scikit-learn",
    category: "data-science",
    color: "bg-orange-500",
    description:
      "Comprehensive machine learning library with algorithms for classification, regression, and clustering.",
  },
  {
    name: "Matplotlib",
    category: "data-science",
    color: "bg-red-500",
    description: "Comprehensive plotting library for creating static, animated, and interactive visualizations.",
  },
  {
    name: "Seaborn",
    category: "data-science",
    color: "bg-teal-500",
    description: "Statistical data visualization library built on matplotlib for beautiful and informative plots.",
  },
  {
    name: "TF-IDF",
    category: "data-science",
    color: "bg-indigo-500",
    description: "Text analysis technique for evaluating word importance in documents for NLP applications.",
  },
  {
    name: "Jupyter Notebook",
    category: "tools",
    color: "bg-orange-600",
    description: "Interactive development environment perfect for data science experimentation and prototyping.",
  },
  {
    name: "Google Colab",
    category: "tools",
    color: "bg-blue-400",
    description: "Cloud-based platform for machine learning development with free GPU access.",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    color: "bg-gray-600",
    description: "Version control system and collaboration platform for managing and sharing code projects.",
  },
  {
    name: "Power BI",
    category: "tools",
    color: "bg-yellow-600",
    description: "Business analytics tool for creating interactive dashboards and data visualizations.",
  },
  {
    name: "HTML",
    category: "web",
    color: "bg-orange-500",
    description: "Markup language for structuring and presenting content on the web.",
  },
  {
    name: "CSS",
    category: "web",
    color: "bg-blue-500",
    description: "Styling language for designing beautiful and responsive web interfaces.",
  },
  {
    name: "Tkinter",
    category: "web",
    color: "bg-green-600",
    description: "Python's standard GUI toolkit for building desktop applications with graphical interfaces.",
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "border-2 border-purple-200 text-gray-700 hover:border-purple-400"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 rounded-full ${skill.color} mr-3`}></div>
                    <h3 className="font-semibold text-gray-800 text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                  <div className="mt-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      {skill.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
