import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  { name: "Dr. Alejandro Vila", roleKey: "team.role.director", featured: true },
  { name: "Dra. Carolina López", roleKey: "team.role.investigadora" },
  { name: "Dr. Lisandro González", roleKey: "team.role.investigador" },
  { name: "Dra. Clarisa Parodi", roleKey: "team.role.posdoc" },
  { name: "Lic. Lucía Alasia", roleKey: "team.role.doctoral" },
  { name: "Lic. Lucía Capodimonte", roleKey: "team.role.doctoral" },
  { name: "Lic. Jazmín Pennesi", roleKey: "team.role.doctoral" },
  { name: "Lic. Fernanda Romero", roleKey: "team.role.doctoral" },
  { name: "Lic. Brenda Warecki", roleKey: "team.role.doctoral" },
  { name: "Lautaro Olalla", roleKey: "team.role.doctoral" },
];

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="equipo" className="section-alt">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-2">{t("team.tag")}</p>
          <h2 className="font-display text-4xl font-bold text-foreground">{t("team.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card-hover p-6 text-center ${m.featured ? "sm:col-span-2 lg:col-span-1 border-primary/30" : ""}`}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{m.name}</h3>
              <p className="text-sm text-muted-foreground font-body">{t(m.roleKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
