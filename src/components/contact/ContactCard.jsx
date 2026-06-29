import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaFileAlt,
  FaGavel,
  FaCheckCircle,
  FaUsers,
  FaHome,
  FaRegCommentDots,
} from "react-icons/fa";

import logo from "../../assets/images/footer/logo.png";
import property1 from "../../assets/images/footer/card1.png";
import property2 from "../../assets/images/footer/card2.png";
import property3 from "../../assets/images/footer/card3.png";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `*HEYDAY REALTY LEAD*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested In: ${formData.project}
Preferred Location: ${formData.location}

Requirement:
${formData.message}`;

    window.open(
      `https://wa.me/918423661222?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const properties = [
    {
      image: property1,
      title: "Raushan Baag Residency",
      location: "Gorakhpur, Uttar Pradesh",
      size: "1200 - 2400 sq.ft.",
      price: "\u20B9 18.99 Lac onwards",
      tag: "PREMIUM",
    },
    {
      image: property2,
      title: "Bhathat Green City",
      location: "Gorakhpur, Uttar Pradesh",
      size: "1000 - 2000 sq.ft.",
      price: "\u20B9 15.49 Lac onwards",
      tag: "PREMIUM",
    },
    {
      image: property3,
      title: "Swastik Puram",
      location: "Deoria, Uttar Pradesh",
      size: "800 - 1600 sq.ft.",
      price: "\u20B9 12.75 Lac onwards",
      tag: "BEST VALUE",
    },
  ];

  return (
    <section className="bg-[#fbfaf7] px-4 py-7">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl bg-white p-5 shadow-[0_14px_42px_rgba(15,35,69,0.10)] lg:grid-cols-[1fr_1.12fr] lg:p-7 mt-15">
        <div className="pr-0 lg:border-r lg:border-[#e7e2d8] lg:pr-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#c75c0d]">
            Contact HeyDay Realty
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#071c3d] md:text-[32px]">
            We&apos;re Here to Help You
            <br />
            Find the <span className="text-[#4f6b39]">Perfect Land</span>
          </h2>

          <div className="mt-3 h-1 w-14 rounded-full bg-[#c75c0d]" />

          <p className="mt-4 max-w-lg text-xs leading-6 text-[#556070]">
            Have questions about our land investment opportunities or ready to
            schedule a site visit? Get in touch with our expert team today.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <Field
              icon={<FaUser />}
              label="Your Name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />

            <Field
              icon={<FaEnvelope />}
              type="email"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />

            <Field
              icon={<FaPhone />}
              label="Phone Number"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <div>
              <label
                htmlFor="project"
                className="mb-1 block text-xs font-semibold text-[#071c3d]"
              >
                Interested In
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">
                <FaHome className="shrink-0 text-sm text-[#1e293b]" />
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="h-10 w-full bg-transparent text-xs text-[#687281] outline-none"
                >
                  <option value="">Select type of land</option>
                  <option value="Residential Plot">Residential Plot</option>
                  <option value="Commercial Plot">Commercial Plot</option>
                  <option value="Farm Land">Farm Land</option>
                </select>
              </div>
            </div>

            <Field
              icon={<FaMapMarkerAlt />}
              label="Preferred Location"
              name="location"
              placeholder="Enter preferred location"
              value={formData.location}
              onChange={handleChange}
            />

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-semibold text-[#071c3d]"
              >
                Message
              </label>
              <div className="flex items-start gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 py-2 focus-within:border-[#c75c0d]">
                <FaRegCommentDots className="mt-1 shrink-0 text-sm text-[#1e293b]" />
                <textarea
                  id="message"
                  rows={3}
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none bg-transparent text-xs text-[#071c3d] outline-none placeholder:text-[#8a93a0]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#c85b00] text-xs font-bold text-white shadow-[0_10px_20px_rgba(200,91,0,0.20)] transition hover:bg-[#a94900]"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Feature
              icon={<FaShieldAlt />}
              title="100% Secure"
              sub="Your information is safe"
            />
            <Feature
              icon={<FaHeadset />}
              title="Expert Support"
              sub="We're here to help"
            />
            <Feature
              icon={<FaClock />}
              title="Quick Response"
              sub="Within 24 hours"
            />
          </div>
        </div>



       {/* Right Side */}

        <div className="lg:pl-1 mt-5">
          <img
            src={logo}
            alt="HeyDay Realty"
            className="mx-auto h-16 object-contain"
          />

          <div className="relative mx-auto mt-3 max-w-lg rounded-xl bg-[#fff6eb] px-10 py-4 shadow-sm">
            <span className="absolute left-4 top-3 text-4xl font-black leading-none text-[#c85b00]">
              &ldquo;
            </span>
            <p className="pl-8 text-sm font-semibold leading-6 text-[#071c3d]">
              We don&apos;t just sell land,
              <br />
              we help you build your future.
              <br />
              Invest in land. Invest in prosperity.
            </p>
            <span className="absolute bottom-1 right-5 text-4xl font-black leading-none text-[#c85b00] mr-40 ">
              &rdquo;
            </span>
          </div>

          <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-[#071c3d]">
            Featured Properties
          </h3>

          <div className="mt-3 space-y-3">
            {properties.map((property) => (
              <PropertyCard key={property.title} property={property} />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 rounded-xl bg-[#f1f4eb] p-3 shadow-sm sm:grid-cols-4">
            <Bottom icon={<FaFileAlt />} text="Verified Documents" />
            <Bottom icon={<FaGavel />} text="DTCP/RERA Approved" />
            <Bottom icon={<FaCheckCircle />} text="100% Legal Safe" />
            <Bottom icon={<FaUsers />} text="Expert Support" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  icon,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <label
      htmlFor={name}
      className="mb-1 block text-xs font-semibold text-[#071c3d]"
    >
      {label}
    </label>
    <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">
      <span className="shrink-0 text-sm text-[#1e293b]">{icon}</span>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10 w-full bg-transparent text-xs text-[#071c3d] outline-none placeholder:text-[#8a93a0]"
      />
    </div>
  </div>
);

const PropertyCard = ({ property }) => (
  <article className="grid overflow-hidden rounded-xl border border-[#e7e2d8] bg-white shadow-[0_8px_22px_rgba(15,35,69,0.07)] md:grid-cols-[210px_1fr]">
    <div className="relative h-36 md:h-full">
      <img
        src={property.image}
        alt={property.title}
        className="h-full w-full object-cover"
      />
      <span className="absolute bottom-2 left-2 rounded bg-[#f47c20] px-2 py-1 text-[10px] font-bold text-white">
        {property.tag}
      </span>
    </div>

    <div className="p-3">
      <h4 className="text-base font-bold text-[#071c3d]">{property.title}</h4>

      <p className="mt-1 flex items-center gap-2 text-[11px] font-medium text-[#556070]">
        <FaMapMarkerAlt className="text-[#1e293b]" />
        {property.location}
      </p>

      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-medium text-[#556070]">
        <span className="flex items-center gap-2">
          <FaHome className="text-[#1e293b]" />
          Residential Plots
        </span>
        <span>{property.size}</span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-xs font-bold text-[#c75c0d]">
          {property.price}
        </span>

        <Link
          to="/media"
          type="button"
          className="rounded border border-[#f47c20] px-3 py-1.5 text-[11px] font-bold text-[#c75c0d] transition hover:bg-[#f47c20] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  </article>
);

const Feature = ({ icon, title, sub }) => (
  <div className="flex items-center gap-2">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef3e8] text-base text-[#4f6b39]">
      {icon}
    </div>
    <div>
      <h4 className="text-[11px] font-bold text-[#071c3d]">{title}</h4>
      <p className="mt-0.5 text-[10px] leading-tight text-[#556070]">{sub}</p>
    </div>
  </div>
);

const Bottom = ({ icon, text }) => (
  <div className="border-[#cfd7c2] px-2 text-center sm:border-r sm:last:border-r-0">
    <div className="mb-1 flex justify-center text-2xl text-[#4f6b39]">
      {icon}
    </div>
    <p className="mx-auto max-w-[90px] text-[11px] font-bold leading-tight text-[#071c3d]">
      {text}
    </p>
  </div>
);

export default ContactCard;
