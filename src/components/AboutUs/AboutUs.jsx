import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        Who We Help & Why
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed text-center mb-16">
        SciScribe exists to help medical students and researchers write with clarity, confidence, and the right support.
        Whether it’s your thesis, a research paper, or mastering AI tools – we break it down step by step.
        <br /><br />
        Built for busy schedules. Designed for real academic work. Focused on getting you from stuck to submitted – with skills that stay with you.
      </p>

      {/* Mission, Vision, Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Mission */}
        <div className="bg-white p-6 shadow-md rounded-lg h-[218px w-[250px] border border-gray-300 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-3 text-green-700">Our Mission</h2>
          <p className="text-gray-600 text-sm">
            We help medical students and researchers write smarter with guided support, practical tools, and training for real-world academic needs.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 shadow-md rounded-lg h-full h-[218px w-[250px] border border-gray-300 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-3 text-green-700">Our Vision</h2>
          <p className="text-gray-600 text-sm">
            To be the go-to platform for medical research writing and AI-powered academic guidance across the globe.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white p-6 shadow-md rounded-lg h-full h-[218px w-[250px] border border-gray-300 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-xl font-bold mb-3 text-green-700">Our Values</h2>
          <p className="text-gray-600 text-sm">
            Clarity. Confidence. Credibility. We stand for ethical writing, efficient learning, and long-term skill-building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
