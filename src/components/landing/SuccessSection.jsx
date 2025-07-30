import React from 'react';
import SuccessPhoto from "../../assets/Success.jpg";

const SuccessSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Background image */}
      <img
        src={SuccessPhoto}
        alt="Success Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✅ Centered content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
        <h1 className="text-[#00A86B] font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
          Powering Your Success
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          Writing a thesis or research paper can feel overwhelming — from organizing your thoughts to hitting the
          right academic tone, or simply meeting tight deadlines. We’re here to make it easier with clear, step-by-step
          support tailored for medical students and researchers. From your first draft to the final polish, we help you
          write confidently and finish strong.
        </p>
      </div>
    </section>
  );
};

export default SuccessSection;
