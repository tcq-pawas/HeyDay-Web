import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaHeadset,
  FaHome,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaRegCommentDots,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";

import { Feature, Field } from "./ContactParts";

const ContactForm = () => {
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
      "noopener,noreferrer"
    );

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      location: "",
      message: "",
    });
  };

  return (
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
  );
};

export default ContactForm;