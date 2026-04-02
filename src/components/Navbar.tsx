import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const navKeys = [
  { key: "nav.inicio", href: "#inicio" },
  { key: "nav.investigacion", href: "#investigacion" },
  { key: "nav.publicaciones", href: "#publicaciones" },
  { key: "nav.equipo", href: "#equipo" },
  { key: "nav.unite", href: "#unite" },
  { key: "nav.divulgacion", href: "#divulgacion" },
  { key: "nav.contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-md border-b border-hero-foreground/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="font-display text-xl font-bold text-hero-foreground tracking-tight">
          Vila <span className="text-hero-accent">Lab</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navKeys.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-hero-foreground/70 hover:text-hero-accent transition-colors font-body"
            >
              {t(l.key)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm text-hero-foreground/70 hover:text-hero-accent transition-colors font-body"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm text-hero-foreground/70 hover:text-hero-accent transition-colors font-body"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="text-hero-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-hero/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-6 pb-6 gap-4">
              {navKeys.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-hero-foreground/70 hover:text-hero-accent transition-colors font-body"
                >
                  {t(l.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
