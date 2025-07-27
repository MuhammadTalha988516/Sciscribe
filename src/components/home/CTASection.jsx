import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-700 backdrop-blur-sm text-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center border border-transparent hover:border-[#00A86B] transition mb-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Take the next step in your <br /> research journey.
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Ready to elevate your research with expert support? Reach out to our
        team today and let’s make progress together.{" "}
        <strong>Your next breakthrough starts here.</strong>
      </p>
      <button
        onClick={() => navigate("/contact-us")}
        className="bg-[#00A86B] hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
      >
        Start Now
      </button>
    </div>
  );
};

export default CTASection;
