import { motion } from "framer-motion";
import { FlaskConical, Globe, HeartPulse } from "lucide-react";
import labImg from "@/assets/grupo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const lineKeys = [
  { icon: FlaskConical, titleKey: "research.l1.title", descKey: "research.l1.desc" },
  { icon: Globe, titleKey: "research.l2.title", descKey: "research.l2.desc" },
  { icon: HeartPulse, titleKey: "research.l3.title", descKey: "research.l3.desc" },
];

const ResearchSection = () => {
  const { t } = useLanguage();

  return (
    <section id="investigacion" className="section-alt">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("research.tag")}</p>
          <h2 className="font-display text-4xl font-bold text-foreground">{t("research.title")}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {lineKeys.map((l, i) => (
            <motion.div
              key={l.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card-hover p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <l.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{t(l.titleKey)}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(l.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={labImg}
            alt={t("research.imgAlt")}
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
