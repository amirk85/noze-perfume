// File: components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
            NOZE<span className="text-gray-600">PERFUME</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Captivating scents that define your presence
          </p>
          <p className="text-lg text-gray-400">
            Exporting luxury fragrances worldwide
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
  );
};

export default Hero;
