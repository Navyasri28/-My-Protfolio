import { jsPDF } from "jspdf"

// Create a new PDF document
const doc = new jsPDF()

// Set font
doc.setFont("helvetica")

// Add some styling colors
const primaryColor = [147, 51, 234] // Purple
const secondaryColor = [59, 130, 246] // Blue
const textColor = [55, 65, 81] // Gray-700

// Header with background
doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.rect(0, 0, 210, 45, "F")

// Name
doc.setTextColor(255, 255, 255)
doc.setFontSize(24)
doc.setFont("helvetica", "bold")
doc.text("Boppudi Navya Sri", 105, 20, { align: "center" })

// Subtitle
doc.setFontSize(14)
doc.setFont("helvetica", "normal")
doc.text("Aspiring Data Scientist", 105, 30, { align: "center" })

// Contact info
doc.setFontSize(10)
doc.text("navyasriboppudi@gmail.com | +91 8341453667 | LPU, Phagwara, Punjab", 105, 38, { align: "center" })

// Reset text color for body
doc.setTextColor(textColor[0], textColor[1], textColor[2])

// Education Section
let yPos = 60
doc.setFontSize(16)
doc.setFont("helvetica", "bold")
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.text("EDUCATION", 20, yPos)

// Add underline
doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.setLineWidth(0.5)
doc.line(20, yPos + 2, 60, yPos + 2)

yPos += 12
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Lovely Professional University", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("Aug 2023 - Present", 150, yPos)

yPos += 6
doc.setFontSize(11)
doc.text("B.Tech in Computer Science and Engineering (AI & Data Engineering)", 20, yPos)
yPos += 5
doc.setFont("helvetica", "bold")
doc.text("CGPA: 7.68", 20, yPos)

yPos += 10
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Vignan Junior College", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("June 2021 - March 2023", 150, yPos)

yPos += 6
doc.setFontSize(11)
doc.text("Higher Secondary (MPC)", 20, yPos)
yPos += 5
doc.setFont("helvetica", "bold")
doc.text("Percentage: 98.6%", 20, yPos)

yPos += 10
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Sri Chaitanya School", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("June 2020 - March 2021", 150, yPos)

yPos += 6
doc.setFontSize(11)
doc.text("High School", 20, yPos)
yPos += 5
doc.setFont("helvetica", "bold")
doc.text("Percentage: 100%", 20, yPos)

// Skills Section
yPos += 20
doc.setFontSize(16)
doc.setFont("helvetica", "bold")
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.text("TECHNICAL SKILLS", 20, yPos)
doc.line(20, yPos + 2, 80, yPos + 2)

yPos += 12
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(11)

