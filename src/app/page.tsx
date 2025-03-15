// File: page.tsx
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import Export from "@/components/Export";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <Hero />
      <Catalogue />
      <Export />
      <About />
      <Footer />
    </div>
  );
}
