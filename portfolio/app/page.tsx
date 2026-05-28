import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <ContactSection />
    </main>
  );
}
