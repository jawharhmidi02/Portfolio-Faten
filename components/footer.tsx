"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Heart, ExternalLink, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fatenselmi",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/selmifaten",
      icon: Github,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/faten.selmi.9279",
      icon: Facebook,
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "selmii.faten@gmail.com",
      href: "mailto:selmii.faten@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 94 236 133",
      href: "tel:+21694236133",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Medenine, Tunisia",
      href: "#",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/30 border-t border-border/50 relative">
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full h-12 w-12 gradient-primary text-white shadow-lg hover:opacity-90"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-4">Faten Selmi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Software Engineer & Frontend Developer passionate about creating exceptional digital experiences. Always
                ready for new challenges and opportunities.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <item.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-secondary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-foreground">Connect With Me</h4>

            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover-lift border-border/50 hover:border-secondary/50"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="space-y-3">
              <Button
                onClick={scrollToTop}
                variant="outline"
                className="w-full hover-lift border-border/50 hover:border-secondary/50"
              >
                Back to Top
              </Button>

              <Button className="w-full gradient-primary text-white hover:opacity-90" asChild>
                <a href="#contact">
                  Start a Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Faten Selmi. {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
