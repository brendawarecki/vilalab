import { motion } from "framer-motion";
import heroImg from "@/assets/estructura.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <img
        src={heroImg}
        alt={t("hero.imgAlt")}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-hero-accent font-body text-sm tracking-[0.25em] uppercase mb-4"
        >
          IBR – CONICET / UNR · Rosario, Argentina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-bold text-hero-foreground leading-tight mb-6"
        >
          Vila <span className="text-hero-accent">Lab</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-lg md:text-xl text-hero-foreground/80 max-w-2xl mx-auto mb-4"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-body text-base text-hero-foreground/60 max-w-xl mx-auto mb-10"
        >
          {t("hero.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#investigacion"
            className="px-8 py-3 rounded-lg font-body font-medium text-sm bg-hero-accent text-hero transition-all hover:brightness-110"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 rounded-lg font-body font-medium text-sm border border-hero-foreground/30 text-hero-foreground hover:border-hero-accent hover:text-hero-accent transition-all"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
