import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const reloadAndNavigate = (path) => {
    window.location.href = path; // full reload from top
  };

  return (
    <>
      {/* ✅ Top Navbar */}
      <div className="w-full h-[69px] bg-black/50 backdrop-blur-sm fixed top-0 left-0 z-50 flex items-center px-4 md:px-8 shadow">
        {/* ✅ Logo */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            onClick={() => reloadAndNavigate("/")}
            className="h-auto max-h-10 w-auto cursor-pointer"
          />
        </div>

        {/* ✅ Desktop Nav */}
        <div className="hidden md:flex justify-center items-center w-full text-white text-base font-medium ml-[120px] mr-4">
          <div className="flex space-x-8 mx-auto">
            <button
              onClick={() => reloadAndNavigate("/")}
              className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => reloadAndNavigate("/about-us")}
              className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => reloadAndNavigate("/services")}
              className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors"
            >
              Services
            </button>

            {/* ✅ Desktop Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <div className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors cursor-pointer">
                <span>Courses</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>

              {coursesDropdownOpen && (
                <div className="absolute left-0 top-full bg-white rounded shadow-lg border border-gray-200 py-2 w-64 z-50">
                  <button
                    onClick={() => reloadAndNavigate("/courses/bioinformatics")}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                  >
                    Bioinformatics Foundations
                  </button>
                  <button
                    onClick={() => reloadAndNavigate("/courses/research-methods")}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                  >
                    Research Methodology Bootcamp
                  </button>
                  <button
                    onClick={() => reloadAndNavigate("/courses/scientific-writing")}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                  >
                    Scientific Writing for Publication
                  </button>
                  <button
                    onClick={() => reloadAndNavigate("/courses/data-analysis")}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                  >
                    Data Analysis with R and SPSS
                  </button>
                  <button
                    onClick={() => reloadAndNavigate("/courses/ai-ml")}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                  >
                    Introduction to AI & ML for Researchers
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => reloadAndNavigate("/contact-us")}
              className="px-2 py-1 rounded hover:bg-green-700 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="ml-auto">
            <button
              onClick={() => reloadAndNavigate("/contact-us")}
              className="bg-[#00A86B] text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors"
            >
              Begin Your Journey
            </button>
          </div>
        </div>

        {/* ✅ Mobile Toggle */}
        <div className="md:hidden text-white ml-auto z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212D35] w-full fixed top-[69px] left-0 z-50 flex flex-col items-center gap-4 py-6 px-4 text-white text-sm font-medium shadow overflow-y-auto max-h-screen overflow-x-hidden">
          <button onClick={() => reloadAndNavigate("/")} className="hover:text-green-500">Home</button>
          <button onClick={() => reloadAndNavigate("/about-us")} className="hover:text-green-500">About Us</button>
          <button onClick={() => reloadAndNavigate("/services")} className="hover:text-green-500">Services</button>

          <button
            onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
            className="flex items-center space-x-1 hover:text-green-500"
          >
            Courses
            <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {coursesDropdownOpen && (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => reloadAndNavigate("/courses/bioinformatics")}
                className="text-gray-300 hover:text-green-500"
              >
                Bioinformatics Foundations
              </button>
              <button
                onClick={() => reloadAndNavigate("/courses/research-methods")}
                className="text-gray-300 hover:text-green-500"
              >
                Research Methodology Bootcamp
              </button>
              <button
                onClick={() => reloadAndNavigate("/courses/scientific-writing")}
                className="text-gray-300 hover:text-green-500"
              >
                Scientific Writing for Publication
              </button>
              <button
                onClick={() => reloadAndNavigate("/courses/data-analysis")}
                className="text-gray-300 hover:text-green-500"
              >
                Data Analysis with R and SPSS
              </button>
              <button
                onClick={() => reloadAndNavigate("/courses/ai-ml")}
                className="text-gray-300 hover:text-green-500"
              >
                Introduction to AI & ML for Researchers
              </button>
            </div>
          )}

          <button onClick={() => reloadAndNavigate("/contact-us")} className="hover:text-green-500">
            Contact Us
          </button>

          <button
            onClick={() => reloadAndNavigate("/contact-us")}
            className="bg-[#00A86B] text-white px-4 py-2 rounded-full hover:bg-green-950"
          >
            Begin Your Journey
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
