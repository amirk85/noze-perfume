import React from "react";
import Image from "next/image";

const Founding = () => {
  return (
    <section id="founding" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <h2 className="text-4xl font-bold">
              FOUNDING OF NOZE<span className="text-gray-600">EXPORTS</span>
            </h2>
            <div className="w-24 h-1 bg-gray-400"></div>
            <p className="text-gray-300">
              Established in 2023, NozeExports emerged as a natural extension of
              our passion for excellence and craftsmanship.
            </p>
            <p className="text-gray-300">
              Driven by a vision to share the spirit of Noze globally, we
              specialize in exporting premium fragrances and artisanal products
              to discerning markets around the world.
            </p>
            <p className="text-gray-300">
              Every shipment from NozeExports carries our hallmark dedication to
              quality, tradition, and innovation — ensuring that each product
              embodies the essence of luxury.
            </p>
            <p className="text-gray-300">
              From our first international partnership to our expanding global
              presence, NozeExports stands as a beacon of trust, authenticity,
              and prestige.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 border border-gray-800 overflow-hidden rounded-sm">
            <div className="relative h-96 w-full">
              <Image
                src={"/founding.jpg"} // Make sure you have this image
                alt="Founding of NozeExports"
                layout="fill"
                objectFit="cover"
								// className="grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founding;
