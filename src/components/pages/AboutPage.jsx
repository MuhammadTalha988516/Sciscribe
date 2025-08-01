import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import FAQ from '../landing/FAQ';

const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-16">
        <AboutUs />
        <FAQ />
      </main>
    </div>
  );
};

export default AboutPage;
