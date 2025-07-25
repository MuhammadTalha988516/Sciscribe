import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FAQ from '../landing/FAQ';

const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/about-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Optional dark overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-10"></div>

      {/* ✅ Content */}
      <main className="relative z-20">
        <AboutUs />
        <FAQ />
      </main>
    </div>
  );
};

export default AboutPage;
