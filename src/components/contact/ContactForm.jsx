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
  FaCheckCircle,
} from "react-icons/fa";

import API_CONFIG from "../../config/api";
import { Field, Feature } from "./ContactParts";

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  subject: "Property Inquiry",
  contactMethod: "",
  propertyType: "",
  location: "",
  budget: "",
  area: "",
  message: "I am interested in this property.",
};

const subjectOptions = [
  "Inquiry About Property",
  "Schedule Site Visit",
  "Investment Consultation",
  "Pricing Information",
  "Property Documents",
  "General Inquiry",
];

const contactOptions = ["Phone Call", "WhatsApp", "Email", "Video Call"];

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

const SelectField = ({
  icon,
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => (
  <div>
    <label className="mb-1 block text-xs font-semibold text-[#071c3d]">
      {label}
    </label>

    <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white px-3 focus-within:border-[#c75c0d]">
      <span className="text-sm text-[#1e293b]">{icon}</span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-10 w-full appearance-none bg-transparent pl-2 pr-8 text-xs outline-none"
      >
        <option value="">{placeholder}</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <FaChevronDown className="text-xs text-gray-500" />
    </div>
  </div>
);

// Full-page loading overlay: blurs/dims the page and shows a centered spinner
const LoadingOverlay = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/40 backdrop-blur-sm transition-opacity duration-200">
    <div className="flex flex-col items-center gap-3">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#e7e2d8] border-t-[#c85b00]" />
      <p className="text-xs font-semibold text-[#071c3d]">Sending your message...</p>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = formData.message.trim();

    if (!name) {
      alert("Name is required");
      return;
    }

    if (!phone) {
      alert("Phone number is required");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!message) {
      alert("Message is required");
      return;
    }

    const url = `${API_CONFIG.BASE_URL.replace(/\/$/, "")}/admin-dashboard/api/contact/`;

    try {
      setIsSubmitting(true);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_CONFIG.API_KEY,
        },
        body: JSON.stringify({
          website: "heyday",
          full_name: name,
          phone_number: phone,
          email: email,
          subject: formData.subject,
          preferred_contact_method: formData.contactMethod,
          property_type: formData.propertyType,
          preferred_location: formData.location,
          budget_range: formData.budget,
          area_size: formData.area,
          message: formData.message,
        }),
      });

      const contentType = response.headers.get("content-type");

      let data = {};
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      console.log("Status:", response.status);
      console.log("Response:", data);

      if (!response.ok) {
        alert(JSON.stringify(data, null, 2));
        return;
      }

      setFormData(INITIAL_FORM_DATA);
      setIsSuccess(true);

      // Revert the button back to normal after a couple of seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 2500);
    } catch (err) {
      console.error("Submission failed:", err);
      alert(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pr-0 lg:border-r lg:border-[#e7e2d8] lg:pr-8">
      {isSubmitting && <LoadingOverlay />}

      <h2 className="mt-3 text-xl font-bold leading-tight text-[#071c3d]]">
        We&apos;re Here to Help You
        <br />
        Find the <span className="text-[#4f6b39]">Perfect Land</span>
      </h2>

      <div className="mt-3 h-1 w-14 rounded-full bg-[#c75c0d]" />

      <p className="mt-4 max-w-lg text-[12px] leading-6 text-[#556070]">
        Have questions about our land investment opportunities or ready to
        schedule a site visit? Get in touch with our expert team today.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
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

        <Field
          icon={<FaEnvelope />}
          type="email"
          label="Email Address"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="grid gap-3 md:grid-cols-2">
          <SelectField
            icon={<FaRegCommentDots />}
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            options={subjectOptions}
            placeholder="Select Subject"
          />

          <SelectField
            icon={<FaPhone />}
            label="Preferred Contact Method"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            options={contactOptions}
            placeholder="Select Contact Method"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <SelectField
            icon={<FaHome />}
            label="Property Type Interested In"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            options={propertyOptions}
            placeholder="Select Property Type"
          />

          <SelectField
            icon={<FaMapMarkerAlt />}
            label="Preferred Location / City"
            name="location"
            value={formData.location}
            onChange={handleChange}
            options={locationOptions}
            placeholder="Select Location"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <SelectField
            icon={<FaMoneyBillWave />}
            label="Budget Range (Optional)"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            options={budgetOptions}
            placeholder="Select Budget"
          />

          <SelectField
            icon={<FaExpandArrowsAlt />}
            label="Area / Size (Optional)"
            name="area"
            value={formData.area}
            onChange={handleChange}
            options={areaOptions}
            placeholder="Select Area"
          />
        </div>

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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg text-xs font-bold text-white shadow-[0_10px_20px_rgba(200,91,0,0.20)] transition disabled:cursor-not-allowed ${
            isSuccess
              ? "bg-green-600 hover:bg-green-600"
              : "bg-[#c85b00] hover:bg-[#a94900] disabled:opacity-70"
          }`}
        >
          {isSubmitting ? (
            "Sending..."
          ) : isSuccess ? (
            <>
              Submitted <FaCheckCircle />
            </>
          ) : (
            <>
              Send Message <FaPaperPlane />
            </>
          )}
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