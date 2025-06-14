"use client"

import { motion } from "framer-motion"
import { Download, Eye, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingElements from "@/components/floating-elements"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = async () => {
    try {
      // Import jsPDF dynamically
      const { jsPDF } = await import("jspdf")

      // Create a new PDF document
      const doc = new jsPDF()

      // Define colors
      const darkBlue = [25, 47, 89]
      const lightBlue = [59, 130, 246]
      const purple = [147, 51, 234]
      const darkGray = [31, 41, 55]
      const lightGray = [245, 245, 245]

      // Page setup
      const pageWidth = 210
      const pageHeight = 297
      const leftMargin = 15
      const rightMargin = 195
      const columnWidth = 85
      const rightColumnStart = 105

      // HEADER SECTION
      doc.setFillColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.rect(0, 0, pageWidth, 50, "F")

      // Name
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(24)
      doc.setFont("helvetica", "bold")
      doc.text("BOPPUDI NAVYA SRI", pageWidth / 2, 20, { align: "center" })

      // Title
      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text("Aspiring Data Scientist & AI Engineer", pageWidth / 2, 30, { align: "center" })

      // Contact Information Bar
      doc.setFillColor(lightBlue[0], lightBlue[1], lightBlue[2])
      doc.rect(0, 35, pageWidth, 15, "F")

      doc.setFontSize(9)
      doc.setTextColor(255, 255, 255)
      doc.text("Email: navyasriboppudi@gmail.com", 20, 44)
      doc.text("Phone: +91 8341453667", 80, 44)
      doc.text("Location: LPU, Phagwara, Punjab", 140, 44)

      // Reset color
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])

      // PROFESSIONAL SUMMARY
      let yPos = 65
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("PROFESSIONAL SUMMARY", leftMargin, yPos)

      doc.setDrawColor(purple[0], purple[1], purple[2])
      doc.setLineWidth(0.5)
      doc.line(leftMargin, yPos + 2, rightMargin, yPos + 2)

      yPos += 8
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")

      const summary =
        "Passionate Computer Science student specializing in AI and Data Engineering with strong analytical skills and hands-on experience in machine learning, data analysis, and software development. Proven track record of developing innovative solutions including fake news detection systems achieving 96% accuracy and comprehensive data-driven applications."

      const summaryLines = doc.splitTextToSize(summary, rightMargin - leftMargin)
      summaryLines.forEach((line: string) => {
        doc.text(line, leftMargin, yPos)
        yPos += 4
      })

      yPos += 5

      // TWO COLUMN LAYOUT STARTS HERE

      // LEFT COLUMN - EDUCATION
      let leftYPos = yPos
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("EDUCATION", leftMargin, leftYPos)

      doc.setDrawColor(purple[0], purple[1], purple[2])
      doc.line(leftMargin, leftYPos + 2, leftMargin + 35, leftYPos + 2)

      leftYPos += 10

      // Education Entry 1
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFontSize(10)
      doc.setFont("helvetica", "bold")
      doc.text("Bachelor of Technology", leftMargin, leftYPos)
      leftYPos += 4
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.text("Computer Science & Engineering", leftMargin, leftYPos)
      leftYPos += 3
      doc.text("(AI & Data Engineering)", leftMargin, leftYPos)
      leftYPos += 3
      doc.setFont("helvetica", "italic")
      doc.text("Lovely Professional University", leftMargin, leftYPos)
      leftYPos += 3
      doc.setFont("helvetica", "bold")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("CGPA: 7.68", leftMargin, leftYPos)
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFont("helvetica", "normal")
      doc.text("2023 - Present", leftMargin + 25, leftYPos)

      leftYPos += 8

      // Education Entry 2
      doc.setFontSize(10)
      doc.setFont("helvetica", "bold")
      doc.text("Higher Secondary (MPC)", leftMargin, leftYPos)
      leftYPos += 4
      doc.setFontSize(9)
      doc.setFont("helvetica", "italic")
      doc.text("Vignan Junior College", leftMargin, leftYPos)
      leftYPos += 3
      doc.setFont("helvetica", "bold")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("98.6%", leftMargin, leftYPos)
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFont("helvetica", "normal")
      doc.text("2021 - 2023", leftMargin + 20, leftYPos)

      leftYPos += 8

      // Education Entry 3
      doc.setFontSize(10)
      doc.setFont("helvetica", "bold")
      doc.text("High School", leftMargin, leftYPos)
      leftYPos += 4
      doc.setFontSize(9)
      doc.setFont("helvetica", "italic")
      doc.text("Sri Chaitanya School", leftMargin, leftYPos)
      leftYPos += 3
      doc.setFont("helvetica", "bold")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("100%", leftMargin, leftYPos)
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFont("helvetica", "normal")
      doc.text("2020 - 2021", leftMargin + 20, leftYPos)

      // RIGHT COLUMN - TECHNICAL SKILLS
      let rightYPos = yPos
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("TECHNICAL SKILLS", rightColumnStart, rightYPos)

      doc.setDrawColor(purple[0], purple[1], purple[2])
      doc.line(rightColumnStart, rightYPos + 2, rightColumnStart + 50, rightYPos + 2)

      rightYPos += 10

      // Skills organized properly
      const skillCategories = [
        { category: "Programming Languages", skills: "Python, JavaScript, SQL" },
        { category: "Data Science & ML", skills: "Pandas, NumPy, Scikit-learn" },
        { category: "Data Visualization", skills: "Matplotlib, Seaborn" },
        { category: "NLP & Text Processing", skills: "TF-IDF, CountVectorizer, Apache Spark" },
        { category: "Development Tools", skills: "Jupyter Notebook, Google Colab" },
        { category: "Version Control", skills: "Git, GitHub" },
        { category: "Business Intelligence", skills: "Power BI" },
        { category: "Web Technologies", skills: "HTML, CSS, Tkinter" },
        { category: "Database", skills: "MySQL, Data Analysis" },
      ]

      skillCategories.forEach((skill) => {
        doc.setFontSize(8)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(purple[0], purple[1], purple[2])
        doc.text(skill.category + ":", rightColumnStart, rightYPos)
        rightYPos += 3
        doc.setFontSize(8)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
        const skillLines = doc.splitTextToSize(skill.skills, columnWidth - 5)
        skillLines.forEach((line: string) => {
          doc.text(line, rightColumnStart + 2, rightYPos)
          rightYPos += 3
        })
        rightYPos += 2
      })

      // CERTIFICATIONS (Right Column)
      rightYPos += 5
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("CERTIFICATIONS", rightColumnStart, rightYPos)

      doc.setDrawColor(purple[0], purple[1], purple[2])
      doc.line(rightColumnStart, rightYPos + 2, rightColumnStart + 45, rightYPos + 2)

      rightYPos += 8

      const certifications = [
        "Responsive Web Design",
        "FreeCodeCamp",
        "",
        "Microsoft Azure Data Fundamentals",
        "Microsoft",
        "",
        "Hardware & Operating Systems",
        "IBM",
      ]

      for (let i = 0; i < certifications.length; i += 3) {
        doc.setFontSize(9)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
        doc.text("• " + certifications[i], rightColumnStart, rightYPos)
        rightYPos += 3
        if (certifications[i + 1]) {
          doc.setFontSize(8)
          doc.setFont("helvetica", "italic")
          doc.setTextColor(purple[0], purple[1], purple[2])
          doc.text("  " + certifications[i + 1], rightColumnStart, rightYPos)
          rightYPos += 5
        }
      }

      // ACHIEVEMENTS (Right Column)
      rightYPos += 5
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("ACHIEVEMENTS", rightColumnStart, rightYPos)

      doc.setDrawColor(purple[0], purple[1], purple[2])
      doc.line(rightColumnStart, rightYPos + 2, rightColumnStart + 40, rightYPos + 2)

      rightYPos += 8

      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.text("• Smart India Hackathon", rightColumnStart, rightYPos)
      rightYPos += 4
      doc.text("  Participant", rightColumnStart, rightYPos)
      rightYPos += 6
      doc.text("• Boost Athletics Champion", rightColumnStart, rightYPos)

      // NEW PAGE FOR PROJECTS
      doc.addPage()

      // Projects Header
      doc.setFillColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.rect(0, 0, pageWidth, 25, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.text("KEY PROJECTS", pageWidth / 2, 16, { align: "center" })

      yPos = 35
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])

      // Project 1
      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("1. Fake News Predictor using Deep Learning", leftMargin, yPos)

      yPos += 5
      doc.setFontSize(8)
      doc.setFont("helvetica", "italic")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("Technologies: Python, NLP, Apache Spark, TF-IDF, Scikit-learn, JavaScript, CSS, HTML", leftMargin, yPos)

      yPos += 6
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFontSize(8)
      doc.setFont("helvetica", "normal")

      const project1Points = [
        "• Developed advanced NLP-based fake news detection system achieving 96% accuracy using Passive Aggressive Classifier",
        "• Implemented comprehensive text processing pipeline including data cleaning, tokenization, stemming, and vectorization",
        "• Designed scalable architecture using Apache Spark for efficient processing of large-scale text datasets",
        "• Evaluated multiple machine learning models including Logistic Regression, Naive Bayes, and Decision Tree algorithms",
        "• Created detailed performance visualizations and metrics for comprehensive model evaluation and validation",
      ]

      project1Points.forEach((point) => {
        const lines = doc.splitTextToSize(point, rightMargin - leftMargin)
        lines.forEach((line: string) => {
          doc.text(line, leftMargin, yPos)
          yPos += 3.5
        })
      })

      yPos += 4

      // Project 2
      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("2. Zomato Clone Food Delivery Application", leftMargin, yPos)

      yPos += 5
      doc.setFontSize(8)
      doc.setFont("helvetica", "italic")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("Technologies: Python, Tkinter, MySQL, mysql.connector", leftMargin, yPos)

      yPos += 6
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFontSize(8)
      doc.setFont("helvetica", "normal")

      const project2Points = [
        "• Built comprehensive desktop food delivery application with complete user management and authentication system",
        "• Designed intuitive graphical user interface using Tkinter ensuring seamless user experience and navigation",
        "• Implemented robust MySQL database architecture for real-time data management and transaction processing",
        "• Developed core features including restaurant browsing, menu display, cart management, and order tracking",
        "• Integrated secure order processing system with real-time status updates and user notification features",
      ]

      project2Points.forEach((point) => {
        const lines = doc.splitTextToSize(point, rightMargin - leftMargin)
        lines.forEach((line: string) => {
          doc.text(line, leftMargin, yPos)
          yPos += 3.5
        })
      })

      yPos += 4

      // Project 3
      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("3. Customer Churn Analysis & Prediction", leftMargin, yPos)

      yPos += 5
      doc.setFontSize(8)
      doc.setFont("helvetica", "italic")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("Technologies: Python, Pandas, NumPy, Seaborn, Matplotlib, Jupyter Notebook", leftMargin, yPos)

      yPos += 6
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFontSize(8)
      doc.setFont("helvetica", "normal")

      const project3Points = [
        "• Conducted comprehensive exploratory data analysis to identify critical customer churn factors and behavioral patterns",
        "• Analyzed impact of contract types, pricing strategies, service tenure, and customer demographics on retention rates",
        "• Developed predictive models demonstrating strong statistical correlation between customer tenure and loyalty metrics",
        "• Created actionable business insights and recommendations for improving customer retention strategies",
        "• Enhanced data storytelling capabilities through advanced visualization techniques and statistical analysis",
      ]

      project3Points.forEach((point) => {
        const lines = doc.splitTextToSize(point, rightMargin - leftMargin)
        lines.forEach((line: string) => {
          doc.text(line, leftMargin, yPos)
          yPos += 3.5
        })
      })

      yPos += 4

      // Project 4
      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("4. Credit Card Fraud Detection System", leftMargin, yPos)

      yPos += 5
      doc.setFontSize(8)
      doc.setFont("helvetica", "italic")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.text("Technologies: Python, XGBoost, SMOTE, PCA, Machine Learning", leftMargin, yPos)

      yPos += 6
      doc.setTextColor(darkGray[0], darkGray[1], darkGray[2])
      doc.setFontSize(8)
      doc.setFont("helvetica", "normal")

      const project4Points = [
        "• Developed high-performance machine learning model achieving 96.78% accuracy and 0.967 AUC score for fraud detection",
        "• Applied SMOTE (Synthetic Minority Oversampling Technique) to effectively handle class imbalance in financial datasets",
        "• Implemented Principal Component Analysis (PCA) for optimal dimensionality reduction and feature engineering",
        "• Demonstrated XGBoost classifier superiority through comprehensive algorithm comparison and performance evaluation",
        "• Created robust fraud detection system suitable for real-world financial applications with high precision and recall",
      ]

      project4Points.forEach((point) => {
        const lines = doc.splitTextToSize(point, rightMargin - leftMargin)
        lines.forEach((line: string) => {
          doc.text(line, leftMargin, yPos)
          yPos += 3.5
        })
      })

      // Footer
      yPos += 10
      doc.setFillColor(lightGray[0], lightGray[1], lightGray[2])
      doc.rect(0, yPos, pageWidth, 15, "F")

      yPos += 6
      doc.setFontSize(10)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(darkBlue[0], darkBlue[1], darkBlue[2])
      doc.text("CONNECT WITH ME", pageWidth / 2, yPos, { align: "center" })

      yPos += 6
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(purple[0], purple[1], purple[2])
      doc.textWithLink("GitHub: github.com/Navyasri28", 50, yPos, { url: "https://github.com/Navyasri28" })
      doc.text("LinkedIn: Connect with me", 130, yPos)

      // Save the PDF
      doc.save("Boppudi_Navya_Sri_Professional_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("There was an error generating the PDF. Please try again.")
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
            style={{ fontFamily: "Orbitron, monospace" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
              Boppudi Navya Sri
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl text-gray-700 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Aspiring Data Scientist
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about transforming data into insights and building intelligent solutions that make a difference
            in the world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("#projects")}
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
