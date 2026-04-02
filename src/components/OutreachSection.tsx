import { motion } from "framer-motion";
import { Lightbulb, Megaphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OutreachSection = () => {
  const { t } = useLanguage();

  return (
    <section id="divulgacion" className="section-alt">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("outreach.tag")}</p>
          <h2 className="font-display text-4xl font-bold text-foreground">{t("outreach.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-hover p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Megaphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{t("outreach.bio.title")}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{t("outreach.bio.desc")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card-hover p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{t("outreach.edu.title")}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{t("outreach.edu.desc")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutreachSection;
