import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeamSection from "@/components/TeamSection";
import JoinSection from "@/components/JoinSection";
import OutreachSection from "@/components/OutreachSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ResearchSection />
    <PublicationsSection />
    <TeamSection />
    <JoinSection />
    <OutreachSection />
    <NewsSection />
    <ContactSection />
    <Footer />
  </LanguageProvider>
);

export default Index;
