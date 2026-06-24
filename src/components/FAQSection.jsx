import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "Is the land legally verified?",
    answer:
      "Yes. Every project offered by HeyDay Realty undergoes complete legal verification, ownership checks, and document validation before being presented to customers. We ensure transparency and provide all necessary documentation for a secure investment.",
  },
  {
    question: "Can NRIs purchase these properties?",
    answer:
      "Yes. NRIs can purchase residential and investment plots in accordance with applicable Indian regulations. Our team also provides dedicated assistance throughout the documentation and registration process.",
  },
  {
    question: "Do you provide site visits?",
    answer:
      "Absolutely. We arrange guided site visits so you can personally inspect the location, road connectivity, surrounding developments, and future growth potential before making your investment decision.",
  },
  {
    question: "Is financing available?",
    answer:
      "Depending on the project and eligibility, financing options may be available through banking and financial partners. Our team can guide you through the available options and documentation requirements.",
  },
  {
    question: "How is ownership transferred?",
    answer:
      "Ownership is transferred through a legally registered sale deed and complete registration process. Our experts assist you at every step to ensure a smooth and hassle-free transfer of ownership.",
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">

          <span className="text-[#7aac3b] text-2xl">
            🌿
          </span>

          <h2 className="text-2xl md:text-2xl font-bold text-[#08213f]">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="h-[2px] w-14 bg-[#d8c28a]" />

        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >

                <h3 className="text-[#08213f] font-semibold text-base">
                  {faq.question}
                </h3>

                <span className="text-[#08213f] text-sm">
                  {openIndex === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </span>

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 px-6 pb-5"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-7">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">

          <button className="bg-[#b66a1d] hover:bg-[#9f5b17] text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
            More Questions? Contact Us →
          </button>

        </div>

      </div>

    </section>
  );
};

export default FAQSection;