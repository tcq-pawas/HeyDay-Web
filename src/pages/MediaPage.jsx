import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
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
        "item": "https://heydayrealty.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Media",
        "item": "https://heydayrealty.com/media"
      }
    ]
  };

  return (
    <>
      <SEO
        title="HeyDay Realty News & Media Coverage"
        description="Latest news, updates & media coverage of HeyDay Realty. Stay informed about Gorakhpur's real estate market trends."
        keywords="real estate news, property updates, media coverage, Gorakhpur real estate"
        canonical="https://heydayrealty.com/media"
        schema={breadcrumbSchema}
      />
      <Navbar />

      <MediaHero />

      <PropertyGallery />


      <Footer />
    </>
  );
};

export default MediaPage;