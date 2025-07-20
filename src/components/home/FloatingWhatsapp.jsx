import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919999999999" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Outer Circle Effect */}
      <span className="absolute inset-0 rounded-full bg-green-600/20 animate-ping"></span>

      {/* WhatsApp Button */}
      <div
        className={`relative z-10
          p-4 rounded-full transition-all duration-300
          text-white bg-green-600 hover:bg-green-700
          shadow-lg hover:shadow-xl
          ${scrolled ? "scale-110 shadow-2xl" : "scale-100"}
        `}
      >
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
};

export default FloatingWhatsapp;
