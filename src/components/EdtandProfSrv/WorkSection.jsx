import React from 'react';

const Work = () => {
  return (
    <section className="bg-[#C6F2E3] py-16 px-4 text-black mb-10">
      <div className="max-w-3xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
          How <span className="text-[#00A86B]">SciScribe</span> Works
        </h2>

        {/* Subtext */}
        <p className="mb-4 text-gray-800">
          Not a maze. Just four clear steps to get you from stuck to submitted.
        </p>

        {/* Steps */}
        <div className="space-y-4 text-sm md:text-base ">
          <div>
            <p className="font-semibold ">1. Tell us where you're stuck</p>
            <p className="font-normal">
              Need help writing? Or just want to finally understand data analysis? Pick what you need  we’ll meet you there.
            </p>
          </div>

          <div>
            <p className="font-semibold">2. Follow the plan, not the panic</p>
            <p className="font-normal">
              No chaos, no “Where do I even start?” We break it all down so you're moving forward with confidence.
            </p>
          </div>

          <div>
            <p className="font-semibold">3. Learn the stuff they don’t teach in class</p>
            <p className="font-normal">
              Like how to use Chat GPT properly for research, or make sense of R without crying into your notes.
            </p>
          </div>

          <div>
            <p className="font-semibold">4. Hit submit like a pro</p>
            <p className="font-normal">
              Thesis done. Paper ready. And you actually learned something useful along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
