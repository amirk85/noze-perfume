import React from "react";
import Image from "next/image";

const TargetMarket = () => {
  return (
    <section id="target-market" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Target Market</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="relative w-full h-[600px] md:h-[700px] border border-gray-800 overflow-hidden rounded-lg">
          <Image
            src="/world-map.jpg"
            alt="World Map showing our target market"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
