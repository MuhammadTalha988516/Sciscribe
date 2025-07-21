import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full h-[69px] bg-[#212D35] fixed top-0 left-0 z-50 flex items-center px-8 shadow">
        {/* Logo */}
        <div className="font-semibold text-gray-800">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-auto max-h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center w-full text-white font-mulish text-base font-medium ml-[120px] mr-4">
          <div className="flex space-x-8 mx-auto">
            <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
            <Link to="/about-us" className="hover:text-green-600 transition-colors">About Us</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesDropdownOpen && (
<<<<<<< HEAD
                <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    to="/editing-and-proofreading"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600"
                  >
                    Editing & Proofreading
                  </Link>
=======
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link to="/services/thesis" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">Thesis</Link>
                  <Link to="/services/research" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">Research Paper</Link>
>>>>>>> landingpage
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* Courses Dropdown (Button Only) */}
            <div className="relative flex items-center space-x-1 cursor-pointer">
              <button
                onClick={() => setCoursesDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-1 hover:text-green-600 text-white"
              >
                <span>Courses</span>
                <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
=======
            {/* Courses Link (triggers below full-width dropdown) */}
            <div className="relative flex items-center space-x-1 cursor-pointer">
  <button
    onClick={() => setCoursesDropdownOpen((prev) => !prev)}
    className="flex items-center space-x-1 hover:text-green-600 text-white"
  >
    <span>Courses</span>
    <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
  </button>
</div>

>>>>>>> landingpage
          </div>

          {/* CTA */}
          <div className="ml-auto">
            <button className="bg-[#00A86B] text-white px-4 py-2 rounded-lg hover:bg-green-950 transition-colors">
              Begin Your Journey
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white ml-auto z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Courses Full-width Dropdown */}
      {coursesDropdownOpen && (
        <div
          onMouseLeave={() => setCoursesDropdownOpen(false)}
          className="w-full min-h-[280px] bg-white shadow-md border-t border-gray-200 z-40 pt-[69px] mt-10"
=======
      {/* 👇 Full-width Courses Dropdown (pushes page down) */}
      {coursesDropdownOpen && (
        <div
          onMouseLeave={() => setCoursesDropdownOpen(false)}
          className="w-full min-h-[280px] bg-white shadow-md border-t border-gray-200 z-40 pt-[69px] mt-10" // pushes below fixed navbar
>>>>>>> landingpage
        >
          <div className="max-w-7xl mx-auto px-8 py-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-mulish">
            <Link to="/courses/bioinformatics" className="text-gray-800 font-medium hover:text-green-600">
              Bioinformatics Foundations
            </Link>
            <Link to="/courses/research-methods" className="text-gray-800 font-medium hover:text-green-600">
              Research Methodology Bootcamp
            </Link>
            <Link to="/courses/scientific-writing" className="text-gray-800 font-medium hover:text-green-600">
              Scientific Writing for Publication
            </Link>
            <Link to="/courses/data-analysis" className="text-gray-800 font-medium hover:text-green-600">
              Data Analysis with R and SPSS
            </Link>
            <Link to="/courses/ai-ml" className="text-gray-800 font-medium hover:text-green-600">
              Introduction to AI & ML for Researchers
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212D35] w-full fixed top-[69px] left-0 z-50 flex flex-col items-center gap-4 py-6 text-white text-sm font-mulish font-medium shadow overflow-y-auto max-h-screen">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500">Home</Link>
<<<<<<< HEAD
          <Link to="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-green-500">About Us</Link>

          {/* Services (Mobile) */}
=======
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-green-500">About</Link>

          {/* Services */}
>>>>>>> landingpage
          <div className="flex flex-col items-center">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center space-x-1 hover:text-green-500"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="mt-2 flex flex-col items-center gap-2">
<<<<<<< HEAD
                <Link
                  to="/editing-and-proofreading"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-green-500"
                >
                  Editing & Proofreading
                </Link>
=======
                <Link to="/services/thesis" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">Thesis</Link>
                <Link to="/services/research" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">Research Paper</Link>
>>>>>>> landingpage
              </div>
            )}
          </div>

<<<<<<< HEAD
          {/* Courses (Mobile) */}
=======
          {/* Courses */}
>>>>>>> landingpage
          <div className="flex flex-col items-center">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="flex items-center space-x-1 hover:text-green-500"
            >
              <span>Courses</span>
              <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesDropdownOpen && (
              <div className="mt-2 flex flex-col items-center gap-2">
<<<<<<< HEAD
                <Link to="/courses/chatgpt" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">
                  ChatGPT for Medical Research
                </Link>
                <Link to="/courses/r-data" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">
                  Medical Data Analysis with R
                </Link>
=======
                <Link to="/courses/chatgpt" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">ChatGPT for Medical Research</Link>
                <Link to="/courses/r-data" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-green-500">Medical Data Analysis with R</Link>
>>>>>>> landingpage
              </div>
            )}
          </div>

          <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-950">
            Begin Your Journey
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
