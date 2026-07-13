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
        "item": "https://heydayrealty.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://heydayrealty.com/projects"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Premium Properties in Gorakhpur"
        description="Explore premium residential & commercial properties in Gorakhpur. HeyDay Realty offers verified listings, great locations & best prices."
        keywords="properties, real estate projects Gorakhpur, premium properties, residential property, commercial property"
        canonical="https://heydayrealty.com/projects"
        schema={breadcrumbSchema}
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