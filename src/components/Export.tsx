// File: components/Export.tsx
import React from "react";

const ExportCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-black/50 p-8 border border-gray-800">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="text-gray-300 border-b border-gray-400 pb-1 hover:text-white transition">
      {title === "Wholesale Partners" ? "Partner with us →" : 
       title === "Shipping & Logistics" ? "Shipping details →" : "View markets →"}
    </button>
  </div>
);

const Export = () => {
  const exportServices = [
    {
      title: "Wholesale Partners",
      description: "Join our network of exclusive retailers and distributors across six continents. We offer competitive wholesale pricing and marketing support."
    },
    {
      title: "Shipping & Logistics",
      description: "Our dedicated export team handles all shipping requirements, customs documentation, and international regulations to ensure smooth delivery worldwide."
    },
    {
      title: "Global Markets",
      description: "Currently exporting to over 75 countries with a focus on luxury markets in Europe, Middle East, Asia, and North America."
    }
  ];

  return (
    <section id="export" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">GLOBAL EXPORT</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Bringing luxury scents to discerning customers around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {exportServices.map((service, index) => (
            <ExportCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
        
        <div className="bg-black/30 p-8 border border-gray-800 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Become a Distributor</h3>
              <p className="text-gray-400">
                Interested in distributing Noze Perfume in your region? Contact our export team today.
              </p>
            </div>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 transition duration-300 border border-gray-700">
              Contact Export Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Export;
