import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CheckCircle, Leaf, Heart, Sparkles, Pill, Skull } from "lucide-react";
import BorderedTitle from "@/shared/BorderedTitle";

const Certifications = () => {
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

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: isMobile ? 1.2 : 3,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const certifications = [
    {
      id: 1,
      title: "Paraben Free",
      icon: <CheckCircle />,
      description:
        "Our perfumes are free from parabens, ensuring a safer, healthier option for our customers.",
    },
    {
      id: 2,
      title: "Natural Ingredients",
      icon: <Leaf />,
      description:
        "We only use the finest natural ingredients, ensuring purity and quality in every bottle.",
    },
    {
      id: 3,
      title: "Sulphate Free",
      icon: <Pill />,
      description:
        "Our fragrances are free from sulphates, making them gentler on your skin and hair.",
    },
    {
      id: 4,
      title: "Cruelty Free",
      icon: <Heart />,
      description:
        "We stand by our commitment to being cruelty-free, ensuring no animals are harmed in the making of our perfumes.",
    },
    {
      id: 5,
      title: "Non Carcinogenic",
      icon: <Skull />,
      description:
        "We ensure our perfumes are free from carcinogenic substances, promoting safe use for all our customers.",
    },
    {
      id: 6,
      title: "Silicone Free",
      icon: <Sparkles />,
      description:
        "Our perfumes are free from silicone, ensuring that they are safe and of the highest quality.",
    },
  ];

  return (
    <section id="certifications" className="bg-gray-950 py-6 md:py-12 lg:py-20">
      <div className="container mx-auto px-6 text-center">
        <BorderedTitle
          title="Certifications of Compliance"
          className="grid place-items-center"
        />

        <div className="relative mt-6 md:mt-12">
          {/* Use the slider for both mobile and desktop */}
          <div ref={sliderRef} className="keen-slider">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="keen-slider__slide bg-black border border-gray-800 p-4 md:p-6 rounded-lg"
              >
                <div className="flex items-center justify-center mb-3 md:mb-6 text-gray-300 text-3xl md:text-4xl">
                  {React.cloneElement(cert.icon, {
                    size: isMobile ? 40 : 48,
                  })}
                </div>
                <h3
                  className={`font-semibold text-gray-100 mb-1 md:mb-2 ${isMobile ? "text-base" : "text-2xl font-bold"}`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`text-gray-400 ${isMobile ? "text-xs" : "text-sm md:text-base"} leading-relaxed`}
                >
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots - Only hide with CSS rather than conditional rendering */}
          <div
            className={`flex justify-center gap-2 mt-4 ${!isMobile ? "hidden" : ""}`}
          >
            {loaded &&
              instanceRef.current &&
              Array.from({
                length:
                  instanceRef.current.track.details.slides.length ||
                  certifications.length,
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
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
