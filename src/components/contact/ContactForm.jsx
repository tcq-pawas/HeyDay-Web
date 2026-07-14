import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaHeadset,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaRegCommentDots,
  FaShieldAlt,
  FaUser,
  FaChevronDown,
  FaHome,
  FaExpandArrowsAlt,
} from "react-icons/fa";

import { Field, Feature } from "./ContactParts";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",

    subject: "",
    contactMethod: "",
    propertyType: "",
    location: "",
    budget: "",
    area: "",

    message: "",
  });

  const subjectOptions = [
    "Inquiry About Property",
    "Schedule Site Visit",
    "Investment Consultation",
    "Pricing Information",
    "Property Documents",
    "General Inquiry",
  ];

  const contactOptions = [
    "Phone Call",
    "WhatsApp",
    "Email",
    "Video Call",
  ];

  const propertyOptions = [
    "Agricultural Land",
    "Residential Plot",
    "Commercial Plot",
    "Farm House",
    "Villa Plot",
    "Industrial Land",
  ];

  const locationOptions = [
    "Gorakhpur, Uttar Pradesh",
    "Lucknow, Uttar Pradesh",
    "Ayodhya, Uttar Pradesh",
    "Varanasi, Uttar Pradesh",
    "Noida, Uttar Pradesh",
    "Other",
  ];

  const budgetOptions = [
    "Below ₹10 Lakhs",
    "₹10 Lakhs - ₹25 Lakhs",
    "₹25 Lakhs - ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1 Crore - ₹2 Crore",
    "Above ₹2 Crore",
  ];

  const areaOptions = [
    "Below 1 Bigha",
    "1 - 2 Bigha",
    "2 - 3 Bigha",
    "3 - 5 Bigha",
    "5+ Bigha",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `*HEYDAY REALTY LEAD*

👤 Full Name: ${formData.name}

📞 Phone Number: ${formData.phone}

📧 Email Address: ${formData.email}

📝 Subject: ${formData.subject}

☎ Preferred Contact Method: ${formData.contactMethod}

🏡 Property Type: ${formData.propertyType}

📍 Preferred Location: ${formData.location}

💰 Budget Range: ${formData.budget}

📐 Area / Size: ${formData.area}

💬 Message:
${formData.message}`;

    const encodedMsg = encodeURIComponent(msg);

    const phoneNumber = "918423661222";

    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMsg}`;

      setTimeout(() => {
        window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
      }, 1200);
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`,
        "_blank",
        "noopener,noreferrer"
      );
    }

    setFormData({
      name: "",
      phone: "",
      email: "",

      subject: "",
      contactMethod: "",
      propertyType: "",
      location: "",
      budget: "",
      area: "",

      message: "",
    });
  };

  return (
    <div className="pr-0 lg:border-r lg:border-[#e7e2d8] lg:pr-8  ">
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

        {/* Row 1 */}
        <div className="grid gap-3 md:grid-cols-2">
          <Field
            icon={<FaUser />}
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
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
        </div>

        {/* Email */}
        <Field
          icon={<FaEnvelope />}
          type="email"
          label="Email Address"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Subject & Contact */}
        <div className="grid gap-3 md:grid-cols-2">

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
              Subject
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">

              <FaRegCommentDots className="text-sm text-[#1e293b]" />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-10 w-full appearance-none bg-transparent text-xs outline-none"
              >
                <option value="">Select Subject</option>

                {subjectOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-xs text-gray-500" />

            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
              Preferred Contact Method
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">

              <FaPhone className="text-sm text-[#1e293b]" />

              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="h-10 w-full appearance-none bg-transparent text-xs outline-none"
              >
                <option value="">Select Contact Method</option>

                {contactOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-xs text-gray-500" />

            </div>
          </div>

        </div>

        {/* Property & Location */}
        <div className="grid gap-3 md:grid-cols-2">

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
              Property Type Interested In
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">

              <FaHome className="text-sm text-[#1e293b]" />

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="h-10 w-full appearance-none bg-transparent text-xs outline-none"
              >
                <option value="">Select Property Type</option>

                {propertyOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-xs text-gray-500" />

            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
              Preferred Location / City
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">

              <FaMapMarkerAlt className="text-sm text-[#1e293b]" />

              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="h-10 w-full appearance-none bg-transparent text-xs outline-none"
              >
                <option value="">Select Location</option>

                {locationOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-xs text-gray-500" />

            </div>
          </div>

        </div>

        {/* Budget & Area */}
        <div className="grid gap-3 md:grid-cols-2">

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
              Budget Range (Optional)
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">

              <FaMoneyBillWave className="text-sm text-[#1e293b]" />

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="h-10 w-full appearance-none bg-transparent text-xs outline-none"
              >
                <option value="">Select Budget</option>

                {budgetOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-xs text-gray-500" />

            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
              Area / Size (Optional)
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">

              <FaExpandArrowsAlt className="text-sm text-[#1e293b]" />

              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="h-10 w-full appearance-none bg-transparent text-xs outline-none"
              >
                <option value="">Select Area</option>

                {areaOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-xs text-gray-500" />

            </div>
          </div>

        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
            Message
          </label>

          <div className="flex items-start gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 py-2 focus-within:border-[#c75c0d]">

            <FaRegCommentDots className="mt-1 text-sm text-[#1e293b]" />

            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              className="w-full resize-none bg-transparent text-xs outline-none placeholder:text-[#8a93a0]"
            />

          </div>
        </div>

        {/* Submit Button */}
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