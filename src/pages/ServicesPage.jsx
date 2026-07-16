import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/ServicesHero";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ServicesSection from "../components/ServicesSection";
import ServiceAreasSection from "../components/ServiceAreasSection";
import StatsBanner from "../components/services/Statsbanner";
import TestimonialSection from "../components/heropage/TestimonialSection";

const ServicesPage = () => {
  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "HeyDay Realty Pvt. Ltd.",
      "url": "https://heydayrealty.in/services",
      "logo": "https://heydayrealty.in/logo.png",
      "description":
        "HeyDay Realty Pvt. Ltd. offers agricultural land, residential plots, farm land, investment consultation, property verification, and documentation services in Gorakhpur and nearby regions.",
      "areaServed": [
        "Gorakhpur",
        "Deoria",
        "Maharajganj",
        "Kushinagar",
        "Basti",
        "Sant Kabir Nagar"
      ],
      "telephone": "+91 9161554321",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ramjanaki Nagar",
        "addressLocality": "Gorakhpur",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    {
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
          "name": "Services",
          "item": "https://heydayrealty.in/services"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Our Services | HeyDay Realty Pvt. Ltd."
        description="Explore HeyDay Realty's professional real estate services including agricultural land, residential plots, farm land, investment consultation, documentation, and property verification in Gorakhpur."
        keywords="real estate services Gorakhpur, agricultural land, residential plots, farm land, property consultation, property verification, land investment"
        canonical="https://heydayrealty.in/services"
        schema={serviceSchema}
      />

      <Navbar />

      <ServicesHero />

      <WhyChooseUsSection />

      <ServicesSection />

      <ServiceAreasSection />

      <StatsBanner />


      <Footer />
    </>
  );
};

export default ServicesPage;