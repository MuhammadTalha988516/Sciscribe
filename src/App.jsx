import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import AboutUs from "./components/AboutUs/AboutUs";
import CourseBanner from "./components/Courses/CourseBanner"
import CoursePage from "./components/Courses/CoursePage"; // ✅ Fix here

// Common
import Navbar from "./components/home/Navbar";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";

// Home Sections
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import SuccessSection from "./components/landing/SuccessSection";
import FAQ from "./components/landing/FAQ";
import ResearchSkills from "./components/landing/ResearchSkills";
import Work from "./components/landing/Work";


const App = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="flex flex-col min-h-screen">
        {/* Global Components */}
        <Navbar />
        <FloatingWhatsapp />

        {/* Page Routing */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Middle />
                <main className="flex-grow">
                  <SuccessSection />
                  <ResearchSkills />
                  <Work />
                  <FAQ />
                  <CTASection />
                </main>
              </>
            }
          />

          {/* About Page */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<CourseBanner />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center py-20">
                <h1 className="text-3xl text-gray-500">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
