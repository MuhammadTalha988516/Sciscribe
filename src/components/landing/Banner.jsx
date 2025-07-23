import React from 'react';
import heroImg from '../../assets/banner.jpg'; // ✅ Use your transparent image

const Banner = () => {
  return (
    <section className="py-30 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text */}
        <div>
          <h4 className="text-green-500 text-sm md:text-base mb-2">
            Tight deadlines, no clear guidance – you are not alone.
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug mb-4">
            Write Your{' '}
            <span className="bg-green-500 text-white px-2 rounded-md inline-block">
              Thesis
            </span>{' '}
            <br />
            with Clarity, Confidence, & <br />
            the Right Guidance.
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            Step-by-step guidance and practical training designed just for students and researchers.
            From thesis writing to data skills, we help you finish strong & grow your academic career.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
              Boost Writing
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
              Master Research
            </button>
          </div>
        </div>

        {/* Right Side - Single Transparent Image */}
        <div className="flex justify-center items-center">
          <img
            src={heroImg}
            alt="Research Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
