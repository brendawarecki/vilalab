import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="section-alt">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("contact.tag")}</p>
          <h2 className="font-display text-4xl font-bold text-foreground">{t("contact.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:vila@ibr-conicet.gov.ar"
              className="text-sm text-muted-foreground font-body hover:text-primary transition-colors"
            >
              vila@ibr-conicet.gov.ar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 text-center"
          >
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t("contact.address")}</h3>
            <p className="text-sm text-muted-foreground font-body">Ocampo y Esmeralda, CCT CONICET Rosario</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Suipacha 531 (UNR), Rosario, Argentina</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 text-center"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">{t("contact.social")}</h3>
            <div className="flex justify-center gap-5">
              <a href="https://www.instagram.com/lab_vila/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/tato_vila1962" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@ibr_conicet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
