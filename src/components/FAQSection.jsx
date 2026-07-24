import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is HeyDay Realty a real estate company in Gorakhpur?",
      answer:
        "Yes, HeyDay Realty Pvt. Ltd. is a Gorakhpur-based real estate company specializing in agricultural land, residential plots, farm land, and investment properties with transparent documentation and professional consultation.",
    },
    {
      question: "Does HeyDay Realty provide agricultural land?",
      answer:
        "Yes, we specialize in agricultural land, farm plots, and investment properties across Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti, and Sant Kabir Nagar. All properties undergo thorough legal verification.",
    },
    {
      question: "Can I schedule a site visit?",
      answer:
        "Absolutely. We arrange guided site visits so you can personally inspect the location, road connectivity, surrounding developments, and future growth potential before making your investment decision.",
    },
    {
      question: "Does HeyDay Realty help with property documentation?",
      answer:
        "Yes, our team provides complete documentation support including legal verification, ownership checks, registration guidance, and end-to-end assistance throughout the property buying process.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "HeyDay Realty serves customers across Gorakhpur, Deoria, Maharajganj, Kushinagar, Basti, and Sant Kabir Nagar in Eastern Uttar Pradesh, offering verified agricultural land and residential plots.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-center">
          <span className="text-[#7aac3b] text-xl">🌿</span>

          <h2 className="text-xl  font-bold text-[#08213f]">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="hidden sm:block h-[2px] w-14 bg-[#d8c28a]" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-4 flex items-center justify-between gap-4 text-left"
              >
                <h3 className="text-[#08213f] font-semibold text-sm  leading-6">
                  {faq.question}
                </h3>

                <span className="text-[#08213f] text-sm flex-shrink-0">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-60 px-4 sm:px-6 pb-4 sm:pb-5"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-[12px] leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link to="/contact">
            <button className="w-full sm:w-auto bg-[#b66a1d] hover:bg-[#9f5b17] text-white px-6 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm">
              More Questions? Contact Us →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;