import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[69px] bg-[#212D35] fixed top-0 left-0 z-50 flex items-center px-8 shadow">
        {/* Logo */}
        <div className="font-semibold text-gray-800">
          <img src={Logo} alt="Logo" className="h-auto max-h-10 w-auto" />
        </div>

        {/* Desktop Navigation Container */}
        <div className="hidden md:flex justify-center items-center w-full text-white font-mulish text-base font-medium ml-[120px] mr-4">
          {/* Centered Links */}
          <div className="flex space-x-8 mx-auto">
            <a href="#" className="hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="hover:text-green-600 transition-colors">About Us</a>

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
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">Thesis</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">Research Paper</a>
                </div>
              )}
            </div>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                <span>Courses</span>
                <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">ChatGPT for Medical Research</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-green-600">Medical Data Analysis with R</a>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button on the right */}
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212D35] w-full fixed top-[69px] left-0 z-50 flex flex-col items-center gap-4 py-6 text-white text-sm md:text-base font-mulish font-medium shadow overflow-y-auto max-h-screen">
          <a href="#" className="hover:text-green-500 transition-colors">Home</a>
          <a href="#" className="hover:text-green-500 transition-colors">About</a>

          {/* Mobile Services Dropdown */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center space-x-1 hover:text-green-500 transition-colors"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="mt-2 flex flex-col items-center gap-2">
                <a href="#" className="text-gray-300 hover:text-green-500">Thesis</a>
                <a href="#" className="text-gray-300 hover:text-green-500">Research Paper</a>
              </div>
            )}
          </div>

          {/* Mobile Courses Dropdown */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="flex items-center space-x-1 hover:text-green-500 transition-colors"
            >
              <span>Courses</span>
              <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesDropdownOpen && (
              <div className="mt-2 flex flex-col items-center gap-2">
                <a href="#" className="text-gray-300 hover:text-green-500">ChatGPT for Medical Research</a>
                <a href="#" className="text-gray-300 hover:text-green-500">Medical Data Analysis with R</a>
              </div>
            )}
          </div>

          {/* CTA */}
          <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-950">
            Begin Your Journey
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
