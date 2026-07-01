import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/heropage/HeroSection";
import AboutSection from "../components/heropage/AboutSection";
import PropertySection from "../components/heropage/PropertySection";
import WorkflowSection from "../components/heropage/WorkflowSection";
import TestimonialSection from "../components/heropage/TestimonialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";



const HomePage = () => {
  return (
    <>
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
