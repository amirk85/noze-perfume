// File: components/ScrollToTopButton.tsx
"use client";
import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs"; // You can use a similar icon for the button

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6"
      >
        <BsArrowUp className="inline-block font-bold text-lg md:text-2xl text-white" />
      </button>
    )
  );
};

export default ScrollToTopButton;
