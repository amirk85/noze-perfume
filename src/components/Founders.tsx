// File: components/Founders.tsx
"use client";
import React from "react";

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: "Rashid Babu",
      image: "/founders/rashid.jpg", // Replace with the actual image path
      description:
        "Rashid Babu is a graduate in Business Administration from the University of Lahore. With over 10 years of experience in the perfume industry, Rashid has developed a keen sense for premium fragrance sourcing and is responsible for managing the brand's operations. He is passionate about blending modern marketing strategies with timeless fragrance creation.",
    },

    {
      id: 2,
      name: "Rehan Shaikh",
      image: "/founders/rehan.jpg", // Replace with the actual image path
      description:
        "Rehan Shaikh, with a background in International Business and Marketing from Harvard University, has over 12 years of experience in brand strategy and international expansion. He is responsible for Noze Perfume's global presence and strategic partnerships. Rehan believes in providing unique and luxurious perfume experiences for customers around the world.",
    },
    {
      id: 3,
      name: "Maqdum Pasha",
      image: "/founders/maqdum.jpg", // Replace with the actual image path
      description:
        "Maqdum Pasha holds a Master's degree in Chemical Engineering from the University of Karachi. He specializes in product development and quality assurance. His meticulous approach ensures that Noze Perfume's products meet the highest industry standards. Maqdum's love for chemistry and fragrances enables him to push the boundaries of scent innovation.",
    },
  ];

  return (
    <section id="founders" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">
            Meet Our Founders
          </h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full border-2 border-gray-800"
            >
              <div className="relative w-32 h-32 mx-auto -mt-16 mb-6 border-4 border-gray-800 rounded-full overflow-hidden">
                <img
                  src={founder.image}
                  alt={`Founder ${founder.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-100">
                {founder.name}
              </h3>
              <p className="text-gray-400 mt-4">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
