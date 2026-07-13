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
      "telephone": "+91-XXXXXXXXXX",
      "email": "info@heydayrealty.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Gorakhpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "273001",
        "addressCountry": "IN"
      }
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
        "item": "https://heydayrealty.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://heydayrealty.com/contact"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Gorakhpur Real Estate Experts"
        description="Get in touch with HeyDay Realty's expert team. Call us for property consultation in Gorakhpur. Free property valuation available."
        keywords="contact real estate agent Gorakhpur, property consultation, real estate contact"
        canonical="https://heydayrealty.com/contact"
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