import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <FaPhoneAlt className="mx-auto text-4xl text-[#c89b63]" />
            <h3 className="text-2xl font-bold mt-4">Call Us</h3>
            <p className="mt-3 text-gray-600">+91 9876543210</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <FaWhatsapp className="mx-auto text-4xl text-green-500" />
            <h3 className="text-2xl font-bold mt-4">WhatsApp</h3>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-green-600 font-semibold"
            >
              Chat Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <FaMapMarkerAlt className="mx-auto text-4xl text-[#c89b63]" />
            <h3 className="text-2xl font-bold mt-4">Location</h3>
            <p className="mt-3 text-gray-600">
              Gorakhpur, Uttar Pradesh
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;