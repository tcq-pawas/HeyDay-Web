import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/projects/ProjectsHero";
import TestimonialSection from "../components/TestimonialSection";
import PropertySection from "../components/PropertySection";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />

      <ProjectHero/>

      <PropertySection/>

      <TestimonialSection/>

      <Footer />
    </>
  );
};

export default ProjectsPage;