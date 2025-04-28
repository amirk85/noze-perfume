import React from "react";
import {
  FaShippingFast,
  FaCheckCircle,
  FaTag,
  FaHeadset,
  FaPeopleCarry,
  FaLeaf,
  FaCertificate,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Direct Sourcing",
      icon: <FaShippingFast />,
      description:
        "We directly source high-quality fragrance ingredients from renowned perfumeries worldwide, ensuring premium quality and authenticity.",
    },
    {
      id: 2,
      title: "Quality Assurance",
      icon: <FaCheckCircle />,
      description:
        "Each fragrance goes through stringent quality checks to ensure consistency, longevity, and excellence in every bottle.",
    },
    {
      id: 3,
      title: "Competitive Pricing",
      icon: <FaTag />,
      description:
        "We offer the finest perfumes at affordable prices without compromising on quality, making luxury scents accessible to all.",
    },
    {
      id: 4,
      title: "Customized Customer Care",
      icon: <FaHeadset />,
      description:
        "Our team offers personalized fragrance consultations, helping you find the perfect scent that suits your personality and preferences.",
    },
    {
      id: 5,
      title: "Logistics and Supply Chain Management",
      icon: <FaPeopleCarry />,
      description:
        "We ensure efficient and timely delivery, ensuring that your perfume orders reach you quickly and in perfect condition.",
    },
    {
      id: 6,
      title: "Sustainable Trade Initiatives",
      icon: <FaLeaf />,
      description:
        "We prioritize sustainability by sourcing ingredients from eco-friendly suppliers and ensuring our packaging is recyclable.",
    },
    {
      id: 7,
      title: "Compliance and Certification Services",
      icon: <FaCertificate />,
      description:
        "All our fragrances comply with industry standards, and we provide necessary certifications to ensure safety and authenticity.",
    },
    {
      id: 8,
      title: "Advanced Technology Integration",
      icon: <FaCogs />,
      description:
        "We incorporate state-of-the-art technology to enhance our production processes, ensuring precision and superior craftsmanship in every bottle.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black border border-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center justify-center mb-6 text-gray-300 text-4xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
