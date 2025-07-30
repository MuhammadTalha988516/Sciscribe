import React from 'react';
import BannerImg from '../../assets/BannerPhoto2.jpg';

const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      <img
        src={BannerImg}
        alt="Research Hero"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl">
        <h4 className="text-green-400 text-base md:text-lg mb-2">
          Tight deadlines, no clear guidance — you’re not alone.
        </h4>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug mb-4">
          Write 
         with Clarity, Confidence, and Integrity 
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-6">
        Expert guidance and practical training tailored for students and researchers. From scientific writing to data analysis skills, we support your research journey every step of the way.        </p>
      </div>
    </section>
  );
};

export default Banner;
