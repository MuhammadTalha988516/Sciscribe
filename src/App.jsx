import React from "react";
import Navbar from "./components/home/Navbar";
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Banner />
      <Middle />
      <main className="flex-grow">
        {/* Replace this with actual content */}
        <div className="min-h-[400px]"></div>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
