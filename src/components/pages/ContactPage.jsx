import React from "react";
import ContactInfo from "../ContactUs/ContactInfo";
import ContactForm from "../ContactUs/ContactForm";
import FAQ from "../landing/FAQ";


const ContactPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Top Heading Section */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-24 py-24 px-4 text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00A86B]">
          Contact Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Have questions or ready to elevate your research? Reach out to our team.
        </p>
      </div>

      {/* Content Section: Info + Form */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10 text-white">
        <ContactInfo />
        <ContactForm />
      </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-20">
        <section className="py-12">
            <FAQ/>
        </section>
        </div>
    </div>
  );
};

export default ContactPage;
