import React, { useEffect } from 'react';
import { Users } from "lucide-react";
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

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-gray-800">
        {/* ✅ Top Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-600 p-4 rounded-full shadow-lg">
            <Users className="text-white" size={40} />
          </div>
        </div>

        {/* ✅ Wrapped Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#00A86B]">
          Who We Help <br /> & Why
        </h1>

        {/* ✅ Intro Text */}
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-500 leading-relaxed max-w-3xl mx-auto mb-16">
          At SciScribe, we support students, early-career researchers, and academics across disciplines in developing clear, confident, and credible research writing. Whether you're working on a research article, academic report, or learning to integrate AI tools into your workflow, we guide you step by step.

          <br /><br />
          Built to fit demanding academic schedules. Grounded in real research practices. Our goal? To help you move from overwhelmed to accomplished, with skills that last far beyond submission.
        </p>

        {/* ✅ Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              img: Mission,
              title: "Our Mission",
              text: "We help students and researchers write smarter with guided support, practical tools, and training for real-world academic needs.",
              link: "/learn-more/mission",
              color: "text-green-600",
            },
            {
              img: Vision,
              title: "Our Vision",
              text: "To become the leading global platform for research writing support and AI-powered academic guidance — empowering researchers and students across all disciplines to produce impactful, ethical, and high-quality work.",
              link: "/learn-more/vision",
              color: "text-blue-600",
            },
            {
              img: Values,
              title: "Our Values",
              text: "Clarity. Confidence. Credibility. We stand for ethical writing, efficient learning, and long-term skill-building.",
              link: "/learn-more/values",
              color: "text-yellow-500",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img src={card.img} alt={card.title} className="w-full h-48 sm:h-56 object-cover" />
              <div className="flex flex-col flex-1 p-6">
                <h2 className={`text-xl font-bold mb-3 ${card.color}`}>{card.title}</h2>
                <p className="text-gray-600 text-base mb-4 flex-1">{card.text}</p>
                <Link to={card.link} className="text-green-600 underline text-sm">Learn More</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full bg-green-600 hover:bg-green-700 text-white focus:outline-none"
          >
            Take Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
