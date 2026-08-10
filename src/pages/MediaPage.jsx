import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import BackgroundPattern from "../components/BackgroundPattern";
import MediaHero from "../components/media/MediaHero";
import PropertyGallery from "../components/media/PropertyGallery";
import Footer from "../components/Footer";

const MediaPage = () => {
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
        "name": "Media",
        "item": "https://heydayrealty.in/media"
      }
    ]
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "HeyDay Realty Pvt. Ltd.",
    "description": "Property gallery showcasing agricultural land, residential plots, farm land, and investment properties in Gorakhpur and Eastern Uttar Pradesh",
    "url": "https://heydayrealty.in/media",
    "telephone": "+91 9161554321",
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
    ]
  };

  return (
    <>
      <BackgroundPattern variants={["contour"]} />
      <SEO
        title="Property Gallery & Media | HeyDay Realty Gorakhpur - Agricultural Land & Plots"
        description="Explore HeyDay Realty's property gallery showcasing agricultural land, residential plots, farm land, and investment properties in Gorakhpur and Eastern Uttar Pradesh. View our latest projects and developments."
        keywords="property gallery Gorakhpur, real estate media Gorakhpur, agricultural land gallery, residential plots gallery, farm land images, investment property photos, Gorakhpur real estate news, land investment updates"
        canonical="https://heydayrealty.in/media"
        schema={[breadcrumbSchema, realEstateAgentSchema]}
      />
      <Navbar />

      <MediaHero />

      <PropertyGallery />


      <Footer />
    </>
  );
};

export default MediaPage;