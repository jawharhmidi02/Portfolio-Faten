"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: Array<string>;
  links?: Array<{ label: string; url: string }>;
  github?: string;
  image: string;
}

export function ProjectsSection() {
  const { t } = useLanguage();

  const freelanceProjects: Array<Project> = [
    {
      title: "Reservy",
      description:
        "B2B reservation system for hotel/agency booking with scraping, dynamic queries, secure data, and beautiful scalable design.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      links: [
        { label: "Hotel Dashboard", url: "https://reservy-hotel.vercel.app/" },
        {
          label: "Agency Dashboard",
          url: "https://reservy-agency.vercel.app/",
        },
        { label: "Admin Dashboard", url: "https://reservy-admin.vercel.app/" },
      ],
      image: "/reservy-hotel.png",
    },
    {
      title: "Arte in Casa Tua",
      description:
        "Italian portfolio website for a company specializing in building houses and decoration.",
      technologies: ["React", "CSS", "JavaScript"],
      links: [{ label: "Live Site", url: "https://www.arteincasatua.com/" }],
      image: "/arte-casa.png",
    },
    {
      title: "BurgerCasa",
      description:
        "Italian restaurant website with menu display, online ordering, and delivery/pickup options.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
      links: [
        { label: "Live Site", url: "https://burger-casa-front.vercel.app/" },
      ],
      github: "https://github.com/jawharhmidi02/burger-casa-front",
      image: "/burger-casa.png",
    },
  ];

  const personalProjects: Array<Project> = [
    {
      title: "Recipe Vault",
      description:
        "Community platform for posting healthy food recipes with role-based access (visitors, nutrition specialists, admin).",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/jawharhmidi02/RecipeVault-Front",
      image: "/recipe-vault.png",
    },
    {
      title: "Give Us Hope",
      description:
        "SDG-focused website helping orphan shelters connect with potential adoptive parents.",
      technologies: ["Node.js", "Bootstrap", "HTML", "JavaScript"],
      github: "https://github.com/jawharhmidi02/give-us-hope",
      image: "/give-hope.png",
    },
    {
      title: "Auto Fix Hub",
      description:
        "Final year project connecting car owners with mechanics for issue diagnosis and solutions.",
      technologies: ["JavaScript", "HTML", "CSS", "Node.js", "MongoDB"],
      github: "https://github.com/jawharhmidi02/Auto-Fix-Hub",
      image: "/auto-fix.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />

            {/* Action Buttons Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.links?.map((link, linkIndex) => (
                <Button
                  key={linkIndex}
                  size="sm"
                  className="bg-primary/90 hover:bg-primary  backdrop-blur-sm "
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 text-foreground"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    {link.label && link.label.split(" ").length > 0
                      ? link.label.split(" ")[0]
                      : link.label}
                  </a>
                </Button>
              ))}
              {project.github && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-secondary/90 hover:bg-secondary backdrop-blur-sm "
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 text-foreground"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col">
            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs px-2 py-1 bg-secondary/60 hover:bg-secondary/80 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          {/* Footer Actions */}
          <CardFooter className="p-0 pt-6">
            <div className="flex flex-wrap gap-2 w-full">
              {project.links?.map((link, linkIndex) => (
                <Button
                  key={linkIndex}
                  variant="outline"
                  size="sm"
                  className="flex-1 min-w-0"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate"
                  >
                    <ExternalLink className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </a>
                </Button>
              ))}
              {project.github && !project.links && (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );

  const ProjectGrid = ({ projects }: { projects: Project[] }) => (
    <motion.div
      key={projects.length}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t("projects.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing my work across various technologies and domains
            </p>
          </motion.div>

          {/* Project Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-12 p-1 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {t("projects.all")}
                </TabsTrigger>
                <TabsTrigger
                  value="freelance"
                  className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {t("projects.freelance")}
                </TabsTrigger>
                <TabsTrigger
                  value="personal"
                  className="text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {t("projects.personal")}
                </TabsTrigger>
              </TabsList>

              {/* All Projects */}
              <TabsContent value="all" className="mt-0">
                <ProjectGrid
                  projects={[...freelanceProjects, ...personalProjects]}
                />
              </TabsContent>

              {/* Freelance Projects */}
              <TabsContent value="freelance" className="mt-0">
                <ProjectGrid projects={freelanceProjects} />
              </TabsContent>

              {/* Personal Projects */}
              <TabsContent value="personal" className="mt-0">
                <ProjectGrid projects={personalProjects} />
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
