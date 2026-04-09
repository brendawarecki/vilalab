import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.inicio": { es: "Inicio", en: "Home" },
  "nav.investigacion": { es: "Investigación", en: "Research" },
  "nav.publicaciones": { es: "Publicaciones", en: "Publications" },
  "nav.equipo": { es: "Equipo", en: "Team" },
  "nav.unite": { es: "Unite al Lab", en: "Join the Lab" },
  "nav.divulgacion": { es: "Divulgación", en: "Outreach" },
  "nav.contacto": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.subtitle": { es: "Biología Estructural & Resistencia Antimicrobiana", en: "Structural Biology & Antimicrobial Resistance" },
  "hero.desc": { es: "Desciframos las bases moleculares de la resistencia a antibióticos para combatir la amenaza global de las superbacterias.", en: "We decipher the molecular basis of antibiotic resistance to combat the global threat of superbugs." },
  "hero.cta1": { es: "Nuestra Investigación", en: "Our Research" },
  "hero.cta2": { es: "Contacto", en: "Contact" },
  "hero.imgAlt": { es: "Estructura 3D de proteína", en: "3D protein structure" },

  // About
  "about.tag": { es: "Investigador Principal", en: "Principal Investigator" },
  "about.bio1": { es: "Investigador Superior del CONICET y Profesor Titular de Biofísica en la Universidad Nacional de Rosario. Doctor en Química, pionero en el uso de la Resonancia Magnética Nuclear (RMN) aplicada a la biología estructural en Argentina.", en: "Senior Researcher at CONICET and Full Professor of Biophysics at the National University of Rosario. PhD in Chemistry, pioneer in the use of Nuclear Magnetic Resonance (NMR) applied to structural biology in Argentina." },
  "about.bio2es": { es: "Miembro de la", en: "Member of the" },
  "about.bio2name": { es: "American Academy of Microbiology", en: "American Academy of Microbiology" },
  "about.bio2end": { es: "y reconocido internacionalmente por sus contribuciones al estudio de la resistencia antimicrobiana a nivel molecular.", en: "and internationally recognized for his contributions to the study of antimicrobial resistance at the molecular level." },
  "about.h1.title": { es: "Premio Konex de Platino 2023", en: "Konex Platinum Award 2023" },
  "about.h1.desc": { es: "Reconocimiento a la excelencia en Bioquímica y Biología Molecular.", en: "Recognition of excellence in Biochemistry and Molecular Biology." },
  "about.h2.title": { es: "Howard Hughes Medical Institute", en: "Howard Hughes Medical Institute" },
  "about.h2.desc": { es: "International Research Scholar, financiamiento competitivo global.", en: "International Research Scholar, globally competitive funding." },
  "about.h3.title": { es: "22+ Tesis Doctorales", en: "22+ Doctoral Theses" },
  "about.h3.desc": { es: "Formación de recursos humanos de alto nivel científico.", en: "Training of high-level scientific human resources." },
  "about.mission": { es: "Misión", en: "Mission" },
  "about.mission.text": { es: "Investigar la relación estructura-función en proteínas de resistencia a antibióticos, combinando técnicas biofísicas de vanguardia con biología molecular.", en: "Investigate structure-function relationships in antibiotic resistance proteins, combining cutting-edge biophysical techniques with molecular biology." },
  "about.vision": { es: "Visión", en: "Vision" },
  "about.vision.text": { es: "Combatir la amenaza global de las 'superbacterias' mediante el entendimiento molecular profundo de la evolución bacteriana y el diseño racional de nuevos inhibidores.", en: "Combat the global threat of 'superbugs' through deep molecular understanding of bacterial evolution and rational design of new inhibitors." },

  // Research
  "research.tag": { es: "Líneas de Investigación", en: "Research Lines" },
  "research.title": { es: "Investigación & Hallazgos", en: "Research & Findings" },
  "research.l1.title": { es: "Metalo-β-lactamasas", en: "Metallo-β-lactamases" },
  "research.l1.desc": { es: "Estudio del mecanismo catalítico y descubrimiento de mecanismos moleculares de evolución de estas enzimas que confieren resistencia a carbapenemes.", en: "Study of the catalytic mechanism and discovery of molecular evolution mechanisms of these enzymes that confer carbapenem resistance." },
  "research.l2.title": { es: "Diseño de Inhibidores", en: "Inhibitor Design" },
  "research.l2.desc": { es: "Desarrollo de moléculas que bloquean la resistencia, en colaboración con consorcios internacionales de Uruguay, EE. UU. e Inglaterra.", en: "Development of molecules that block resistance, in collaboration with international consortia from Uruguay, USA, and England." },
  "research.l3.title": { es: "Impacto Clínico", en: "Clinical Impact" },
  "research.l3.desc": { es: "Colaboración con el Instituto Malbrán para el estudio genómico en tiempo real de cepas multirresistentes como Klebsiella pneumoniae.", en: "Collaboration with the Malbrán Institute for real-time genomic study of multidrug-resistant strains like Klebsiella pneumoniae." },
  "research.imgAlt": { es: "Laboratorio de RMN del Vila Lab", en: "Vila Lab NMR Laboratory" },

  // Publications
  "pubs.tag": { es: "Producción Científica", en: "Scientific Output" },
  "pubs.title": { es: "Publicaciones Destacadas", en: "Featured Publications" },
  "pubs.cta": { es: "Ver todas en PubMed", en: "View all on PubMed" },

  // Team
  "team.tag": { es: "Nuestro Grupo", en: "Our Group" },
  "team.title": { es: "Equipo", en: "Team" },
  "team.role.director": { es: "Director del Laboratorio", en: "Laboratory Director" },
  "team.role.investigadora": { es: "Investigadora", en: "Researcher" },
  "team.role.investigador": { es: "Investigador", en: "Researcher" },
  "team.role.posdoc": { es: "Becaria Posdoctoral", en: "Postdoctoral Fellow" },
  "team.role.doctoral": { es: "Becaria Doctoral", en: "Doctoral Fellow" },
  "team.role.tesinista": { es: "Tesinista", en: "Thesis student" },

  // Join
  "join.tag": { es: "Unite al Lab", en: "Join the Lab" },
  "join.title": { es: "Vacantes y Formación", en: "Openings & Training" },
  "join.p1": { es: "Buscamos estudiantes motivados por la bioquímica, biofísica y biología molecular para sumarse a nuestro equipo en el IBR (Instituto de Biología Molecular y Celular de Rosario).", en: "We are looking for students motivated by biochemistry, biophysics, and molecular biology to join our team at IBR (Institute of Molecular and Cellular Biology of Rosario)." },
  "join.p2a": { es: "Ofrecemos posiciones de", en: "We offer positions for" },
  "join.p2.doc": { es: "Becas Doctorales", en: "Doctoral Fellowships" },
  "join.p2.and": { es: "y", en: "and" },
  "join.p2.postdoc": { es: "Posdoctorales", en: "Postdoctoral Fellowships" },
  "join.p2b": { es: "con acceso a equipamiento de última generación y colaboraciones internacionales.", en: "with access to state-of-the-art equipment and international collaborations." },
  "join.how": { es: "¿Cómo postularse?", en: "How to apply?" },
  "join.step1": { es: "Preparar CV actualizado con historial académico.", en: "Prepare an updated CV with academic history." },
  "join.step2": { es: "Redactar una breve carta de motivación explicando tu interés en resistencia antimicrobiana.", en: "Write a brief motivation letter explaining your interest in antimicrobial resistance." },
  "join.step3a": { es: "Enviar ambos documentos a", en: "Send both documents to" },
  "join.cta": { es: "Enviar postulación", en: "Send application" },

  // Outreach
  "outreach.tag": { es: "Ciencia y Comunidad", en: "Science & Community" },
  "outreach.title": { es: "Divulgación", en: "Outreach" },
  "outreach.bio.title": { es: "Programa Biolíderes", en: "Bioleaders Program" },
  "outreach.bio.desc": { es: "Capacitamos a tomadores de decisiones y políticos sobre biotecnología, fomentando políticas públicas basadas en evidencia científica para enfrentar la resistencia antimicrobiana.", en: "We train decision-makers and politicians on biotechnology, promoting evidence-based public policies to face antimicrobial resistance." },
  "outreach.edu.title": { es: "Recursos Educativos", en: "Educational Resources" },
  "outreach.edu.desc": { es: "Materiales sobre el uso responsable de antibióticos, la diferencia entre virus y bacterias, y la amenaza de la era post-antibiótica para profesionales de la salud y público general.", en: "Materials on responsible use of antibiotics, the difference between viruses and bacteria, and the post-antibiotic era threat for health professionals and the general public." },

  // News
  "news.tag": { es: "Novedades", en: "Latest" },
  "news.title": { es: "Noticias", en: "News" },
  "news.n1.title": { es: "Lic. Clarisa Parodi alcanza el título de Doctora en Ciencias Biológicas", en: "Clarisa Parodi earns her PhD in Biological Sciences." },
  "news.n1.desc": { es: "En marzo de 2026 Clarisa defendió su tesis titulada como 'COMPLETAR'", en: "In March 2026, Clarisa defended her thesis titled 'COMPLETAR'." },
  "news.n2.title": { es: "Nuevas patentes de inhibidores de metalo-β-lactamasas", en: "New patents for metallo-β-lactamase inhibitors" },
  "news.n2.desc": { es: "El consorcio internacional liderado por Vila Lab obtiene protección intelectual para compuestos prometedores.", en: "The international consortium led by Vila Lab obtains intellectual property protection for promising compounds." },
  "news.n3.title": { es: "Colaboración ampliada con Instituto Malbrán", en: "Expanded collaboration with Malbrán Institute" },
  "news.n3.desc": { es: "Vigilancia genómica en tiempo real de cepas multirresistentes en hospitales de Argentina.", en: "Real-time genomic surveillance of multidrug-resistant strains in Argentine hospitals." },

  // Contact
  "contact.tag": { es: "Encontranos", en: "Find Us" },
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.address": { es: "Dirección", en: "Address" },
  "contact.social": { es: "Redes", en: "Social" },

  // Footer
  "footer.copy": { es: "Vila Lab – IBR CONICET / UNR. Rosario, Argentina.", en: "Vila Lab – IBR CONICET / UNR. Rosario, Argentina." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
