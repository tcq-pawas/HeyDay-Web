import ContactForm from "../contact/ContactForm";
import PropertyShowcase from "../contact/PropertyShowcase";

import property1 from "../../assets/images/footer/card1.png";
import property2 from "../../assets/images/footer/card2.png";
import property3 from "../../assets/images/footer/card3.png";

const properties = [
  {
    image: property1,
    title: "Raushan Baag Residency", 
    location: "Bhathat Chowk, Gorakhpur",
    size: "699/- Per Sq.Ft.",
    price: "₹ 18.99 Lac onwards",
    tag: "PREMIUM",
  },
  {
    image: property2,
    title: "Bhathat Green City",
    location: "Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur",
    size: "1499/- Per Sq.Ft.",
    price: "₹ 15.49 Lac onwards",
    tag: "PREMIUM",
  },
  {
    image: property3,
    title: "Swastik Puram",
    location: "Fertilizer Factory, Gorakhpur",
    size: "1799/- Per Sq.Ft.",
    price: "₹ 12.75 Lac onwards",
    tag: "BEST VALUE",
  },
];

const ContactCard = () => {
  return (
    <section className="bg-[#fbfaf7] px-4 py-7">
      <div className="mx-auto mt-15 grid max-w-6xl gap-6 rounded-2xl bg-white p-5 shadow-[0_14px_42px_rgba(15,35,69,0.10)] lg:grid-cols-[1fr_1.12fr] lg:p-7">
        <ContactForm />
        <PropertyShowcase properties={properties} />
      </div>
    </section>
  );
};

export default ContactCard;
