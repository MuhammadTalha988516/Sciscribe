<<<<<<< Updated upstream
import React from 'react';
import SuccessSection from './components/landing/SuccessSection'
import FAQ from './components/landing/FAQ'
import ResearchSkills from './components/landing/ResearchSkills'
import Work from './components/landing/Work'
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import AboutUs from "./components/AboutUs/AboutUs";
import CourseBanner from "./components/Courses/CourseBanner";
// import CoursePage from "./components/Courses/CoursePage"; // Only if needed

// Common Components
import Navbar from "./components/home/Navbar";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";
import Features from "./components/home/features";

// Home Sections
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import SuccessSection from "./components/landing/SuccessSection";
import FAQ from "./components/landing/FAQ";
import ResearchSkills from "./components/landing/ResearchSkills";
import Work from "./components/landing/Work";
>>>>>>> Stashed changes

// Editing & Proofreading Service Sections
import BannerSection from "./components/EdtandProfSrv/BannerSection";
import MiddleSection from "./components/EdtandProfSrv/MiddleSection";
import WorkSection from "./components/EdtandProfSrv/WorkSection";

function App() {
  return (
<<<<<<< Updated upstream
    <div>
      <SuccessSection />
      <ResearchSkills/>
      <Work/>
  
      <FAQ />


    </div>
=======
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global Layout */}
        <Navbar />
        <FloatingWhatsapp />

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

          {/* Courses Page */}
          <Route path="/courses" element={<CourseBanner />} />

          {/* Editing and Proofreading Services */}
          <Route
            path="/editing-and-proofreading"
            element={
              <>
                <BannerSection />
                <MiddleSection />
                <WorkSection />
                <Features/>
              </>
            }
          />

          {/* 404 Not Found */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center py-20">
                <h1 className="text-3xl text-gray-500">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
