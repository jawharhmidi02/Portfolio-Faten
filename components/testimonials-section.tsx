"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Ahmed Ben Ali",
      role: "Project Manager at Devaxon",
      content:
        "Faten demonstrated exceptional technical skills and leadership during her internship. Her ability to manage complex projects while maintaining high code quality is remarkable.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      role: "CEO at Arte in Casa Tua",
      content:
        "Working with Faten was a pleasure. She delivered our company website on time with beautiful design and excellent functionality. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Mahmoud Khelifi",
      role: "Professor at ISIMED",
      content:
        "Faten was one of our most dedicated students. Her problem-solving skills and passion for technology make her an excellent software engineer.",
      rating: 5,
    },
    {
      name: "Marco Rossi",
      role: "Restaurant Owner",
      content:
        "The BurgerCasa website Faten created for us increased our online orders significantly. The ordering system is intuitive and the design is modern.",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          >
            {t("testimonials.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
