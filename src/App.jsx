import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import AboutUs from "./components/AboutUs/AboutUs";
import CourseBanner from "./components/Courses/CourseBanner";
import Course from "./components/pages/Courses";

// Common Components
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";
import Features from "./components/home/features";

// Home
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import SuccessSection from "./components/landing/SuccessSection";
import FAQ from "./components/landing/FAQ";
import ResearchSkills from "./components/landing/ResearchSkills";
import Work from "./components/landing/Work";

// Editing & Proofreading Service Sections
import BannerSection from "./components/EdtandProfSrv/BannerSection";
import MiddleSection from "./components/EdtandProfSrv/MiddleSection";
import WorkSection from "./components/EdtandProfSrv/WorkSection";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
                </main>
              </>
            }
          />

          {/* About Page */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Courses Pages */}
          <Route path="/courses" element={<CourseBanner />} />
          <Route path="/courses/all" element={<Course />} />
          <Route path="/courses/:slug" element={<Course />} />

          {/* Editing & Proofreading Service Page */}
          <Route
            path="/editing-and-proofreading"
            element={
              <>
                <BannerSection />
                <MiddleSection />
                <WorkSection />
                <Features />
              </>
            }
          />

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
