import React from "react";

const CTASection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-700 backdrop-blur-sm text-white rounded-2xl p-6 md:p-12 max-w-3xl mx-auto text-center border border-transparent hover:border-[#00A86B] transition">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Take the next step in your <br className="hidden sm:block" /> research journey.
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Ready to elevate your research with expert support? Reach out to our
          team today and let’s make progress together.{" "}
          <strong>Your next breakthrough starts here.</strong>
        </p>
        <button
          onClick={() => {
            // Force full page reload to start from top
            window.location.href = "/contact-us";
          }}
          className="bg-[#00A86B] hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Start Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
