import React from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import HeroSection from "../components/heropage/HeroSection";
import AboutSection from "../components/heropage/AboutSection";
import PropertySection from "../components/heropage/PropertySection";
import WorkflowSection from "../components/heropage/WorkflowSection";
import TestimonialSection from "../components/heropage/TestimonialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "HeyDay Realty Pvt. Ltd.",
    "image": "https://heydayrealty.com/og-default.jpg",
    "description": "Trusted real estate company in Gorakhpur, Uttar Pradesh. Specializing in residential and commercial properties since 2022.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "273001",
      "addressCountry": "IN"
    },
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@heydayrealty.com",
    "url": "https://heydayrealty.com",
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 09:00-19:00",
    "founder": "Founder Name",
    "foundingDate": "2022",
    "areaServed": {
      "@type": "City",
      "name": "Gorakhpur"
    }
  };

  return (
    <>
      <SEO
        title="Best Real Estate in Gorakhpur"
        description="Find your dream property in Gorakhpur with HeyDay Realty. Trusted real estate experts since 2022. Buy, sell & rent with confidence."
        keywords="real estate Gorakhpur, property dealer, buy property, sell property, rent property, commercial property, residential property"
        canonical="https://heydayrealty.com"
        ogType="website"
        schema={homePageSchema}
      />
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <PropertySection />
      <WorkflowSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
