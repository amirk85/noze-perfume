// File: page.tsx
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import Export from "@/components/Export";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Founding from "@/components/Founding";
import ProductRange from "@/components/ProductRange";
import KeyFeatures from "@/components/KeyFeatures";
import TargetMarket from "@/components/TargetMarket";
import USP from "@/components/USP";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Team from "@/components/Team";
import PrivateLabeling from "@/components/PrivateLabeling";
import Certifications from "@/components/Certifications";
import Commitment from "@/components/Commitment";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <Hero />
      <Founding />
      <AboutUs />
      <Catalogue />
      <ProductRange />
      <KeyFeatures />
      <TargetMarket />
      <USP />
      <Services />
      <Founders />
      <Team />
      <PrivateLabeling />
      <Certifications />
      <Commitment />
      <ContactUs />
      {/* <Export /> */}
      <Footer />
    </div>
  );
}
