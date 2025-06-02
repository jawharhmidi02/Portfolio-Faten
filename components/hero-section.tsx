"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function HeroSection() {
  const { t } = useLanguage();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const titles = ["Software Engineer", "Frontend Developer", "Project Manager"];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 80 : 120;
    const pauseTime = isDeleting ? 1000 : 3000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume-faten-selmi.pdf";
    link.download = "Faten-Selmi-Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-16 overflow-hidden bg-gradient-to-br from-background via-blue/5 to-purple/5"
    >
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle" style={{ left: "10%", top: "20%" }}></div>
        <div className="particle" style={{ left: "80%", top: "30%" }}></div>
        <div className="particle" style={{ left: "60%", top: "70%" }}></div>
        <div className="particle" style={{ left: "20%", top: "80%" }}></div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--blue)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple animate-pulse" />
                <p className="text-lg text-muted-foreground font-medium">
                  {t("hero.greeting")}
                </p>
                <Sparkles className="h-6 w-6 text-blue animate-pulse" />
              </div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gradient-rainbow leading-tight">
                Faten Selmi
              </h1>
            </motion.div>

            {/* Typewriter Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-16 lg:h-20 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-2xl lg:text-4xl font-semibold text-gradient-blue">
                {displayText}
                <span className="border-r-2 border-blue animate-blink ml-1"></span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2 glass-effect-blue px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-blue" />
                <span>Medenine, Tunisia</span>
              </div>
              <div className="flex items-center gap-2 glass-effect-purple px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-purple" />
                <span>Available for Work</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gradient-blue text-white hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg font-medium hover-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("hero.cta.contact")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={downloadResume}
                className="px-8 py-6 text-lg font-medium border-2 border-purple hover:border-purple hover:bg-purple/10 hover-lift transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.cta.resume")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main photo container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue/20 via-purple/20 to-pink/20 border-2 border-gradient flex items-center justify-center relative overflow-hidden hover-glow">
                  {/* Placeholder for photo */}
                  <div className="text-8xl font-bold text-gradient-rainbow font-serif">
                    FS
                  </div>

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 gradient-purple rounded-2xl opacity-30 rotate-12 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-orange rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 gradient-green rounded-xl opacity-25 rotate-45 animate-bounce"></div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 glass-effect-purple px-6 py-3 rounded-2xl border border-purple/30 hover-scale"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-purple">
                    21
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Years Old
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 text-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
