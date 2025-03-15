// File: components/About.tsx
"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
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
            <p className="text-gray-300">
              From our headquarters to international markets, we maintain the 
              highest standards throughout our global distribution network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
