// File: components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold tracking-tighter cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              NOZE<span className="text-gray-600">EXPORTS</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-white transition"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("catalogue")}
              className="text-gray-300 hover:text-white transition"
            >
              CATALOGUE
            </button>
            <button
              onClick={() => scrollToSection("export")}
              className="text-gray-300 hover:text-white transition"
            >
              EXPORT
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition"
            >
              ABOUT US
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
