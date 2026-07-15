import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        "streetAddress": "Ramjanaki Nagar",
        "addressLocality": "Gorakhpur",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:30-19:00",
      "areaServed": [
        "Gorakhpur",
        "Deoria",
        "Maharajganj",
        "Kushinagar",
        "Basti",
        "Sant Kabir Nagar"
      ]
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
        title="Contact HeyDay Realty Pvt. Ltd. | Real Estate Consultation in Gorakhpur"
        description="Contact HeyDay Realty Pvt. Ltd. for agricultural land, residential plots, and property investment consultation in Gorakhpur. Call +91 9161554321 or email theheydayrealty@gmail.com."
        keywords="contact HeyDay Realty, real estate contact Gorakhpur, property consultation, land investment contact, agricultural land contact"
        canonical="https://heydayrealty.in/contact"
        schema={{ ...contactSchema, ...breadcrumbSchema }}
      />
      <Navbar />

      <ContactCard />

      <ContactMapLocation />

      <QuotesSection />

      <Footer />

    </>
  );
};

export default ContactUsPage;