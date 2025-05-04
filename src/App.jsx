import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatBlockSection from "./components/StatBlockSection";
import TestimonialSection from "./components/TestimonialSection";
import ServicesSection from "./components/ServicesSection";
import BenefitsSection from "./components/BenefitsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <main className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 font-main">
        <HeroSection>
          <Navbar />
          <Hero />
        </HeroSection>
        <StatBlockSection />
        <TestimonialSection />
        <ServicesSection />
        <BenefitsSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
