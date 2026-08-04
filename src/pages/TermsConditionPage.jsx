import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/terms-condition/HeroBanner";
import TermsContent from "../components/terms-condition/TermsContent";

const TermsConditionPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions - HeyDay Realty",
    "description":
      "Read the Terms & Conditions of HeyDay Realty Pvt. Ltd. for property bookings, payments, cancellations, and customer responsibilities.",
    "url": "https://heydayrealty.in/terms-condition",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://heydayrealty.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms & Conditions",
        "item": "https://heydayrealty.in/terms-condition",
      },
    ],
  };

  return (
    <>
      <SEO
        title="Terms & Conditions - HeyDay Realty"
        description="Read HeyDay Realty's Terms & Conditions for booking, payment, cancellation, refunds, legal compliance, and customer responsibilities."
        keywords="terms and conditions, HeyDay Realty terms, property booking terms, payment terms, refund policy, cancellation policy"
        canonical="https://heydayrealty.in/terms-condition"
        schema={[schema, breadcrumbSchema]}
      />

      <Navbar />

      <HeroBanner />

      <TermsContent />

      <Footer />
    </>
  );
};

export default TermsConditionPage;