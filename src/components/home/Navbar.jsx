import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[69px] bg-[#212D35] fixed top-0 left-0 z-50 flex items-center justify-between px-8 shadow">

        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-800">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-white font-mulish text-base font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">Contact</a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-950">
            Begin Your Journey
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212D35] w-full fixed top-[69px] left-0 z-40 flex flex-col items-center gap-4 py-6 text-white text-base font-mulish font-medium shadow">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
          <button className="bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-950">
            Begin Your Journey
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
