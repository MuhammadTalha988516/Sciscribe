import React from 'react';
import Logo from "../../assets/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#212D35] text-white pt-28 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo + description */}
        <div className="col-span-2">
          <img src={Logo} alt="Logo" />
          <p className="mt-4 text-gray-400">
            SciScribe supports medical students and researchers with thesis writing, research paper help, and practical training.
            We make academic writing simpler, faster, and more confident.
          </p>
          <div className="flex mt-4 space-x-4 text-xl">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Columns */}
        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Research Paper</li>
            <li>Thesis Paper</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Home</li>
            <li>Courses</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h2 className="font-extrabold font-sans   mb-2">Subscribe to our Newsletter</h2>
          <form className="flex flex-col space-y-2">
            
    
            <input
              type="email"
              placeholder="you@email.com"
              className="px-3 py-2 rounded text-black"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider and copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SciScribe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

