import React from 'react';

const SuccessSection = () => {
  return (
    <section className="py-20 px-4 mt-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-[#00A86B] font-bold text-4xl leading-tight mb-6">
          Powering Your Success
        </h1>

        <p className="text-gray-200 text-xl mb-10 px-2 text-center">
          Writing a thesis or research paper can feel overwhelming whether it's organizing your thoughts, hitting the
          right academic tone, or just meeting those tight deadlines. We're here to make it easier with clear, step-by-
          step support tailored for medical students and researchers. From your first draft to the final polish, we help
          you write confidently and finish strong.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-5">
          <button className="bg-[#00A86B] hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-full shadow transition duration-300">
            Start Thesis
          </button>
          <button className="border border-[#00A86B] text-[#00A86B] hover:bg-white  font-medium py-2 px-4 rounded-full shadow transition duration-300">
            Write Paper
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
