import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/projects/ProjectsHero";
import ProjectGallery from "../components/projects/ProjectGallery";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import TestimonialSection from "../components/heropage/TestimonialSection";
import Footer from "../components/Footer";

const ProjectsPage = () => {
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
        "name": "Projects",
        "item": "https://heydayrealty.in/projects"
      }
    ]
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "HeyDay Realty Pvt. Ltd.",
    "description": "Verified agricultural land, residential plots, farm land, and investment properties in Gorakhpur and Eastern Uttar Pradesh",
    "url": "https://heydayrealty.in/projects",
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
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7606",
      "longitude": "83.3732"
    }
  };

  return (
    <>
      <SEO
        title="Property Projects in Gorakhpur | Agricultural Land, Residential Plots & Investment Properties"
        description="Browse verified property projects in Gorakhpur including agricultural land, residential plots, farm land, and investment properties. HeyDay Realty offers transparent documentation and professional consultation across Eastern Uttar Pradesh."
        keywords="property projects Gorakhpur, agricultural land projects Gorakhpur, residential plot projects Gorakhpur, farm land projects Gorakhpur, investment properties Gorakhpur, verified land Gorakhpur, land for sale Gorakhpur, real estate projects Uttar Pradesh"
        canonical="https://heydayrealty.in/projects"
        schema={[breadcrumbSchema, realEstateAgentSchema]}
      />
      <Navbar />

      <ProjectHero />

      <ProjectGallery />

      <FeaturedProjects />

      <TestimonialSection />

      <Footer />
    </>
  );
};

export default ProjectsPage;