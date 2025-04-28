import React from "react";
import Image from "next/image";
import { FiTruck, FiHeart } from "react-icons/fi"; // Sourcing and Care icons
import { FaRecycle, FaDollarSign } from "react-icons/fa"; // Sustainability and Pricing icons
import BorderedTitle from "@/shared/BorderedTitle";

const USP = () => {
  // List of USP items
  const uspItems = [
    {
      title: "Direct Sourcing",
      description:
        "We source directly from trusted suppliers, ensuring authenticity, quality, and better value for our customers.",
      icon: <FiTruck size={28} className="text-white" />,
    },
    {
      title: "Sustainable Practices",
      description:
        "Committed to sustainability, we prioritize eco-friendly processes to protect our planet for future generations.",
      icon: <FaRecycle size={28} className="text-white" />,
    },
    {
      title: "Customized Care",
      description:
        "Tailored solutions and personalized support to meet the unique needs of every client.",
      icon: <FiHeart size={28} className="text-white" />,
    },
    {
      title: "Competitive Pricing",
      description:
        "Offering premium quality products at highly competitive prices without compromising on standards.",
      icon: <FaDollarSign size={28} className="text-white" />,
    },
  ];

  return (
    <section id="usp" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative h-80 md:h-[500px] border border-gray-800 overflow-hidden rounded-sm">
            <Image
              src="/usp-image.jpg" // your image here
              alt="Unique Selling Proposition"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-gray-300 space-y-8">
            <BorderedTitle title={"Unique Selling Proposition (USP)"} />
            {uspItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
