import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/projects/ProjectsHero";
import TestimonialSection from "../components/TestimonialSection";
import PropertySection from "../components/PropertySection";
import FeaturedProjects from "../components/projects/FeaturedProjects";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />

      <ProjectHero/>

      <FeaturedProjects/>

      <TestimonialSection/>

      <Footer />
    </>
  );
};

export default ProjectsPage;