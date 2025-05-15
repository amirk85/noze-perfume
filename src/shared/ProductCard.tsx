// File: components/ProductCard.tsx
import React from "react";
import Image from "next/image";

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    exportInfo?: string;
    price?: string;
    image: string;
    badge?: string;
  };
  className?: string; // Add optional className prop here
}

const ProductCard: React.FC<ProductProps> = ({ product, className = "" }) => {
  return (
    <div
      className={`bg-black border border-gray-800 group rounded-lg overflow-hidden ${className}`}
    >
      <div className="relative h-48 sm:h-64 lg:h-96 overflow-hidden">
        <Image
          src={product.image}
          alt={`Noze ${product.name}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-3">
          {product.description}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mb-4">
          {product.exportInfo}
        </p>
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm sm:text-base lg:text-lg font-light text-gray-300">
            {product.price}
          </p>
          {product.badge && (
            <span className="text-[10px] sm:text-xs lg:text-sm px-2 py-1 bg-gray-800 text-gray-400 rounded-md text-center">
              {product.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
