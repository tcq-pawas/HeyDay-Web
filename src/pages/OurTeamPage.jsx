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
        "item": "https://heydayrealty.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Team",
        "item": "https://heydayrealty.com/team"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Meet Our Real Estate Experts"
        description="Meet HeyDay Realty's experienced real estate consultants in Gorakhpur. Expert guidance for buying, selling & renting properties."
        keywords="real estate team, property consultants, real estate experts Gorakhpur"
        canonical="https://heydayrealty.com/team"
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