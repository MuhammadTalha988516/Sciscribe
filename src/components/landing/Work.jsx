import React from 'react';

const Work = () => {
  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-3xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
          How <span className="text-[#00A86B]">SciScribe</span> Works
        </h2>

        {/* Subtext */}
        <p className="mb-4 text-gray-300 text-center">
          Not a maze. Just four clear steps to get you from stuck to submitted.
        </p>

        {/* Steps */}
        <div className="space-y-6 text-sm md:text-base">
          <div>
            <p className="font-semibold text-[#00A86B]">1. Tell us where you're stuck</p>
            <p className="text-gray-300">
              Need help writing? Or just want to finally understand data analysis? Pick what you need — we’ll meet you there.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#00A86B]">2. Follow the plan, not the panic</p>
            <p className="text-gray-300">
              No chaos, no “Where do I even start?” We break it all down so you're moving forward with confidence.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#00A86B]">3. Learn the stuff they don’t teach in class</p>
            <p className="text-gray-300">
              Like how to use Chat GPT properly for research, or make sense of R without crying into your notes.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#00A86B]">4. Hit submit like a pro</p>
            <p className="text-gray-300">
              Thesis done. Paper ready. And you actually learned something useful along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
