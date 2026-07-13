import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/contact/ContactCard";
import QuotesSection from "../components/contact/QuotesSection";
import ContactMapLocation from "../components/contact/ContactMapLocation";
import { Contact } from "lucide-react";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />

      <ContactCard />

      <ContactMapLocation />

      <QuotesSection />

      <Footer />

    </>
  );
};

export default ContactUsPage;