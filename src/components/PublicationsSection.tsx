import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featuredPubs = [
  { title: "NDM-driven cefiderocol resistance: effect and therapeutic considerations", journal: "Lancet Infectious Diseases", year: "2025" },
  { title: "Periplasmic Protein Quality Control at Atomic Level in Live Cells", journal: "Nature Communications", year: "2025" },
  { title: "Zinc starvation uncovers bacterial host-specific proteases that shape NDM adaptability in Acinetobacter baumannii", journal: "mBio", year: "2026" },
  { title: "Protein determinants of dissemination and host specificity of Metallo-β-lactamases", journal: "Nature Communications", year: "2019" },
];

const PublicationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="publicaciones" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("pubs.tag")}</p>
        <h2 className="font-display text-4xl font-bold text-foreground">{t("pubs.title")}</h2>
      </motion.div>

      <div className="space-y-4 mb-12">
        {featuredPubs.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 flex items-start gap-4"
          >
            <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-body font-semibold text-foreground mb-1">{pub.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{pub.journal} · {pub.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/?term=Vila+AJ+metallo+beta+lactamase"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:brightness-110 transition-all"
        >
          {t("pubs.cta")} <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default PublicationsSection;
