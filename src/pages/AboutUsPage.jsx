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
    "description": "HeyDay Realty Pvt. Ltd. is a Gorakhpur-based real estate company specializing in agricultural land, residential plots, farm land, and investment properties with transparent documentation and professional consultation since 2022.",
    "foundingDate": "2022",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9161554321",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "273015",
      "addressCountry": "IN"
    },
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
        title="About HeyDay Realty | Leading Real Estate Company in Gorakhpur Since 2022"
        description="Learn about HeyDay Realty Pvt. Ltd., Gorakhpur's trusted real estate company since 2022. We specialize in agricultural land, residential plots, farm land, and investment properties with transparent documentation across Eastern Uttar Pradesh."
        keywords="about HeyDay Realty, real estate company Gorakhpur, agricultural land specialists Gorakhpur, property consultation Gorakhpur, land investment experts Uttar Pradesh, best real estate company Gorakhpur, property dealer Gorakhpur"
        canonical="https://heydayrealty.in/about"
        schema={[aboutSchema, breadcrumbSchema]}
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