// Programming Languages
doc.setFont("helvetica", "bold")
doc.text("Programming Languages:", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("Python, JavaScript, SQL", 75, yPos)

yPos += 8
// Data Science Libraries
doc.setFont("helvetica", "bold")
doc.text("Data Science & ML:", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn", 75, yPos)

yPos += 8
// NLP & Text Processing
doc.setFont("helvetica", "bold")
doc.text("NLP & Text Processing:", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("TF-IDF, CountVectorizer, Apache Spark", 75, yPos)

yPos += 8
// Tools & Platforms
doc.setFont("helvetica", "bold")
doc.text("Tools & Platforms:", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("Jupyter Notebook, Google Colab, Git & GitHub, Power BI", 75, yPos)

yPos += 8
// Web Technologies
doc.setFont("helvetica", "bold")
doc.text("Web Technologies:", 20, yPos)
doc.setFont("helvetica", "normal")
doc.text("HTML, CSS, Tkinter", 75, yPos)

// Projects Section
yPos += 20
doc.setFontSize(16)
doc.setFont("helvetica", "bold")
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.text("PROJECTS", 20, yPos)
doc.line(20, yPos + 2, 50, yPos + 2)

// Check if we need a new page
if (yPos > 220) {
  doc.addPage()
  yPos = 20
}

yPos += 12
doc.setTextColor(textColor[0], textColor[1], textColor[2])

// Project 1
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Fake News Predictor using Deep Learning", 20, yPos)
yPos += 6
doc.setFontSize(10)
doc.setFont("helvetica", "italic")
doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
doc.text("Technologies: Python, NLP, Apache Spark, TF-IDF, Scikit-learn", 20, yPos)
yPos += 6
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFont("helvetica", "normal")
const project1Lines = [
  "• Developed an NLP-based fake news detection system with 96% accuracy using Passive Aggressive Classifier",
  "• Implemented complete text processing pipeline: cleaning, tokenization, stemming, and vectorization",
  "• Designed scalable solution using Apache Spark for efficient big data processing",
  "• Evaluated multiple ML models including Logistic Regression, Naive Bayes, and Decision Tree",
]
project1Lines.forEach((line) => {
  doc.text(line, 20, yPos)
  yPos += 5
})

yPos += 5
// Project 2
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Zomato Clone Food Delivery Application", 20, yPos)
yPos += 6
doc.setFontSize(10)
doc.setFont("helvetica", "italic")
doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
doc.text("Technologies: Python, Tkinter, MySQL, GUI Development", 20, yPos)
yPos += 6
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFont("helvetica", "normal")
const project2Lines = [
  "• Built desktop food delivery application with user authentication and order management",
  "• Designed intuitive GUI using Tkinter for seamless user experience",
  "• Implemented MySQL database for structured data management and real-time updates",
  "• Features include restaurant browsing, cart management, and order tracking",
]
project2Lines.forEach((line) => {
  doc.text(line, 20, yPos)
  yPos += 5
})

yPos += 5
// Project 3
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Customer Churn Analysis", 20, yPos)
yPos += 6
doc.setFontSize(10)
doc.setFont("helvetica", "italic")
doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
doc.text("Technologies: Python, Pandas, NumPy, Seaborn, Matplotlib, EDA", 20, yPos)
yPos += 6
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFont("helvetica", "normal")
const project3Lines = [
  "• Performed comprehensive EDA to identify key customer churn factors and patterns",
  "• Analyzed contract types, monthly charges, and demographics impact on customer retention",
  "• Created actionable insights showing tenure and contract length strongly impact loyalty",
  "• Enhanced data storytelling skills through advanced visualization techniques",
]
project3Lines.forEach((line) => {
  doc.text(line, 20, yPos)
  yPos += 5
})

yPos += 5
// Project 4
doc.setFontSize(12)
doc.setFont("helvetica", "bold")
doc.text("Credit Card Fraud Detection", 20, yPos)
yPos += 6
doc.setFontSize(10)
doc.setFont("helvetica", "italic")
doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
doc.text("Technologies: Python, XGBoost, SMOTE, PCA, Machine Learning", 20, yPos)
yPos += 6
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFont("helvetica", "normal")
const project4Lines = [
  "• Developed ML model achieving 96.78% accuracy and 0.967 AUC for fraud detection",
  "• Applied SMOTE technique to handle class imbalance in financial transaction data",
  "• Implemented PCA for dimensionality reduction and feature optimization",
  "• XGBoost classifier demonstrated superior performance among tested algorithms",
]
project4Lines.forEach((line) => {
  doc.text(line, 20, yPos)
  yPos += 5
})

// Check if we need a new page for certifications
if (yPos > 240) {
  doc.addPage()
  yPos = 20
}

// Certifications & Awards Section
yPos += 15
doc.setFontSize(16)
doc.setFont("helvetica", "bold")
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
doc.text("CERTIFICATIONS & ACHIEVEMENTS", 20, yPos)
doc.line(20, yPos + 2, 110, yPos + 2)

yPos += 12
doc.setTextColor(textColor[0], textColor[1], textColor[2])
doc.setFontSize(11)
doc.setFont("helvetica", "normal")

const certifications = [
  "• Responsive Web Design - FreeCodeCamp",
  "• Microsoft Azure Data Fundamentals - Microsoft",
  "• Introduction to Hardware and Operating Systems - IBM",
  "• Smart India Hackathon Participant",
  "• Boost Athletics Champion",
]

certifications.forEach((cert) => {
  doc.text(cert, 20, yPos)
  yPos += 6
})

// Footer
yPos += 15
doc.setFontSize(10)
doc.setTextColor(100, 100, 100)
doc.text("GitHub: github.com/Navyasri28", 20, yPos)
doc.text("LinkedIn: Connect with me", 120, yPos)

// Save the PDF
doc.save("Boppudi_Navya_Sri_Resume.pdf")

console.log("Professional resume PDF generated successfully!")
