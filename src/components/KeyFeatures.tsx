import {
  FaShieldAlt,
  FaGlobe,
  FaTags,
  FaLeaf,
} from "react-icons/fa";
import React from "react";
import BorderedTitle from "@/shared/BorderedTitle";

const KeyFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Quality Assurance",
      description:
        "Every product undergoes strict quality checks to ensure excellence.",
      icon: (
        <FaShieldAlt className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-3 md:mb-4" />
      ),
    },
    {
      id: 2,
      title: "Responsible Sourcing",
      description:
        "We prioritize ethical and sustainable sourcing for all ingredients.",
      icon: (
        <FaGlobe className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-3 md:mb-4" />
      ),
    },
    {
      id: 3,
      title: "Competitive Pricing",
      description: "Premium quality at accessible prices without compromise.",
      icon: <FaTags className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-3 md:mb-4" />,
    },
    {
      id: 4,
      title: "Eco-Friendly",
      description: "We minimize environmental impact through green practices.",
      icon: <FaLeaf className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-3 md:mb-4" />,
    },
  ];

  return (
    <section
      id="key-features"
      className="py-8 bg-gray-950/50 md:py-12 lg:py-20"
    >
      <div className="container mx-auto px-6">
        <BorderedTitle title="Key Features" className="grid place-items-center" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-sm font-semibold mb-1 md:text-xl lg:text-2xl">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-400 md:text-sm lg:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
