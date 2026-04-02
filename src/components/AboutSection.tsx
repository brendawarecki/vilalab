import { motion } from "framer-motion";
import { Award, BookOpen, Microscope } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Award, titleKey: "about.h1.title", descKey: "about.h1.desc" },
    { icon: Microscope, titleKey: "about.h2.title", descKey: "about.h2.desc" },
    { icon: BookOpen, titleKey: "about.h3.title", descKey: "about.h3.desc" },
  ];

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body tracking-[0.2em] uppercase text-accent mb-2">{t("about.tag")}</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">Dr. Alejandro Vila</h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>{t("about.bio1")}</p>
            <p>
              {t("about.bio2es")} <strong className="text-foreground">{t("about.bio2name")}</strong> {t("about.bio2end")}
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-hover p-6 flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{t(h.titleKey)}</h3>
                <p className="text-sm text-muted-foreground font-body">{t(h.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-20">
        {[
          { labelKey: "about.mission", textKey: "about.mission.text" },
          { labelKey: "about.vision", textKey: "about.vision.text" },
        ].map((item, i) => (
          <motion.div
            key={item.labelKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t(item.labelKey)}</p>
            <p className="font-body text-foreground leading-relaxed">{t(item.textKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
