import { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
    note: "Thank you for contacting HeyDay Realty.",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
HEYDAY REALTY WEBSITE LEAD

Name: ${formData.name}
Phone: ${formData.phone}
Project: ${formData.project}
Budget: ${formData.budget}

Requirement:
${formData.message || "Not Provided"}

Note: ${formData.note};`;

    window.open(
      `https://wa.me/918423661222?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 px-6 mt-15">
      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fdfbf7] via-[#faf8f4] to-[#f5f1ea] border border-[#e8dfd0] shadow-xl">

          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#f47c20]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#032349]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2">

            {/* Left Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <span className="inline-flex w-fit px-4 py-2 rounded-full bg-[#f47c20]/10 text-[#f47c20] text-sm font-semibold uppercase tracking-[2px]">
                Free Consultation
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#032349] mt-6 leading-tight">
                Find Your Perfect
                <span className="block text-[#f47c20]">
                  Investment Plot
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Explore premium plotted developments with complete transparency,
                verified documentation, and expert guidance from HeyDay Realty.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#f47c20] text-lg" />
                  <span className="text-gray-700">
                    Prime Locations Across Gorakhpur
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f47c20] text-lg" />
                  <span className="text-gray-700">
                    100% Verified Documentation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f47c20] text-lg" />
                  <span className="text-gray-700">
                    Free Site Visit Assistance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#f47c20] text-lg" />
                  <span className="text-gray-700">
                    Investment & Registration Guidance
                  </span>
                </div>

              </div>

            </div>

            {/* Form */}
            <div className="bg-white/80 backdrop-blur-md p-8 lg:p-10 border-l border-[#e8dfd0]">

              <h3 className="text-2xl font-bold text-[#032349] mb-2">
                Book Your Site Visit
              </h3>

              <p className="text-gray-500 mb-6">
                Fill out the form and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f47c20]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f47c20]"
                />

                <select
                  name="project"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f47c20]"
                >
                  <option value="">Select Project</option>
                  <option>Roushan Baag Residency</option>
                  <option>Bhathat Greencity</option>
                  <option>Swastik Puram</option>
                </select>

                <select
                  name="budget"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f47c20]"
                >
                  <option value="">Investment Budget</option>
                  <option>Below ₹5 Lakh</option>
                  <option>₹5 - ₹10 Lakh</option>
                  <option>₹10 - ₹20 Lakh</option>
                  <option>Above ₹20 Lakh</option>
                </select>

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f47c20]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#f47c20] hover:bg-[#e66a10] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg"
                >
                  <FaWhatsapp size={20} />
                  Connect on WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactCard;