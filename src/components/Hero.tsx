import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

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
          src="/hero.jpg"
          alt="Luxury perfume bottle"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80"></div>
      <div className="container relative h-full mx-auto px-6 flex items-center justify-center md:justify-end">
        <div className="w-full md:w-1/2 text-center md:text-right space-y-6 md:space-y-8">
          {/* Animate the whole block together */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              NOZE<span className="text-gray-600">EXPORTS</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300">
              Captivating scents that define your presence
            </p>
            <p className="text-sm md:text-lg text-gray-400">
              Exporting luxury fragrances worldwide
            </p>
            <button
              onClick={() => scrollToSection("catalogue")}
              className="bg-gray-800 border border-gray-600 px-6 py-2 md:px-8 md:py-3 hover:bg-gray-700 transition duration-300 text-sm md:text-lg"
            >
              DISCOVER{" "}
              <BsArrowRight className="inline-block ml-2 font-bold text-lg md:text-2xl" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
