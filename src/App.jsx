import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./components/pages/homepage"; // ✅ NEW!
import AboutUs from "./components/AboutUs/AboutUs";
import CourseBanner from "./components/Courses/CourseBanner";
import Course from "./components/pages/Courses";
import ContactPage from "./components/pages/ContactPage";
import Services from "./components/pages/Services";

// Common Components
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import FloatingWhatsapp from "./components/home/FloatingWhatsapp";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <FloatingWhatsapp />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Homepage />} />

          {/* About */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Courses */}
          <Route path="/courses" element={<CourseBanner />} />
          <Route path="/courses/all" element={<Course />} />
          <Route path="/courses/:slug" element={<Course />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Contact */}
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
