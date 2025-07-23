import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import AboutUs from "./components/AboutUs/AboutUs";
import CourseBanner from "./components/Courses/CourseBanner";
import Course from "./components/pages/Courses";
import ContactPage from "./components/pages/ContactPage"

// Common Components
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";
import CTASection from "./components/home/CTASection";

// Home Sections
import Banner from "./components/landing/Banner";
import Middle from "./components/landing/Middle";
import SuccessSection from "./components/landing/SuccessSection";
import FAQ from "./components/landing/FAQ";
import ResearchSkills from "./components/landing/ResearchSkills";
import Work from "./components/landing/Work";

// Editing & Proofreading Service
// import GenericServicePage from "./components/services/GenericServicePage";



const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <FloatingWhatsapp />

        <Routes>
          {/* Home */}
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

          {/* About */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Courses */}
          <Route path="/courses" element={<CourseBanner />} />
          <Route path="/courses/all" element={<Course />} />
          <Route path="/courses/:slug" element={<Course />} />

          {/* Editing & Proofreading
          <Route path="/editing-and-proofreading" 
          element=
          {
          <GenericServicePage />
          } /> */}
          

          {/* Contact Us */}
          <Route path="/contact-us" element={<ContactPage />} />  


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
