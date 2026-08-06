import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactCard from "../components/contact/ContactCard";
import QuotesSection from "../components/contact/QuotesSection";
import ContactMapLocation from "../components/contact/ContactMapLocation";
import { Contact } from "lucide-react";

const ContactUsPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "HeyDay Realty Pvt. Ltd.",
      "telephone": "+91 9161554321",
      "email": "theheydayrealty@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd",
        "addressLocality": "Gorakhpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "273015",
        "addressCountry": "IN"
      },
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
      "priceRange": "₹₹"
    }
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
        "name": "Contact",
        "item": "https://heydayrealty.in/contact"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact HeyDay Realty | Real Estate Consultation in Gorakhpur - Call +91 9161554321"
        description="Contact HeyDay Realty Pvt. Ltd. for agricultural land, residential plots, and property investment consultation in Gorakhpur. Visit our office or call +91 9161554321 for expert guidance."
        keywords="contact HeyDay Realty, real estate contact Gorakhpur, property consultation Gorakhpur, land investment contact, agricultural land contact Gorakhpur, property dealer contact, real estate company contact"
        canonical="https://heydayrealty.in/contact"
        schema={[contactSchema, breadcrumbSchema]}
      />
      <Navbar />

      <ContactHero />

      <ContactCard />

      <ContactMapLocation />

      <QuotesSection />

      <Footer />

    </>
  );
};

export default ContactUsPage;