import React from "react";
import Image from "next/image";
import { FiTruck, FiHeart } from "react-icons/fi";
import { FaRecycle, FaDollarSign } from "react-icons/fa";
import BorderedTitle from "@/shared/BorderedTitle";

const USP = () => {
  const uspItems = [
    {
      id: 1,
      title: "Direct Sourcing",
      description:
        "We source directly from trusted suppliers for authentic, high-quality products.",
      icon: <FiTruck className="text-white w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: 2,
      title: "Sustainable Practices",
      description: "We prioritize eco-friendly processes to protect the planet.",
      icon: <FaRecycle className="text-white w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: 3,
      title: "Customized Care",
      description: "Personalized support tailored to your unique needs.",
      icon: <FiHeart className="text-white w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      id: 4,
      title: "Competitive Pricing",
      description: "Premium products at competitive prices without compromise.",
      icon: <FaDollarSign className="text-white w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  return (
    <section id="usp" className="py-8 bg-gray-950/50 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Image */}
          <div className="hidden md:block w-full md:w-1/2 relative h-60 md:h-[500px] border border-gray-800 overflow-hidden rounded-sm">
            <Image
              src="/usp-image.jpg"
              alt="Unique Selling Proposition"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-gray-300 space-y-6 md:space-y-8">
            <BorderedTitle
              title="Unique Selling Proposition (USP)"
              className="grid place-items-center text-center md:place-items-start md:text-start"
            />

            {/* Grid layout for USP items */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {uspItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center md:items-start md:text-left gap-3">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold md:text-xl lg:text-2xl text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 md:text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
