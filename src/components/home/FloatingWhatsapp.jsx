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
      href="https://wa.me/923199810250"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <span className="absolute inset-0 rounded-full bg-green-600/20 animate-ping"></span>

      <div
        className={`relative z-10 p-4 rounded-full text-white bg-green-600 hover:bg-green-800 shadow-lg transition-all duration-300 ${
          scrolled ? "scale-110 shadow-3xl" : "scale-100"
        }`}
      >
        <FaWhatsapp size={30} />
      </div>
    </a>
  );
};

export default FloatingWhatsapp;
