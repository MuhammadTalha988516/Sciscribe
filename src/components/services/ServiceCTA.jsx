import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 backdrop-blur-sm text-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center border border-transparent hover:border-[#00A86B] transition">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Cannot find what you’re looking for?
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        We understand that every research project is unique. If you need a
        service that’s not listed here, feel free to reach out. Our team would
        be happy to discuss your specific requirements and tailor a solution
        that fits your goals. <strong>Customization is key to what we do.</strong>
      </p>
      <button
        onClick={() => navigate("/contact-us")}
        className="bg-[#00A86B] hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
      >
        Contact Us
      </button>
    </div>
  );
};

export default ServiceCTA;
