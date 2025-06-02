"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.title": "Software Engineer & Frontend Developer",
    "hero.description":
      "Passionate software engineer and project manager from Tunisia, specializing in modern web technologies. Ready for remote and local opportunities worldwide.",
    "hero.cta.contact": "Get In Touch",
    "hero.cta.resume": "Download Resume",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I'm a 21-year-old software engineer from Medenine, Tunisia, with a Computer Science degree from ISIMED. I specialize in frontend development and project management, with experience in building scalable web applications and leading development teams.",
    "about.education": "Education",
    "about.education.degree": "Bachelor's in Computer Science",
    "about.education.university":
      "Higher Institute of Informatics of Medenine (ISIMED)",
    "about.education.year": "Graduated 2024",
    "about.languages": "Languages",
    "about.languages.arabic": "Arabic (Native)",
    "about.languages.english": "English (Advanced)",
    "about.languages.french": "French (Intermediate)",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.technical": "Technical Skills",
    "skills.soft": "Soft Skills",
    "skills.achievements": "Achievements",
    "skills.achievement1": "100+ LeetCode Problems Solved",
    "skills.achievement2": "2 Hackathon Wins",
    "skills.achievement3": "2nd Place in Problem Solving Competitions",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.all": "All Projects",
    "projects.freelance": "Freelance Projects",
    "projects.personal": "Personal Projects",
    "projects.view": "View Project",
    "projects.github": "View Code",

    // Testimonials Section
    "testimonials.title": "What People Say",

    // Contact Section
    "contact.title": "Let's Work Together",
    "contact.description":
      "I'm always open to discussing new opportunities, whether remote or local. Let's create something amazing together!",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.info.location": "Medenine, Tunisia",
    "contact.info.phone": "+216 94 236 133",
    "contact.info.email": "selmii.faten@gmail.com",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js and Tailwind CSS",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Ingénieure Logiciel & Développeuse Frontend",
    "hero.description":
      "Ingénieure logiciel passionnée et chef de projet de Tunisie, spécialisée dans les technologies web modernes. Prête pour des opportunités à distance et locales dans le monde entier.",
    "hero.cta.contact": "Me Contacter",
    "hero.cta.resume": "Télécharger CV",

    // About Section
    "about.title": "À Propos de Moi",
    "about.description":
      "Je suis une ingénieure logiciel de 21 ans de Médenine, Tunisie, avec un diplôme en informatique de l'ISIMED. Je me spécialise dans le développement frontend et la gestion de projet, avec une expérience dans la construction d'applications web évolutives.",
    "about.education": "Formation",
    "about.education.degree": "Licence en Informatique",
    "about.education.university":
      "Institut Supérieur d'Informatique de Médenine (ISIMED)",
    "about.education.year": "Diplômée 2024",
    "about.languages": "Langues",
    "about.languages.arabic": "Arabe (Natif)",
    "about.languages.english": "Anglais (Avancé)",
    "about.languages.french": "Français (Intermédiaire)",

    // Skills Section
    "skills.title": "Compétences & Expertise",
    "skills.technical": "Compétences Techniques",
    "skills.soft": "Compétences Relationnelles",
    "skills.achievements": "Réalisations",
    "skills.achievement1": "100+ Problèmes LeetCode Résolus",
    "skills.achievement2": "2 Victoires de Hackathon",
    "skills.achievement3":
      "2ème Place en Compétitions de Résolution de Problèmes",

    // Projects Section
    "projects.title": "Projets Phares",
    "projects.all": "Tous Projets",
    "projects.freelance": "Projets Freelance",
    "projects.personal": "Projets Personnels",
    "projects.view": "Voir le Projet",
    "projects.github": "Voir le Code",

    // Testimonials Section
    "testimonials.title": "Ce Que Disent les Gens",

    // Contact Section
    "contact.title": "Travaillons Ensemble",
    "contact.description":
      "Je suis toujours ouverte à discuter de nouvelles opportunités, que ce soit à distance ou localement. Créons quelque chose d'incroyable ensemble !",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Votre Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Votre Message",
    "contact.form.send": "Envoyer le Message",
    "contact.form.sending": "Envoi...",
    "contact.info.location": "Médenine, Tunisie",
    "contact.info.phone": "+216 94 236 133",
    "contact.info.email": "selmii.faten@gmail.com",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.built": "Construit avec Next.js et Tailwind CSS",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.testimonials": "الشهادات",
    "nav.contact": "التواصل",

    // Hero Section
    "hero.greeting": "مرحباً، أنا",
    "hero.title": "مهندسة برمجيات ومطورة واجهات أمامية",
    "hero.description":
      "مهندسة برمجيات شغوفة ومديرة مشاريع من تونس، متخصصة في تقنيات الويب الحديثة. مستعدة للفرص عن بُعد والمحلية في جميع أنحاء العالم.",
    "hero.cta.contact": "تواصل معي",
    "hero.cta.resume": "تحميل السيرة الذاتية",

    // About Section
    "about.title": "نبذة عني",
    "about.description":
      "أنا مهندسة برمجيات عمري 21 سنة من مدنين، تونس، حاصلة على شهادة في علوم الحاسوب من المعهد العالي للإعلامية بمدنين. أتخصص في تطوير الواجهات الأمامية وإدارة المشاريع.",
    "about.education": "التعليم",
    "about.education.degree": "إجازة في علوم الحاسوب",
    "about.education.university": "المعهد العالي للإعلامية بمدنين",
    "about.education.year": "تخرجت 2024",
    "about.languages": "اللغات",
    "about.languages.arabic": "العربية (الأم)",
    "about.languages.english": "الإنجليزية (متقدم)",
    "about.languages.french": "الفرنسية (متوسط)",

    // Skills Section
    "skills.title": "المهارات والخبرات",
    "skills.technical": "المهارات التقنية",
    "skills.soft": "المهارات الشخصية",
    "skills.achievements": "الإنجازات",
    "skills.achievement1": "حل أكثر من 100 مسألة في LeetCode",
    "skills.achievement2": "الفوز في هاكاثونين",
    "skills.achievement3": "المركز الثاني في مسابقات حل المشاكل",

    // Projects Section
    "projects.title": "المشاريع المميزة",
    "projects.all": "جميع المشاريع",
    "projects.freelance": "مشاريع العمل الحر",
    "projects.personal": "المشاريع الشخصية",
    "projects.view": "عرض المشروع",
    "projects.github": "عرض الكود",

    // Testimonials Section
    "testimonials.title": "ما يقوله الناس",

    // Contact Section
    "contact.title": "لنعمل معاً",
    "contact.description":
      "أنا دائماً منفتحة لمناقشة الفرص الجديدة، سواء عن بُعد أو محلياً. لننشئ شيئاً رائعاً معاً!",
    "contact.form.name": "اسمك",
    "contact.form.email": "بريدك الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "رسالتك",
    "contact.form.send": "إرسال الرسالة",
    "contact.form.sending": "جاري الإرسال...",
    "contact.info.location": "مدنين، تونس",
    "contact.info.phone": "+216 94 236 133",
    "contact.info.email": "selmii.faten@gmail.com",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.built": "مبني بـ Next.js و Tailwind CSS",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ["en", "fr", "ar"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
