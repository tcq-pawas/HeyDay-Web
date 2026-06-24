import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import WhyChooseUs from "../components/about/WhyChooseUs";
import CompanyStats from "../components/about/CompanyStats";
import OurTeamSection from "../components/OurTeamSection";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <AboutHero/>

      <WhoWeAre/>

      <WhyChooseUs/>

      <OurTeamSection/>

      <Footer />
    </>
  );
};

export default AboutUsPage;