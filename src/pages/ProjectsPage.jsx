import Navbar from "../components/Navbar";
import ProjectHero from "../components/projects/ProjectsHero";
import ProjectGallery from "../components/projects/ProjectGallery";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import TestimonialSection from "../components/heropage/TestimonialSection";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <>
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