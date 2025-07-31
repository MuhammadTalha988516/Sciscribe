import React from "react";

const ServiceCTA = () => {
  return (
    <div className="bg-gray-700 text-white rounded-2xl p-6 md:p-10 max-w-3xl mx-auto text-center border border-white/10">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Cannot find what you’re looking for?
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
        We understand that every research project is unique. If you need a
        service that’s not listed here, feel free to reach out. Our team would
        be happy to discuss your specific requirements and tailor a solution
        that fits your goals.{" "}
        <strong>Customization is key to what we do.</strong>
      </p>
      <button
        onClick={() => {
          // Force full page reload to show the page from top
          window.location.href = "/contact-us";
        }}
        className="bg-[#00A86B] hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
      >
        Contact Us
      </button>
    </div>
  );
};

export default ServiceCTA;
