import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactInfo from "../ContactUs/ContactInfo";
import ContactForm from "../ContactUs/ContactForm";
import Build from "../../assets/Contact.jpg";
import SEO from "../../components/SEO";

const ContactPage = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
  window.scrollTo(0, 0); 
}, []);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <SEO 
      title="ContactPage" 
      description="This is the ContactPage for Sciscribe"
    />
      <img
        src={Build}
        alt="Building"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-24 py-16 px-4 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00A86B]">
          Contact Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300">
          Have questions or ready to elevate your research? Reach out to our team.
        </p>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
