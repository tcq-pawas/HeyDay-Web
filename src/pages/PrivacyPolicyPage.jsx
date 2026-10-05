import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/privacy-policy/HeroBanner";
import PoliciesContent from "../components/privacy-policy/PoliciesContent";

const PrivacyPolicyPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - HeyDay Realty",
    "description": "Privacy Policy, Terms & Conditions, and other policies for HeyDay Realty Pvt. Ltd.",
    "url": "https://heydayrealty.in/privacy-policy"
  };

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
        "name": "Privacy Policy",
        "item": "https://heydayrealty.in/privacy-policy"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Privacy Policy & Terms - HeyDay Realty"
        description="Read HeyDay Realty's Privacy Policy, Terms & Conditions, Booking Policy, Cancellation Policy, Payment Policy, and Refund Policy. Transparent policies for land investments."
        keywords="privacy policy HeyDay Realty, terms and conditions, booking policy, cancellation policy, refund policy, payment policy, land investment policies"
        canonical="https://heydayrealty.in/privacy-policy"
        schema={[schema, breadcrumbSchema]}
      />
      <Navbar />

      <HeroBanner />

      <PoliciesContent />

      <Footer />

    </>
  );
};

export default PrivacyPolicyPage;
