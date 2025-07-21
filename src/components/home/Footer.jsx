import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../assets/Logo.png"
import { FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-[#212D35] text-white pt-28 pb-8">
      <div className="max-w-6xl mx-auto my-2 px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo + description */}
        <div className="col-span-2">
          <img src={Logo} alt="Logo" />
          <p className="mt-4 text-gray-400">
            SciScribe supports medical students and researchers with thesis writing, research paper help, and practical training.
            We make academic writing simpler, faster, and more confident.
          </p>
          <div className="flex mt-4 space-x-4 text-xl">
              <a href="#"><FaFacebook /></a>
              <a href="#">< FaInstagram/></a>
              <a href="#"><FaTwitter/></a>
</div>

        </div>

        {/* Columns */}
        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-gray-400 space-y-1">
           <li><Link to="/services/research">Research Paper</Link></li>
            <li><Link to="/services/thesis">Thesis Paper</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            
          </ul>
        </div>

        <div>
          <h2 className="font-extrabold font-sans  rounded mb-2">Subscribe to our Newsletter</h2>
          <form className="flex flex-row space-x-2 ">
            
            
            <input
              type="email"
              placeholder="your@email.com"
              className="px-3 py-2 rounded bg-white text-black"
            />
            <button className="bg-[#00A86B] hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider  */}
     <div className="mt-6 pt-4 px-6 text-center text-gray-500 text-sm">
  
  <div className="flex justify-center">
    <div className="border-t border-gray-700 w-1/2"></div>
  </div>

  {/* Copyright */}
  <div className="mt-4">
    © {new Date().getFullYear()} SciScribe. All rights reserved.
  </div>
</div>
     
    </footer>

  );
};

export default Footer;