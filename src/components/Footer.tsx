import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-hero px-6 py-10 text-center">
      <p className="font-display text-lg font-bold text-hero-foreground mb-1">
        Vila <span className="text-hero-accent">Lab</span>
      </p>
      <p className="text-xs text-hero-foreground/50 font-body">
        © {new Date().getFullYear()} {t("footer.copy")}
      </p>
    </footer>
  );
};

export default Footer;
