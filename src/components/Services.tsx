
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BorderedTitle from "@/shared/BorderedTitle";
import {
  Truck,
  CheckCircle,
  Tag,
  Headphones,
  Users,
  Leaf,
  Award,
  Settings,
} from "lucide-react";

const Services = () => {
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

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: isMobile ? 1.2 : 4,
        spacing: 16,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }
  );

  const services = [
    {
      id: 1,
      title: "Direct Sourcing",
      icon: <Truck />,
      description: "We source top-quality ingredients from global perfumeries.",
    },
    {
      id: 2,
      title: "Quality Assurance",
      icon: <CheckCircle />,
      description:
        "Every product undergoes strict quality checks for excellence.",
    },
    {
      id: 3,
      title: "Competitive Pricing",
      icon: <Tag />,
      description: "Luxury fragrances at affordable prices for all.",
    },
    {
      id: 4,
      title: "Customer Care",
      icon: <Headphones />,
      description: "Personalized consultations to find your perfect scent.",
    },
    {
      id: 5,
      title: "Logistics Management",
      icon: <Users />,
      description: "Fast and reliable delivery with secure handling.",
    },
    {
      id: 6,
      title: "Sustainable Practices",
      icon: <Leaf />,
      description: "Eco-friendly sourcing and recyclable packaging.",
    },
    {
      id: 7,
      title: "Certifications",
      icon: <Award />,
      description: "Compliant with global standards and safety certified.",
    },
    {
      id: 8,
      title: "Tech Integration",
      icon: <Settings />,
      description: "Advanced tech for precision and quality in production.",
    },
  ];

  return (
    <section id="services" className="py-6 md:py-12 lg:py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <BorderedTitle title="Services" className="grid place-items-center" />
        <div className="relative mt-6 md:mt-12">
          {isMobile ? (
            // Mobile carousel
            <div ref={sliderRef} className="keen-slider">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="keen-slider__slide bg-black border border-gray-800 p-4 rounded-lg shrink-0"
                >
                  <div className="flex items-center justify-center mb-3 text-gray-300 text-2xl">
                    {React.cloneElement(service.icon, { size: 32 })}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-100 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            // Desktop grid
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-black border border-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center justify-center mb-5 text-gray-300 text-4xl">
                    {React.cloneElement(service.icon, { size: 48 })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination Dots - More reliable with CSS hiding instead of conditional rendering */}
          <div className={`flex justify-center gap-2 mt-4 ${!isMobile ? 'hidden' : ''}`}>
            {loaded && instanceRef.current && 
              Array.from({
                length: instanceRef.current.track.details.slides.length || services.length,
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (instanceRef.current) {
                      instanceRef.current.moveToIdx(idx);
                    }
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-3 w-3 rounded-full border transition-colors duration-300 ${
                    currentSlide === idx
                      ? "bg-white border-white"
                      : "bg-transparent border-white/50"
                  }`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
