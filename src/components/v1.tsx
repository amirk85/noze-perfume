"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const NozePerfumePage = () => {
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
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navbar */}
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
                NOZE<span className="text-gray-400">PERFUME</span>
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

      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={"/hero.jpg"}
            alt="Luxury perfume bottle"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80"></div>
        <div className="container relative h-full mx-auto px-6 flex items-center justify-end">
          <div className="w-full md:w-1/2 text-right space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              NOZE<span className="text-gray-400">PERFUME</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Captivating scents that define your presence
            </p>
            <button
              onClick={() => scrollToSection("catalogue")}
              className="bg-gray-800 border border-gray-600 px-8 py-3 hover:bg-gray-700 transition duration-300"
            >
              DISCOVER
            </button>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">COLLECTION</h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-black border border-gray-800 group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={"/products/midnight.jpg"}
                  alt="Noze Midnight"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">MIDNIGHT</h3>
                <p className="text-gray-400 mb-4">
                  Deep woody notes with hints of vanilla
                </p>
                <p className="text-xl font-light">$180</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-black border border-gray-800 group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={"/products/velvet.jpg"}
                  alt="Noze Velvet"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">VELVET</h3>
                <p className="text-gray-400 mb-4">
                  Floral bouquet with amber undertones
                </p>
                <p className="text-xl font-light">$220</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-black border border-gray-800 group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={"/products/ethereal.jpg"}
                  alt="Noze Ethereal"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">ETHEREAL</h3>
                <p className="text-gray-400 mb-4">
                  Citrus top notes with musk base
                </p>
                <p className="text-xl font-light">$195</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src={"/about-us.jpg"}
                  alt="Perfume crafting"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">ABOUT US</h2>
              <div className="w-24 h-1 bg-gray-400"></div>
              <p className="text-gray-300">
                Founded in 2020, Noze Perfume is a luxury fragrance house
                dedicated to the art of scent creation. Our master perfumers
                blend rare ingredients sourced from around the world to craft
                distinctive signature scents.
              </p>
              <p className="text-gray-300">
                Each Noze perfume is meticulously developed and aged to
                perfection, bottled in hand-crafted vessels that reflect our
                commitment to excellence and artistry.
              </p>
              <p className="text-gray-300">
                We believe that fragrance is an extension of personality — an
                invisible accessory that leaves an unforgettable impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                NOZE<span className="text-gray-400">PERFUME</span>
              </h3>
              <p className="text-gray-400">
                Luxury fragrances for the discerning individual
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
              <p className="text-gray-400">info@nozeperfume.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 Noze Perfume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NozePerfumePage;
