import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const newsKeys = [
  { date: "2026", titleKey: "news.n1.title", descKey: "news.n1.desc" },
  { date: "2024", titleKey: "news.n2.title", descKey: "news.n2.desc" },
  { date: "2025", titleKey: "news.n3.title", descKey: "news.n3.desc" },
];

const NewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("news.tag")}</p>
        <h2 className="font-display text-4xl font-bold text-foreground">{t("news.title")}</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsKeys.map((n, i) => (
          <motion.div
            key={n.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-2 text-accent text-sm font-body mb-3">
              <Newspaper className="w-4 h-4" />
              {n.date}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t(n.titleKey)}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{t(n.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
