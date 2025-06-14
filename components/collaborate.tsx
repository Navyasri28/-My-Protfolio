"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Handshake } from "lucide-react"

export default function Collaborate() {
  return (
    <section id="collaborate" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Handshake className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                >
                  Interested in Collaborating?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  I'm always excited to work on innovative data science projects, contribute to open-source initiatives,
                  or discuss opportunities in machine learning and AI. Let's create something amazing together!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      (window.location.href =
                        "mailto:navyasriboppudi@gmail.com?subject=Collaboration Opportunity&body=Hi Navya Sri, I would like to discuss a collaboration opportunity with you.")
                    }
                  >
                    <Mail className="mr-2" size={20} />
                    Email Me
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector("#contact")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Let's Chat
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 text-center"
                >
                  <p className="text-gray-600 text-sm">
                    <Mail className="inline w-4 h-4 mr-1" />
                    navyasriboppudi@gmail.com
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
