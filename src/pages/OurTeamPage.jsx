import SEO from "../components/SEO";
import TeamHero from "../components/team/TeamHero";
import TeamIntro from "../components/team/TeamIntro";
import TeamMembers from "../components/team/TeamMembers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/team/WhyChooseTeam";

const OurTeamPage = () => {
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
        "name": "Team",
        "item": "https://heydayrealty.in/team"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Our Team | HeyDay Realty Pvt. Ltd. Gorakhpur"
        description="Meet the experienced real estate consultants at HeyDay Realty Pvt. Ltd. in Gorakhpur. Professional guidance for agricultural land, residential plots, and property investment."
        keywords="real estate team Gorakhpur, property consultants, real estate experts, land investment team, agricultural land specialists"
        canonical="https://heydayrealty.in/team"
        schema={breadcrumbSchema}
      />
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