"use client";
import React from "react";
import Image from "next/image";
import BorderedTitle from "@/shared/BorderedTitle";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-96 w-full mb-6 md:mb-0 border border-gray-800 overflow-hidden rounded-sm">
              <Image
                src={"/about-us.jpg"} // Replace with your actual image path
                alt="Perfume crafting"
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 space-y-6">
						<BorderedTitle title={"ABOUT US"}/>
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
