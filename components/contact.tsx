"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "navyasriboppudi@gmail.com",
    href: "mailto:navyasriboppudi@gmail.com",
    color: "text-red-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8341453667",
    href: "tel:+918341453667",
    color: "text-green-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Navyasri28",
    href: "https://github.com/Navyasri28",
    color: "text-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    color: "text-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "LPU, Phagwara, Punjab",
    href: "#",
    color: "text-purple-600",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start a conversation? I'd love to hear from you. Whether it's about a project, collaboration, or
            just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center`}
                  >
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{contact.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">{contact.value}</p>
                  {contact.href !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-200 text-purple-600 hover:bg-purple-50"
                      onClick={() => window.open(contact.href, "_blank")}
                    >
                      Connect
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
              <p className="text-purple-100 mb-6 max-w-md mx-auto">
                Let's discuss how we can work together to bring your data science ideas to life.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  (window.location.href =
                    "mailto:navyasriboppudi@gmail.com?subject=Project Discussion&body=Hi Navya Sri, I would like to discuss a project with you.")
                }
              >
                <Mail className="mr-2" size={20} />
                Start Conversation
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">© 2024 Boppudi Navya Sri. Built with passion for data science and innovation.</p>
        </motion.div>
      </div>
    </section>
  )
}
