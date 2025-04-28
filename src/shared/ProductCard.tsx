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
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-black border border-gray-800 group">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={product.image}
          alt={`Noze ${product.name}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <p className="text-gray-500 mb-4 text-sm">{product.exportInfo}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-light">{product.price}</p>
          {product.badge && (
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-400">
              {product.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
