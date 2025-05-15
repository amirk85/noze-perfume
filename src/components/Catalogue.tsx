import React from "react";
import ProductCard from "@/shared/ProductCard";
import BorderedTitle from "@/shared/BorderedTitle";

const Catalogue = () => {
  const products = [
    {
      id: 1,
      name: "MIDNIGHT",
      description: "Deep woody notes with hints of vanilla",
      exportInfo: "Available for international shipping",
      price: "$180",
      image: "/products/midnight.jpg",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "VELVET",
      description: "Floral bouquet with amber undertones",
      exportInfo: "Shipped to over 65 countries",
      price: "$220",
      image: "/products/velvet.jpg",
      badge: "Limited Edition",
    },
    {
      id: 3,
      name: "ETHEREAL",
      description: "Citrus top notes with musk base",
      exportInfo: "Global shipping with duty-free options",
      price: "$195",
      image: "/products/ethereal.jpg",
      badge: "New Arrival",
    },
    {
      id: 4,
      name: "ULTRA MALE",
      description: "Bold pear, cinnamon, and vanilla",
      exportInfo: "Worldwide shipping available",
      price: "$260",
      image: "/products/ultra-male.jpg",
      badge: "Signature Scent",
    },
  ];

  return (
    <section id="catalogue" className="py-8 bg-gray-950/50 lg:py-20 md:py-12">
      <div className="container mx-auto px-6">
        <BorderedTitle
          title={"Product Categories"}
          className="grid place-items-center"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
