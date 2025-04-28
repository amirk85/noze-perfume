// File: components/Commitment.tsx
"use client";
import BorderedTitle from "@/shared/BorderedTitle";
import React from "react";
import { FaStar, FaRecycle, FaHandsHelping } from "react-icons/fa"; // Icons for commitment

// Define the list of commitment items outside of the JSX
const commitmentList = [
  {
    title: "Quality",
    description:
      "At NozeExports, we are committed to delivering the highest quality perfumes. Every fragrance is crafted with precision and the finest ingredients, ensuring an exceptional experience for our customers.",
    icon: <FaStar size={28} className="text-white" />,
  },
  {
    title: "Sustainability",
    description:
      "We believe in sustainability and take steps to ensure that our products are eco-friendly. From sourcing ingredients responsibly to using recyclable packaging, NozeExports prioritizes environmental well-being.",
    icon: <FaRecycle size={28} className="text-white" />,
  },
  {
    title: "Ethical Trade",
    description:
      "NozeExports is committed to ethical trade practices. We work closely with suppliers who share our values, ensuring fair wages and safe working conditions for everyone involved in the production of our perfumes.",
    icon: <FaHandsHelping size={28} className="text-white" />,
  },
];

const Commitment = () => {
  return (
    <section id="commitment" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative h-80 md:h-[500px] border border-gray-800 overflow-hidden rounded-sm">
            <img
              src="/commitment.jpg" // Replace with the actual image path
              alt="Commitment"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-gray-300 space-y-8">
            {/* Header inside text */}
            <BorderedTitle title={"Our Commitment"} />
            {commitmentList.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{commitment.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-400">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
