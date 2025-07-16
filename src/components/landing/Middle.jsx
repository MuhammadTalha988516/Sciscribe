import React from 'react';
import labImg from '../../assets/doc.png'; // Update with actual path

const Middle = () => {
  return (
    <section className="bg-[#D9D9D9] py-20 px-4 ">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div>
          <img
            src={labImg}
            alt="Researcher"
            className="w-[287px] h-[350px] rounded-[20px] object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className="max-w-[1006px] ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-green-600">SciScribe</span> Works for You
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              <strong>Step-by-step thesis help</strong> – Clear guidance from your first draft to final formatting.
            </li>
            <li>
              <strong>Tailored for medical students</strong> – Examples and tools that actually match your field.
            </li>
            <li>
              <strong>Plagiarism-safe writing</strong> – Learn how to write with confidence and integrity.
            </li>
            <li>
              <strong>Hands-on training</strong> – Practical courses in Chat GPT, data analysis, and research methods.
            </li>
            <li>
              <strong>Made for tight schedules</strong> – Learn fast, write smart, and finish without the overwhelm.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Middle;
