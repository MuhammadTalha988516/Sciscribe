import React from "react";
import OurServices from "../services/OurServices";
import OurAttributes from "../services/OurAttributes";
import ServiceCTA from "../services/ServiceCTA";
import FAQ from "../landing/FAQSection";


const Services = () => {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-white">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-60 z-10" />
      <img src="" alt="" />
      {/* Page Heading */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-24 py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Our Services
        </h1>
        <p className="text-black text-lg md:text-xl">
          Explore our specialized services and find the perfect support for your research journey.
        </p>
      </div>

      {/* Content Sections */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 bg-gray-700 pb-20">
        <section className="py-12 ">
          <OurServices />
        </section>
        <section className="py-2">
          <OurAttributes />
        </section>
        <section className="py-14">
          <ServiceCTA />
        </section>
        {/* <section className="py-12">
            <FAQ/>
        </section> */}
        
      </div>
    </div>
  );
};

export default Services;
