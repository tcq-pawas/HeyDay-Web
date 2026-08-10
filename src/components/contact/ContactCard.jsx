import ContactForm from "../contact/ContactForm";
import ContactInfoCard from "../contact/ContactInfoCard";
import bg5 from "../../assets/backgrounds/bg5.png";

const ContactCard = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat px-4 py-7"
      style={{
        backgroundImage: `url(${bg5})`,
      }}
    >
      <div className="mx-auto mt-8 max-w-7xl rounded-2xl bg-white p-5 shadow-[0_14px_42px_rgba(15,35,69,0.10)] lg:p-7">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-[62%]">
            <ContactForm />
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[38%]">
            <ContactInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;