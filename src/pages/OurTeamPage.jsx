import TeamHero from "../components/team/TeamHero";
import TeamIntro from "../components/team/TeamIntro";
import TeamMembers from "../components/team/TeamMembers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/team/WhyChooseTeam";

const OurTeamPage = () => {
  return (
    <>
      <Navbar />
      <TeamHero />
      <TeamIntro />
      <TeamMembers />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default OurTeamPage;