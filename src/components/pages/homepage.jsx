import React from "react";

// Home Sections
import Banner from "../landing/Banner";
import Middle from "../landing/Middle";
import SuccessSection from "../landing/SuccessSection";
import FAQ from "../landing/FAQSection";
import ResearchSkills from "../landing/ResearchSkills";
// import Work from "../landing/Work";
import CTASection from "../home/CTASection"; // adjust path if needed
import BannerVideo from "../landing/BannerVideo";
import OurServices from "../landing/OurServices";
import SEO from "../../components/SEO";
const Homepage = () => {
  return (
    <div className="relative w-full">
     
      <div className="bg-white" />

      {/* Home sections stacked over video */}
      <div className="relative z-20 flex flex-col space-y-12 md:space-y-20">
        <SEO 
      title="HomePage" 
      description="This is the hompage for Sciscribe"
    />
        <BannerVideo />
        <Banner />
        <OurServices />
        <Middle />
        <SuccessSection />
        <ResearchSkills />
        <FAQ />
        <CTASection />
      </div>
    </div>
  );
};

export default Homepage;
