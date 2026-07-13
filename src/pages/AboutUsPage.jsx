import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import WhyChooseUs from "../components/about/WhyChooseUs";
import CompanyStats from "../components/about/CompanyStats";
import MissionSection from "../components/about/MissionSection";
import TestimonialSection from "../components/heropage/TestimonialSection";
import CompanyTimeline from "../components/about/CompanyTimeline";

const AboutUsPage = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HeyDay Realty Pvt. Ltd.",
    "url": "https://heydayrealty.com/about",
    "logo": "https://heydayrealty.com/logo.png",
    "description": "Leading real estate company in Gorakhpur, Uttar Pradesh since 2022",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "foundingDate": "2022"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://heydayrealty.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://heydayrealty.com/about"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Gorakhpur's Trusted Property Experts"
        description="Discover HeyDay Realty - Gorakhpur's leading real estate company since 2022. Expert team, transparent deals, 100+ happy clients."
        keywords="about us, real estate company Gorakhpur, property experts, trusted real estate"
        canonical="https://heydayrealty.com/about"
        schema={{ ...aboutSchema, ...breadcrumbSchema }}
      />
      <Navbar />

      <AboutHero/>

      <MissionSection/>

      <CompanyStats/>

      <CompanyTimeline/>

      <WhyChooseUs/>

      <TestimonialSection/>

      <Footer />
    </>
  );
};

export default AboutUsPage;