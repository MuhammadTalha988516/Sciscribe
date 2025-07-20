import React from 'react';
import AboutUs from '../AboutUs/AboutUs'; 
import FAQ from '../landing/FAQ';

const AboutPage = () => {
  return (
    <main className="pt-20 bg-gray-50 min-h-screen">
      {/* Optional page header */}
      <section className="text-center py-8 bg-green-700 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-sm">Learn more about who we are and why we help</p>
      </section>

      {/* AboutUs section */}
      <AboutUs />
      <FAQ />
    </main>
    
  );
};

export default AboutPage;
