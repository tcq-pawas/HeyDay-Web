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
      "streetAddress": "Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "273015",
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
      "Sant Kabir Nagar",
      "Siddharthnagar"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7606",
      "longitude": "83.3732"
    },
    "sameAs": [
      "https://www.facebook.com/HeyDayRealty/",
      "https://www.instagram.com/theheydayrealty/",
      "https://www.youtube.com/@TheHeydayRealty",
      "https://www.linkedin.com/in/heyday-realty-8b22663b0/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
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
          "text": "Yes, HeyDay Realty Pvt. Ltd. is a Gorakhpur-based real estate company specializing in agricultural land, residential plots, farm land, and investment properties with transparent documentation and professional consultation since 2022."
        }
      },
      {
        "@type": "Question",
        "name": "Does HeyDay Realty provide agricultural land?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in agricultural land, farm plots, and investment properties across Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti, Sant Kabir Nagar, and Siddharthnagar. All properties undergo thorough legal verification."
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
          "text": "HeyDay Realty serves customers across Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti, Sant Kabir Nagar, and Siddharthnagar in Eastern Uttar Pradesh, offering verified agricultural land and residential plots."
        }
      },
      {
        "@type": "Question",
        "name": "What types of properties does HeyDay Realty offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of properties including agricultural land, residential plots, farm land, commercial land, gated community projects, and high-return investment properties in Gorakhpur and surrounding districts."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact HeyDay Realty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us by calling +91 9161554321, emailing theheydayrealty@gmail.com, or visiting our office at Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd, Gorakhpur, Uttar Pradesh."
        }
      },
      {
        "@type": "Question",
        "name": "Are the properties legally verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every property listed by HeyDay Realty undergoes comprehensive legal verification including title checks, ownership verification, encumbrance checks, and compliance with local regulations to ensure safe investments."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Best Real Estate Company in Gorakhpur | Agricultural Land, Residential Plots & Property Investment"
        description="HeyDay Realty Pvt. Ltd. - Trusted real estate company in Gorakhpur since 2022. Buy verified agricultural land, residential plots, farm land & investment properties in Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti & Sant Kabir Nagar with transparent documentation."
        keywords="Real Estate Company Gorakhpur, Best Property Dealer Gorakhpur, Agricultural Land Gorakhpur, Residential Plots Gorakhpur, Farm Land Gorakhpur, Investment Property Gorakhpur, Land for Sale Gorakhpur, Verified Property Gorakhpur, Buy Plot Gorakhpur, Commercial Land Gorakhpur, Property Investment Uttar Pradesh, Real Estate Company Uttar Pradesh, Property Dealer Uttar Pradesh"
        canonical="https://heydayrealty.in"
        ogType="website"
        schema={[homePageSchema, faqSchema]}
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
