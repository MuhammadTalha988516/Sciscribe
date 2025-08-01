import React from "react";
import OurServices from "../services/OurServices";
import OurAttributes from "../services/OurAttributes";
import ServiceCTA from "../services/ServiceCTA";

const Services = () => {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden">
      <div className="relative z-20 w-full">
        <section className="py-12">
          <OurServices />
        </section>
        <section className="py-8">
          <OurAttributes />
        </section>
        <section className="py-12">
          <ServiceCTA />
        </section>
      </div>
    </div>
  );
};

export default Services;
