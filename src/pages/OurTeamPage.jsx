import SEO from "../components/SEO";
import TeamHero from "../components/team/TeamHero";
import TeamIntro from "../components/team/TeamIntro";
import TeamMembers from "../components/team/TeamMembers";
import Navbar from "../components/Navbar";
import BackgroundPattern from "../components/BackgroundPattern";
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HeyDay Realty Pvt. Ltd.",
    "url": "https://heydayrealty.in/team",
    "description": "Meet our experienced real estate consultants and property experts providing professional guidance for agricultural land, residential plots, and investment properties in Gorakhpur and Eastern Uttar Pradesh",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "273015",
      "addressCountry": "IN"
    },
    "telephone": "+91 9161554321",
    "areaServed": [
      "Gorakhpur",
      "Deoria",
      "Maharajganj",
      "Kushinagar",
      "Basti",
      "Sant Kabir Nagar",
      "Siddharthnagar"
    ]
  };

  return (
    <>
      <BackgroundPattern variants={["city", "blueprint"]} />
      <SEO
        title="Our Real Estate Team | Property Consultants in Gorakhpur - HeyDay Realty"
        description="Meet HeyDay Realty's experienced real estate consultants and property experts in Gorakhpur. Professional guidance for agricultural land, residential plots, and property investment across Eastern Uttar Pradesh."
        keywords="real estate team Gorakhpur, property consultants Gorakhpur, real estate experts Gorakhpur, land investment team, agricultural land specialists, property advisors, real estate professionals Uttar Pradesh"
        canonical="https://heydayrealty.in/team"
        schema={[breadcrumbSchema, organizationSchema]}
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