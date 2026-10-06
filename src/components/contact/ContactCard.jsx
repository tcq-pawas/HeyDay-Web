import ContactForm from "../contact/ContactForm";
import ContactInfoCard from "../contact/ContactInfoCard";
import bg5 from "../../assets/backgrounds/bg5.png";

const cardClass =
  "flex min-w-0 flex-col rounded-2xl bg-white p-5 shadow-[0_14px_42px_rgba(15,35,69,0.10)] lg:p-7";

const ContactCard = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-4 py-7"
      style={{
        backgroundImage: `url(${bg5})`,
      }}
    >
      {/* Full width below 1300px, two equal cards from 1300px up */}
      <div className="wide-container mt-8 grid items-stretch gap-6 min-[1300px]:grid-cols-2">
        {/* Left Card */}
        <div className={cardClass}>
          <ContactForm />
        </div>

        {/* Right Card (info + map) */}
        <div className={cardClass}>
          <ContactInfoCard />
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
