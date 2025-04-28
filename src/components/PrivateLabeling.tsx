"use client";
import React from "react";
import Image from "next/image";
import { FaBox, FaChartLine, FaStar } from "react-icons/fa"; // Icons for the benefits

const Benefits = [
  {
    title: "Wide Product Range",
    description:
      "Choose from a diverse range of high-quality perfumes, colognes, and fragrance blends to expand your product offerings.",
    icon: <FaBox size={28} className="text-white" />,
  },
  {
    title: "Boost Profit Margins",
    description:
      "Private labeling allows you to increase your profitability by selling premium branded products at higher margins.",
    icon: <FaChartLine size={28} className="text-white" />,
  },
  {
    title: "Premium Quality",
    description:
      "We ensure each product meets the highest standards of quality, ensuring customer satisfaction and lasting impressions.",
    icon: <FaStar size={28} className="text-white" />,
  },
];

const PrivateLabeling = () => {
  return (
    <section id="private-labeling" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-gray-300 space-y-8">
            {/* Header inside text */}
            <p className="text-4xl font-bold mb-4 text-white">
              Private Labeling Solutions
            </p>
            <div className="w-24 h-1 bg-gray-400 mb-8"></div>
            <p className="text-xl">
              <span className="font-semibold">NozeExports </span>
              offers private labeling services for wholesalers, retail chains,
              and distributors in the international market. We provide exclusive
              branding that enhances your brand identity and creates
              long-lasting customer loyalty. From selecting the finest
              fragrances to delivering a unique, high-quality product, we ensure
              premium private labeling that meets the highest standards.
            </p>

            <h3 className="text-2xl font-semibold text-white">
              Benefits Include:
            </h3>
            <div className="space-y-4">
              {Benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative h-80 md:h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/private-labeling.jpg" // Replace with your image
              alt="Private Labeling Solutions"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLabeling;
