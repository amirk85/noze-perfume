// File: components/ProductRange.tsx
"use client";
import ProductCard from "@/shared/ProductCard";
import React from "react";

const ProductRange = () => {
  const ranges = [
    {
      id: 1,
      name: "Luxury Collection",
      description: "Exquisite blends crafted for discerning tastes.",
      image: "/ranges/luxury.jpg",
    },
    {
      id: 2,
      name: "Heritage Series",
      description: "Timeless classics with a modern touch.",
      image: "/ranges/heritage.jpg",
    },
    {
      id: 3,
      name: "Limited Editions",
      description: "Rare, exclusive releases for true connoisseurs.",
      image: "/ranges/limited.jpg",
    },
    {
      id: 4,
      name: "Everyday Essentials",
      description: "Perfect scents for daily wear and comfort.",
      image: "/ranges/essentials.jpg",
    },
  ];

  return (
    <section id="catalogue" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Product Range</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ranges.map((range) => (
            <ProductCard key={range.id} product={range} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
