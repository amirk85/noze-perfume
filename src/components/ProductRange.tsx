import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductCard from "@/shared/ProductCard";
import BorderedTitle from "@/shared/BorderedTitle";

const ProductRange = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // More reliable mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Check immediately on mount
    checkIsMobile();

    // Set up listener for window resize
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Initialize slider only if mobile
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    isMobile
      ? {
          initial: 0,
          slides: {
            perView: 1.2,
            spacing: 16,
          },
          loop: true,
          slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
          },
          created() {
            setLoaded(true);
          },
        }
      : [],
  );

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
      description:
        "A curated collection of enduring fragrances with a modern twist.",
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
    <section id="catalogue" className="py-6 bg-gray-950 lg:py-20 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <BorderedTitle
          title={"Product Range"}
          className="grid place-items-center"
        />

        {isMobile ? (
          // Mobile: keen-slider carousel
          <div ref={sliderRef} className="keen-slider">
            {ranges.map((range) => (
              <div
                key={range.id}
                className="keen-slider__slide shrink-0 flex flex-col h-full"
              >
                <ProductCard product={range} className="h-full" />
              </div>
            ))}
          </div>
        ) : (
          // Tablet & desktop: static grid
          <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-12">
            {ranges.map((range) => (
              <div key={range.id} className="flex flex-col h-full">
                <ProductCard product={range} className="h-full" />
              </div>
            ))}
          </div>
        )}

        {/* Pagination dots for mobile only */}
        {loaded && instanceRef.current && isMobile && (
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {Array.from({
              length: instanceRef.current.track.details.slides.length,
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === idx ? "bg-white" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentSlide === idx ? "true" : undefined}
              />
            ))}
          </div>
        )}

        {/* Description with responsive font size */}
        <div className="text-center mt-4 sm:mt-8">
          <p className="text-sm sm:text-base text-gray-300">
            Explore our diverse collection of perfumes, each crafted to provide
            an unforgettable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
