import React from 'react';
import BannerImg from '../../assets/BannerPhoto2.jpg'; // ✅ Your background image

const Banner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Background image */}
      <img
        src={BannerImg}
        alt="Research Hero"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Overlay (optional for readability) */}
      <div className="absolute inset-0  bg-opacity-50 z-10" />

      {/* ✅ Centered text */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h4 className="text-green-400 text-lg md:text-base mb-2">
          Tight deadlines, no clear guidance – you are not alone.
        </h4>

        <h1 className="text-5xl md:text-5xl font-bold text-white leading-snug mb-4">
          Write Your{' '}
          <span className="bg-green-500 text-white px-2 rounded-md inline-block">
            Thesis
          </span>{' '}
          <br />
          with Clarity, Confidence, & <br />
          the Right Guidance.
        </h1>

        <p className="text-gray-200 text-2xl mb-6">
          Step-by-step guidance and practical training designed just for students and researchers.
          From thesis writing to data skills, we help you finish strong & grow your academic career.
        </p>

      </div>
    </section>
  );
};

export default Banner;
