import React from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import HeroSection from "../components/heropage/HeroSection";
import AboutSection from "../components/heropage/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PropertySection from "../components/heropage/PropertySection";
import ServiceAreasSection from "../components/ServiceAreasSection";
import WorkflowSection from "../components/heropage/WorkflowSection";
import TestimonialSection from "../components/heropage/TestimonialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "HeyDay Realty Pvt. Ltd.",
    "image": "https://heydayrealty.in/og-default.jpg",
    "description": "HeyDay Realty Pvt. Ltd. offers verified agricultural land, residential plots, farm land, and investment properties in Gorakhpur with transparent documentation and professional consultation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ramjanaki Nagar",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "telephone": "+91 9161554321",
    "email": "theheydayrealty@gmail.com",
    "url": "https://heydayrealty.in",
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 09:30-19:00",
    "areaServed": [
      "Gorakhpur",
      "Deoria",
      "Maharajganj",
      "Kushinagar",
      "Basti",
      "Sant Kabir Nagar"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is HeyDay Realty a real estate company in Gorakhpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HeyDay Realty Pvt. Ltd. is a Gorakhpur-based real estate company specializing in agricultural land, residential plots, farm land, and investment properties with transparent documentation and professional consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Does HeyDay Realty provide agricultural land?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in agricultural land, farm plots, and investment properties across Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti, and Sant Kabir Nagar. All properties undergo thorough legal verification."
        }
      },
      {
        "@type": "Question",
        "name": "Can I schedule a site visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We arrange guided site visits so you can personally inspect the location, road connectivity, surrounding developments, and future growth potential before making your investment decision."
        }
      },
      {
        "@type": "Question",
        "name": "Does HeyDay Realty help with property documentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team provides complete documentation support including legal verification, ownership checks, registration guidance, and end-to-end assistance throughout the property buying process."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HeyDay Realty serves customers across Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti, and Sant Kabir Nagar in Eastern Uttar Pradesh, offering verified agricultural land and residential plots."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="HeyDay Realty Pvt. Ltd. | Agricultural Land, Residential Plots & Property Investment in Gorakhpur"
        description="HeyDay Realty Pvt. Ltd. offers verified agricultural land, residential plots, farm land, and investment properties in Gorakhpur with transparent documentation and professional consultation."
        keywords="Real Estate Company Gorakhpur, Agricultural Land Gorakhpur, Residential Plots Gorakhpur, Farm Land Gorakhpur, Property Dealer Gorakhpur, Property Consultant Gorakhpur, Investment Property Gorakhpur, Land for Sale Gorakhpur, Verified Property Gorakhpur, Buy Plot Gorakhpur, Commercial Land Gorakhpur, Property Investment Uttar Pradesh"
        canonical="https://heydayrealty.in"
        ogType="website"
        schema={[homePageSchema, faqSchema]}
      />
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <PropertySection />
      <ServiceAreasSection />
      <WorkflowSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
