import React from "react";
import {
  FaRegCheckCircle,
  FaLeaf,
  FaDove,
  FaHandSparkles,
  FaPills,
  FaSkullCrossbones,
} from "react-icons/fa"; // Icons for certifications

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Paraben Free",
      icon: <FaRegCheckCircle />,
      description:
        "Our perfumes are free from parabens, ensuring a safer, healthier option for our customers.",
    },
    {
      id: 2,
      title: "Natural Ingredients",
      icon: <FaLeaf />,
      description:
        "We only use the finest natural ingredients, ensuring purity and quality in every bottle.",
    },
    {
      id: 3,
      title: "Sulphate Free",
      icon: <FaPills />,
      description:
        "Our fragrances are free from sulphates, making them gentler on your skin and hair.",
    },
    {
      id: 4,
      title: "Cruelty Free",
      icon: <FaDove />,
      description:
        "We stand by our commitment to being cruelty-free, ensuring no animals are harmed in the making of our perfumes.",
    },
    {
      id: 5,
      title: "Non Carcinogenic",
      icon: <FaSkullCrossbones />,
      description:
        "We ensure our perfumes are free from carcinogenic substances, promoting safe use for all our customers.",
    },
    {
      id: 6,
      title: "Silicone Free",
      icon: <FaHandSparkles />,
      description:
        "Our perfumes are free from silicone, ensuring that they are safe and of the highest quality.",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">
            Certifications and Compliance
          </h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-black border border-gray-800 p-6 rounded-lg"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-6 text-gray-300 text-4xl">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                {cert.title}
              </h3>
              <p className="text-gray-400">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
