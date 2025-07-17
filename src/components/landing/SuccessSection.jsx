import React from 'react';

const SuccessSection = () => {
  return (
    <section className="bg-[#DFF4ED] py-20 px-4 mt-36">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-black font-bold text-4xl leading-tight mb-6">
          Powering Your Success
        </h1>

        {/* Underlined Paragraph */}
        <p className="text-gray-700 text-xl leading-relaxed mb-10 ">
          Writing a thesis or research paper can feel overwhelming whether it's organizing your thoughts, hitting the
          right academic tone, or just meeting those tight deadlines. We're here to make it easier with clear, step-by-
          step support tailored for medical students and researchers. From your first draft to the final polish, we help
          you write confidently and finish strong.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-5 ">
          <button className="bg-[#00A86B] hover:bg-green-700 text-white cursor-pointer font-medium py-2 px-6  rounded-xl shadow-md transition-colors duration-200 ">
            Start Thesis
          </button>
          <button className="border-1 border-green-600 text-green-600 hover:bg-green-50 cursor-pointer font-medium rounded-xl py-2 px-6  shadow-md transition-colors duration-200">
            Write Paper
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessSection;
