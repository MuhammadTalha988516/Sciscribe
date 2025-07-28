import React, { useState, useEffect } from 'react';
import { Target, Eye, Star, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mission from "../../assets/mission.jpg";
import Vision from "../../assets/vision.jpg";
import Values from "../../assets/values.jpg"

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
    <div className="max-w-6xl mx-auto px-4 py-24 text-gray-800 bg-white">
      {/* ✅ Top Icon */}
      <div className="flex justify-center mb-4" data-aos="fade-down">
        <div className="bg-green-600 p-3 rounded-full shadow-lg">
          <Users className="text-white" size={36} />
        </div>
      </div>

      {/* ✅ Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Who We Help & Why</h1>

      {/* ✅ Intro Text */}
      <p
        className="text-lg text-center leading-relaxed mb-16 text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        SciScribe exists to help medical students and researchers write with clarity, confidence, and the right support.
        Whether it’s your thesis, a research paper, or mastering AI tools – we break it down step by step.
        <br /><br />
        Built for busy schedules. Designed for real academic work. Focused on getting you from stuck to submitted – with skills that stay with you.
      </p>

      {/* ✅ 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">

        {/* ✅ Mission Card with Sexy Image */}
        <div
          data-aos="zoom-in"
          className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-all duration-300"
        >
          <img 
            src={Mission}
            alt="Mission"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 min-h-[200px]">
            <h2 className="text-xl font-bold mb-3 text-green-600">Our Mission</h2>
            <p className="text-gray-600 text-base mb-4">
              We help students and researchers write smarter with guided support, practical tools, and training for real-world academic needs.
            </p>
            <Link to="/learn-more/mission" 
            className="text-green-600 underline text-sm">
              
              Learn More</Link>
          </div>
        </div>

        {/* ✅ Vision */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="relative bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-all duration-300"
        >
          <img src={Vision} 
          alt="vision" 
          className="w-full h-48 object-cover"
          />
          {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-blue-600 p-3 rounded-full shadow-lg z-10">
            <Eye className="text-white" size={32} />
          </div> */}
          <div className=" p-6 min-h-[200px]">
            <h2 className="text-xl font-bold mb-3 text-blue-600">Our Vision</h2>
            <p className="text-gray-600 text-base mb-4">
              To be the go-to platform for medical research writing and AI-powered academic guidance across the globe.
            </p>
            <Link to="/learn-more/vision" className="text-blue-600 underline text-sm">Learn More</Link>
          </div>
        </div>

        {/* ✅ Values */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="relative bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-all duration-300"
        >
          <img src={Values} 
          alt="values" 
          className="w-full h-48 object-cover"
          />
          {/* <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-yellow-500 p-3 rounded-full shadow-lg z-10">
            <Star className="text-white" size={32} />
          </div> */}
          <div className="pt-10 p-6 min-h-[280px]">
            <h2 className="text-xl font-bold mb-3 text-yellow-500">Our Values</h2>
            <p className="text-gray-600 text-base mb-4">
              Clarity. Confidence. Credibility. We stand for ethical writing, efficient learning, and long-term skill-building.
            </p>
            <Link to="/learn-more/values" className="text-yellow-500 p-4 bg-green-600 text-sm rounded-2xl">Learn More</Link>
          </div>
        </div>

      </div>

      {/* ✅ CTA Button */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="300">
        <button
          onClick={handleClick}
          disabled={loading}
          className="relative inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 overflow-hidden"
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
