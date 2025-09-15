import React, { useEffect, useState } from "react";
import homebanner from "../../assets/ban.jpeg"; // replace with relevant academic image if available

export default function Banner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-500 to-green-900 text-white w-full min-h-[100vh] flex mt-16">
      {/* Left Side Text */}
      <div
        className={`w-1/2 flex flex-col justify-center px-10 transition-all duration-2000 ease-out ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Professional Academic Editing & Proofreading Services
        </h1>
        <p className="text-lg mb-6 max-w-xl">
          Elevate your research with expert thesis editing, dissertation
          polishing, and journal paper proofreading. We ensure clarity,
          accuracy, and publication-ready quality for your success.
        </p>
        {/* Smaller Button aligned left */}
        <button className="px-4 py-2 text-sm bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition w-fit">
          Get Started
        </button>
      </div>

      {/* Right Side Full-Cover Image */}
      <div
        className={`w-1/2 h-[calc(100vh-4rem)] transition-all duration-2000 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={homebanner}
          alt="Academic Editing Banner"
          className="w-full h-full object-cover rounded-none"
        />
      </div>
    </section>
  );
}
