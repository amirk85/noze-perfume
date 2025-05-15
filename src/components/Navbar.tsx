"use client";
import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";  // Importing the icons from react-icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className="text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              NOZE<span className="text-gray-600">EXPORTS</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-300 hover:text-white transition cursor-pointer text-sm md:text-base"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("catalogue")}
              className="text-gray-300 hover:text-white transition cursor-pointer text-sm md:text-base"
            >
              CATALOGUE
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition cursor-pointer text-sm md:text-base"
            >
              ABOUT US
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {/* Using react-icons to display the hamburger or close icon */}
              {isMenuOpen ? (
                <MdClose size={30} />  // Close icon when the menu is open
              ) : (
                <MdMenu size={30} />  // Hamburger icon when the menu is closed
              )}
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 right-6 bg-black/50 text-white w-48 py-4 px-6 rounded-lg shadow-lg border border-gray-900">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block mb-4 text-sm"
                >
                  HOME
                </button>
                <button
                  onClick={() => scrollToSection("catalogue")}
                  className="block mb-4 text-sm"
                >
                  CATALOGUE
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-sm"
                >
                  ABOUT US
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
