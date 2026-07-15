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
    "url": "https://heydayrealty.in/about",
    "logo": "https://heydayrealty.in/logo.png",
    "description": "HeyDay Realty Pvt. Ltd. is a Gorakhpur-based real estate company specializing in agricultural land, residential plots, farm land, and investment properties with transparent documentation and professional consultation.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9161554321",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ramjanaki Nagar",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Gorakhpur",
      "Deoria",
      "Maharajganj",
      "Kushinagar",
      "Basti",
      "Sant Kabir Nagar"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://heydayrealty.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://heydayrealty.in/about"
      }
    ]
  };

  return (
    <>
      <SEO
        title="About HeyDay Realty Pvt. Ltd. | Real Estate Company in Gorakhpur"
        description="HeyDay Realty Pvt. Ltd. is a Gorakhpur-based real estate company specializing in agricultural land, residential plots, farm land, and investment properties with transparent documentation and professional consultation."
        keywords="about HeyDay Realty, real estate company Gorakhpur, agricultural land specialists, property consultation, land investment experts"
        canonical="https://heydayrealty.in/about"
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