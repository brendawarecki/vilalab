import { motion } from "framer-motion";
import { GraduationCap, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const JoinSection = () => {
  const { t } = useLanguage();

  return (
    <section id="unite" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("join.tag")}</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">{t("join.title")}</h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>{t("join.p1")}</p>
            <p>
              {t("join.p2a")} <strong className="text-foreground">{t("join.p2.doc")}</strong> {t("join.p2.and")}{" "}
              <strong className="text-foreground">{t("join.p2.postdoc")}</strong> {t("join.p2b")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-semibold text-foreground">{t("join.how")}</h3>
          </div>
          <ol className="space-y-4 font-body text-muted-foreground text-sm list-decimal list-inside">
            <li>{t("join.step1")}</li>
            <li>{t("join.step2")}</li>
            <li>
              {t("join.step3a")}{" "}
              <a href="mailto:vila@ibr-conicet.gov.ar" className="text-primary hover:underline">
                vila@ibr-conicet.gov.ar
              </a>
            </li>
          </ol>
          <a
            href="mailto:vila@ibr-conicet.gov.ar"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:brightness-110 transition-all"
          >
            {t("join.cta")} <Send className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
