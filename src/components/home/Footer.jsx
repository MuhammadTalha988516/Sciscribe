import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#212D35] text-white pt-28 pb-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2">
          <img src={Logo} alt="Logo" />
          <p className="mt-4 text-gray-400">
           SciScribe empowers researchers and students across disciplines with expert support in scientific writing, publication guidance, and practical research training. We simplify the research process, making academic writing clearer, faster, and more impactful.
          </p>
          <div className="flex mt-4 space-x-4 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </div>

      
      </div>

      <div className="mt-6 pt-4 px-4 text-center text-gray-500 text-sm">
        <div className="flex justify-center">
          <div className="border-t border-gray-700 w-1/2"></div>
        </div>
        <div className="mt-4">
          © {new Date().getFullYear()} SciScribe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
