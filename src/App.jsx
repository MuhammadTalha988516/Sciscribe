import React from "react";

// Home components
import Navbar from "./components/home/Navbar";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";

// Landing components
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import SuccessSection from "./components/landing/SuccessSection";
import FAQ from "./components/landing/FAQ";
import ResearchSkills from "./components/landing/ResearchSkills";
import Work from "./components/landing/Work";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <FloatingWhatsapp />
      <Banner />
      <Middle />

      <main className="flex-grow">
        <SuccessSection />
        <ResearchSkills />
        <Work />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
