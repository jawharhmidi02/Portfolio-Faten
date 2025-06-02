"use client"

import { motion } from "framer-motion"
import { Code, Users, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function SkillsSection() {
  const { t } = useLanguage()

  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "C/C++",
    "Tailwind CSS",
    "Bootstrap",
    "Canvas HTML",
  ]

  const softSkills = [
    "Project Management",
    "Leadership",
    "Team Management",
    "Communication",
    "Time Management",
    "Organization",
    "Flexibility",
    "Fast Learning",
  ]

  const achievements = [t("skills.achievement1"), t("skills.achievement2"), t("skills.achievement3")]

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
    <section id="skills" className="py-20">
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
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-rainbow"
          >
            {t("skills.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 gradient-blue rounded-lg">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gradient-blue">{t("skills.technical")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-sm hover-scale transition-all duration-300 ${
                          index % 4 === 0
                            ? "bg-blue/10 text-blue border-blue/20"
                            : index % 4 === 1
                              ? "bg-purple/10 text-purple border-purple/20"
                              : index % 4 === 2
                                ? "bg-green/10 text-green border-green/20"
                                : "bg-orange/10 text-orange border-orange/20"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 gradient-purple rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gradient-purple">{t("skills.soft")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-sm hover-scale transition-all duration-300 ${
                          index % 3 === 0
                            ? "border-purple/30 text-purple hover:bg-purple/10"
                            : index % 3 === 1
                              ? "border-pink/30 text-pink hover:bg-pink/10"
                              : "border-indigo/30 text-indigo hover:bg-indigo/10"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full border-gradient hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 gradient-orange rounded-lg">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gradient-orange">{t("skills.achievements")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            index === 0 ? "bg-blue" : index === 1 ? "bg-purple" : "bg-green"
                          } animate-pulse`}
                        ></div>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
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
