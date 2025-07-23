import React from "react";
import { coursesPage } from "../data/Data";

const TopBanner = ({
  title = coursesPage.intro.heading,
  subtitle = coursesPage.intro.description,
  bgImage,
}) => {
  const backgroundImage =
    bgImage || coursesPage.intro.image || "https://source.unsplash.com/1600x400/?education,technology";

  return (
    <div
      className="relative w-full h-[22rem] md:h-[28rem] lg:h-[32rem] bg-center bg-cover flex items-center justify-center rounded-b-3xl shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent rounded-b-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-white max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-md md:text-xl font-light text-gray-200 drop-shadow-md">
          {subtitle}
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
