import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Experience from "../components/Experiance";
import PropertySection from "../components/PropertySection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import FamilyCardSection from "../components/FamilyCardSection";
import WorkflowSection from "../components/WorkflowSection";
import FAQSection from "../components/FAQSection";
import OurTeamSection from "../components/OurTeamSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <PropertySection />
      <FamilyCardSection />
      <Experience />
      <WorkflowSection />
      <TestimonialSection />
      <OurTeamSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;
