"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Fake News Predictor - Deep Learning",
    description:
      "Developed a fake news detection system using NLP and Apache Spark for large-scale text data processing. Implemented a full NLP pipeline with data cleaning, tokenization, stemming, and vectorization. Achieved 96% accuracy using Passive Aggressive Classifier.",
    technologies: ["Python", "JavaScript", "CSS", "HTML", "NLP", "Apache Spark", "TF-IDF", "Scikit-learn"],
    githubUrl: "https://github.com/Navyasri28/Fake-News-Predictor-DeepLearning",
    image: "/images/fake-news.png",
    featured: true,
  },
  {
    title: "Zomato Clone Food Delivery Application",
    description:
      "Developed a desktop-based food delivery application inspired by Zomato using Python, Tkinter, and MySQL. Implemented features like user authentication, restaurant browsing, cart management, and order placement with real-time updates.",
    technologies: ["Python", "Tkinter", "MySQL", "mysql.connector"],
    githubUrl: "https://github.com/Navyasri28/Zomato-Clone-with-Python-Tkinter-and-MySQL",
    image: "/images/zomato-project.png",
    featured: true,
  },
  {
    title: "Customer Churn Analysis",
    description:
      "Analyzed customer churn patterns using EDA, univariate and bivariate analysis, and outlier detection. Cleaned and processed customer data to identify key churn factors such as contract type, monthly charges, and customer demographics.",
    technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Jupyter Notebook"],
    githubUrl: "https://github.com/Navyasri28/Python-practices/tree/main/Customer_churn_project2",
    image: "/images/customer-churn.png",
    featured: true,
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "This project detects credit card fraud using machine learning. It includes data cleaning, encoding, scaling, SMOTE for class imbalance, and PCA for dimensionality reduction. XGBoost performed best with 96.78% accuracy and 0.967 AUC.",
    technologies: ["Python", "Pandas", "Matplotlib", "XGBoost", "SMOTE", "PCA"],
    githubUrl: "https://github.com/Navyasri28/Credit-card-fraud-detection",
    image: "/images/fraud-detection.png",
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects that demonstrate my skills in solving real-world
            problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("https://github.com/Navyasri28", "_blank")}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
