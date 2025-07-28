import React, { useEffect } from 'react';
import { Target, Eye, Star, Users } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mission from "../../assets/mission.jpg";
import Vision from "../../assets/vision.jpg";
import Values from "../../assets/values.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    navigate("/contact-us");
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
      <h1 className="text-4xl font-bold text-center mb-6 text-[#00A86B]">
        Who We Help & Why
      </h1>

      {/* ✅ Intro Text */}
      <p
        className="text-lg text-center leading-relaxed mb-16 text-gray-400"
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

        {/* ✅ Mission Card */}
        <div
          data-aos="zoom-in"
          className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-all duration-300"
        >
          <img src={Mission} alt="Mission" className="w-full h-48 object-cover" />
          <div className="p-6 min-h-[200px]">
            <h2 className="text-xl font-bold mb-3 text-green-600">Our Mission</h2>
            <p className="text-gray-600 text-base mb-4">
              We help students and researchers write smarter with guided support, practical tools, and training for real-world academic needs.
            </p>
            <Link to="/learn-more/mission" className="text-green-600 underline text-sm">
              Learn More
            </Link>
          </div>
        </div>

        {/* ✅ Vision */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-all duration-300"
        >
          <img src={Vision} alt="Vision" className="w-full h-48 object-cover" />
          <div className="p-6 min-h-[200px]">
            <h2 className="text-xl font-bold mb-3 text-blue-600">Our Vision</h2>
            <p className="text-gray-600 text-base mb-4">
              To be the go-to platform for medical research writing and AI-powered academic guidance across the globe.
            </p>
            <Link to="/learn-more/vision" className="text-green-600 underline text-sm">
              Learn More
            </Link>
          </div>
        </div>

        {/* ✅ Values */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-2 transition-all duration-300"
        >
          <img src={Values} alt="Values" className="w-full h-48 object-cover" />
          <div className="p-6 min-h-[280px]">
            <h2 className="text-xl font-bold mb-3 text-yellow-500">Our Values</h2>
            <p className="text-gray-600 text-base mb-4">
              Clarity. Confidence. Credibility. We stand for ethical writing, efficient learning, and long-term skill-building.
            </p>
            <Link to="/learn-more/values" className="text-green-600 underline text-sm">
              Learn More
            </Link>
          </div>
        </div>

      </div>

      {/* ✅ CTA Button */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="300">
        <button
          onClick={handleClick}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Take Action
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
