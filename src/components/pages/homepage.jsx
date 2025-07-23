import React from "react";

// Home Sections
import Banner from "../landing/Banner";
import Middle from "../landing/Middle";
import SuccessSection from "../landing/SuccessSection";
import FAQ from "../landing/FAQ";
import ResearchSkills from "../landing/ResearchSkills";
import Work from "../landing/Work";
import CTASection from "../home/CTASection"; // adjust path if needed

const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* ✅ Home sections over video */}
      <div className="relative z-20 flex flex-col space-y-24">
        <Banner />
        <Middle />
        <SuccessSection />
        <ResearchSkills />
        <Work />
        <CTASection />
        <FAQ />
      </div>
    </div>
  );
};

export default Homepage;
