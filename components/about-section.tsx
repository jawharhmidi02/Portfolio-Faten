"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Languages, Award, Calendar, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Award, label: "Projects Completed", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "8+" },
    { icon: Calendar, label: "Years Experience", value: "3+" },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gradient mb-6">{t("about.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences through innovative technology solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description")}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a strong foundation in computer science and hands-on experience in modern web technologies, I
                  bring both technical expertise and creative problem-solving to every project. My journey spans from
                  winning hackathons to delivering production-ready applications for international clients.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  {t("about.languages")}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                    {t("about.languages.arabic")}
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                    {t("about.languages.english")}
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                    {t("about.languages.french")}
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="hover-lift border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 gradient-primary rounded-xl">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{t("about.education")}</h3>
                      <p className="font-medium text-foreground mb-1">{t("about.education.degree")}</p>
                      <p className="text-muted-foreground mb-2">{t("about.education.university")}</p>
                      <Badge className="gradient-secondary text-white border-0">{t("about.education.year")}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 gradient-accent rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Location & Availability</h3>
                      <p className="text-muted-foreground mb-2">Based in Medenine, Tunisia</p>
                      <p className="text-muted-foreground mb-3">Open to remote opportunities worldwide</p>
                      <Badge variant="outline" className="border-green-500 text-green-600 dark:text-green-400">
                        Available for Work
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 gradient-primary rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Recent Achievement</h3>
                      <p className="text-muted-foreground mb-2">4-month internship at Devaxon</p>
                      <p className="text-sm text-muted-foreground">February 2025 - May 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
