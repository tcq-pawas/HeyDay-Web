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
        "Sant Kabir Nagar",
        "Siddharthnagar"
      ],
      "telephone": "+91 9161554321",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd",
        "addressLocality": "Gorakhpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "273015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.7606",
        "longitude": "83.3732"
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
        title="Real Estate Services in Gorakhpur | Property Consultation & Documentation"
        description="HeyDay Realty offers comprehensive real estate services in Gorakhpur including agricultural land, residential plots, farm land, investment consultation, property verification, documentation, and legal support across Eastern Uttar Pradesh."
        keywords="real estate services Gorakhpur, property consultation Gorakhpur, property verification Gorakhpur, land documentation Gorakhpur, agricultural land services, residential plot services, farm land services, property investment consultation, legal verification services"
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