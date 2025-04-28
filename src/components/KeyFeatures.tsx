import { FaShieldAlt, FaGlobe, FaTags } from "react-icons/fa";
import React from "react";

const KeyFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Quality Assurance",
            description: "Every product undergoes strict quality checks to ensure excellence.",
            icon: <FaShieldAlt className="w-12 h-12 text-gray-400 mb-4" />,
        },
        {
            id: 2,
            title: "Responsible Sourcing",
            description: "We prioritize ethical and sustainable sourcing for all ingredients.",
            icon: <FaGlobe className="w-12 h-12 text-gray-400 mb-4" />,
        },
        {
            id: 3,
            title: "Competitive Pricing",
            description: "Premium quality at accessible prices without compromise.",
            icon: <FaTags className="w-12 h-12 text-gray-400 mb-4" />,
        },
    ];

    return (
        <section id="key-features" className="py-24 bg-gray-950/50">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-4">Key Features</h2>
                    <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature) => (
                        <div key={feature.id} className="text-center">
                            <div className="flex justify-center">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
