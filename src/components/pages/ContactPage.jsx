import React from "react";
import ContactInfo from "../ContactUs/ContactInfo";
import ContactForm from "../ContactUs/ContactForm";
import FAQ from "../landing/FAQSection";


const ContactPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-60 z-10" />

      {/* Top Heading Section */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-24 py-24 px-4 text-black">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00A86B]">
          Contact Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black">
          Have questions or ready to elevate your research? Reach out to our team.
        </p>
      </div>

      {/* Content Section: Info + Form */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10 text-black">
        <ContactInfo />
        <ContactForm />
      </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-20">
        <section className="py-12">
            {/* <FAQ/> */}
        </section>
        </div>
    </div>
  );
};

export default ContactPage;
