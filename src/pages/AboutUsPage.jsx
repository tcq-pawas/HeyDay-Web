import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import WhyChooseUs from "../components/about/WhyChooseUs";
import CompanyStats from "../components/about/CompanyStats";
import MissionSection from "../components/about/MissionSection";
import TestimonialSection from "../components/heropage/TestimonialSection";
import CompanyTimeline from "../components/about/CompanyTimeline";


const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <AboutHero/>

      <MissionSection/>

      <CompanyStats/>

      <CompanyTimeline/>

      <WhyChooseUs/>

      <TestimonialSection/>

      <Footer />
    </>
  );
};

export default AboutUsPage;