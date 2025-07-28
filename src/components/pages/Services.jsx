import React from "react";
import OurServices from "../services/OurServices";
import OurAttributes from "../services/OurAttributes";
import ServiceCTA from "../services/ServiceCTA";
import FAQ from "../landing/FAQSection";


const Services = () => {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden">


      {/* Content Sections */}
      <div className="relative z-20 w-full">
        <section className="py-12 width-full mx-auto">
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
