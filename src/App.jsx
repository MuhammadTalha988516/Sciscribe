import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import AboutUs from "./components/pages/AboutPage";
import Course from "./components/pages/Courses"; // ✅ Uncommented & make sure it exists!

// Common
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";

// Home
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import SuccessSection from "./components/landing/SuccessSection";
import FAQ from "./components/landing/FAQ";
import ResearchSkills from "./components/landing/ResearchSkills";
import Work from "./components/landing/Work";

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

          {/* Courses Wrapper: all and single */}
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/:slug" element={<Course />} />

          {/* 404 */}
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
