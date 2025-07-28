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


const Homepage = () => {
  return (
    <div className="relative w-full ">
  
      <div className="bg-white" />

      {/* ✅ Home sections over video */}
      <div className="relative z-20 flex flex-col space-y-8">
        <BannerVideo/>
        <Banner />
        <OurServices/>
        <Middle />
        <SuccessSection />
        <ResearchSkills />
        {/* <Work /> */}
        <FAQ />
        <CTASection />
      </div>
    </div>
  );
};

export default Homepage;
