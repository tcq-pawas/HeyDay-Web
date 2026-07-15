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

  return (
    <>
      <SEO
        title="Media Gallery | HeyDay Realty Pvt. Ltd. Gorakhpur"
        description="View property gallery and media coverage of HeyDay Realty Pvt. Ltd. - agricultural land, residential plots, and investment properties in Gorakhpur and Eastern Uttar Pradesh."
        keywords="real estate media, property gallery, Gorakhpur real estate news, land investment updates, agricultural land gallery"
        canonical="https://heydayrealty.in/media"
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