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

  return (
    <>
      <SEO
        title="Property Projects | HeyDay Realty Pvt. Ltd. Gorakhpur"
        description="Explore verified agricultural land, residential plots, farm land, and investment properties in Gorakhpur with HeyDay Realty. Transparent documentation and professional consultation."
        keywords="property projects Gorakhpur, agricultural land projects, residential plot projects, farm land projects, investment properties, verified land Gorakhpur"
        canonical="https://heydayrealty.in/projects"
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