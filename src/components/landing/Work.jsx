import React from 'react';

const Work = () => {
  return (
    <section className="bg-[#C6F2E3] py-16 px-4 text-black">
      <div className="max-w-3xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">
          How <span className="text-[#00A86B]">SciScribe</span> Works
        </h2>

        {/* Subtext */}
        <p className="mb-6 text-center text-gray-800">
          Not a maze. Just four clear steps to get you from stuck to submitted.
        </p>

        {/* Steps */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <div>
            <strong>1. Tell us where you're stuck</strong><br />
            Need help writing? Or just want to finally understand data analysis? Pick what you need – we’ll meet you there.
          </div>

          <div>
            <strong>2. Follow the plan, not the panic</strong><br />
            No chaos, no “Where do I even start?” We break it all down so you're moving forward with confidence.
          </div>

          <div>
            <strong>3. Learn the stuff they don’t teach in class</strong><br />
            Like how to use Chat GPT properly for research, or make sense of R without crying into your notes.
          </div>

          <div>
            <strong>4. Hit submit like a pro</strong><br />
            Thesis done. Paper ready. And you actually learned something useful along the way.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
