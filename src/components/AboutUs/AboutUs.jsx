import React, { useState, useEffect } from 'react';
import { Target, Eye, Star , Users } from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="flex justify-center mb-4" data-aos="fade-down">
        <div className="bg-green-600 p-3 rounded-full shadow-lg">
          <Users className="text-white" size={36} />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6 text-white" data-aos="fade-up">
        Who We Help & Why
      </h1>

      <p className="text-lg text-white text-center leading-relaxed mb-16" data-aos="fade-up" data-aos-delay="200">
        SciScribe exists to help medical students and researchers write with clarity, confidence, and the right support.
        Whether it’s your thesis, a research paper, or mastering AI tools – we break it down step by step.
        <br /><br />
        Built for busy schedules. Designed for real academic work. Focused on getting you from stuck to submitted – with skills that stay with you.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        {/* Mission Card */}
        <div data-aos="zoom-in" className="relative bg-black pt-14 p-6 shadow-md rounded-2xl min-h-[360px] w-full border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-green-600 p-3 rounded-full shadow-lg">
            <Target className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-3 text-green-500">Our Mission</h2>
          <p className="text-gray-400 text-base mb-4 px-2">
            We help medical students and researchers write smarter with guided support, practical tools, and training for real-world academic needs.
          </p>
          <Link to="/learn-more/mission" className="text-green-400 underline text-sm">Learn More</Link>
        </div>

        {/* Vision Card */}
        <div data-aos="zoom-in" data-aos-delay="100" className="relative bg-black pt-14 p-6 shadow-md rounded-2xl min-h-[360px] w-full border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-blue-600 p-3 rounded-full shadow-lg">
            <Eye className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-3 text-blue-400">Our Vision</h2>
          <p className="text-gray-400 text-base mb-4 px-2">
            To be the go-to platform for medical research writing and AI-powered academic guidance across the globe.
          </p>
          <Link to="/learn-more/vision" className="text-blue-300 underline text-sm">Learn More</Link>
        </div>

        {/* Values Card */}
        <div data-aos="zoom-in" data-aos-delay="200" className="relative bg-black pt-14 p-6 shadow-md rounded-2xl min-h-[360px] w-full border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-yellow-500 p-3 rounded-full shadow-lg">
            <Star className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-bold mb-3 text-yellow-400">Our Values</h2>
          <p className="text-gray-400 text-base mb-4 px-2">
            Clarity. Confidence. Credibility. We stand for ethical writing, efficient learning, and long-term skill-building.
          </p>
          <Link to="/learn-more/values" className="text-yellow-300 underline text-sm">Learn More</Link>
        </div>
      </div>

      {/* Button */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="300">
        <button
          onClick={handleClick}
          disabled={loading}
          className="relative inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 overflow-hidden"
        >
          {loading && (
            <span className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-700 animate-pulse opacity-60"></span>
          )}
          <span className="relative z-10">
            {loading ? 'Processing…' : 'Take Action'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
