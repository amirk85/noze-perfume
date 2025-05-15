import React from "react";
import Image from "next/image";
import BorderedTitle from "@/shared/BorderedTitle";

const TargetMarket = () => {
  return (
    <section id="target-market" className="py-8 bg-gray-950 md:py-12 lg:py-20">
      <div className="container mx-auto px-6 text-center">
        <BorderedTitle title={"Target Market"} className="grid place-items-center" />

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
