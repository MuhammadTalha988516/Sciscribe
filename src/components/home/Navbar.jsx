import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { servicesPage } from "../data/Data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full h-[69px] bg-[#212D35] fixed top-0 left-0 z-50 flex items-center px-8 shadow">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-auto max-h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center w-full text-white text-base font-medium ml-[120px] mr-4">
          <div className="flex space-x-8 mx-auto">
            <Link to="/" className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors">
              About Us
            </Link>

            {/* ✅ Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg border border-gray-200 py-2 w-64 z-50">
                  {servicesPage.services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <Link
                to="/courses"
                className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors"
              >
                <span>Courses</span>
                <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>
              {coursesDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white rounded shadow-lg border border-gray-200 py-2 w-64 z-50">
                  <Link to="/courses/bioinformatics" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">
                    Bioinformatics Foundations
                  </Link>
                  <Link to="/courses/research-methods" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">
                    Research Methodology Bootcamp
                  </Link>
                  <Link to="/courses/scientific-writing" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">
                    Scientific Writing for Publication
                  </Link>
                  <Link to="/courses/data-analysis" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">
                    Data Analysis with R and SPSS
                  </Link>
                  <Link to="/courses/ai-ml" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">
                    Introduction to AI & ML for Researchers
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact-us" className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="ml-auto">
            <button className="bg-[#00A86B] text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors">
              Begin Your Journey
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white ml-auto z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212D35] w-full fixed top-[69px] left-0 z-50 flex flex-col items-center gap-4 py-6 text-white text-sm font-medium shadow overflow-y-auto max-h-screen">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500">
            Home
          </Link>
          <Link to="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-green-500">
            About Us
          </Link>

          {/* ✅ Mobile Services Link + Toggle */}
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-500"
          >
            Services
          </Link>
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className="flex items-center space-x-1 hover:text-green-500"
          >
            <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesDropdownOpen && (
            <div className="mt-2 flex flex-col items-center gap-2">
              {servicesPage.services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-green-500"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Courses */}
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-500"
          >
            Courses
          </Link>
          <button
            onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
            className="flex items-center space-x-1 hover:text-green-500"
          >
            <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {coursesDropdownOpen && (
            <div className="mt-2 flex flex-col items-center gap-2">
              <Link to="/courses/chatgpt" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">
                AI for Medical Research
              </Link>
              <Link to="/courses/r-data" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">
                Data Analysis with R
              </Link>
            </div>
          )}

          <Link to="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-green-500">
            Contact Us
          </Link>

          <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-950">
            Begin Your Journey
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
