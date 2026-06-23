import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a property visit?",
      answer:
        "You can easily schedule a visit by clicking the 'Book A Visit' button and selecting your preferred date and time.",
    },
    {
      question: "Do you provide free property consultation?",
      answer:
        "Yes! We offer a completely free consultation to help you choose the perfect property based on your needs and budget.",
    },
    {
      question: "Can I visit multiple properties?",
      answer:
        "Absolutely! You can explore multiple homes and compare them before making your final decision.",
    },
    {
      question: "What documents are required?",
      answer:
        "Basic identity proof, address proof, and financial documents may be required depending on the property type.",
    },
    {
      question: "Why choose HeyDay Realty?",
      answer:
        "We provide trusted guidance, premium listings, transparent pricing, and expert support to help you find your dream home.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] py-28 rounded-[50px] mx-4 lg:mx-10 my-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold uppercase tracking-[3px]">
            FAQ
          </p>

          <h1 className="text-5xl font-bold text-[#032349] mt-4">
            Frequently Asked Questions
          </h1>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto leading-7">
            Have questions? We are here to help you with
            everything you need to know about finding your
            perfect property.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-[25px]
              shadow-md border border-white/40 overflow-hidden
              hover:shadow-2xl duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h1 className="text-lg md:text-xl font-semibold text-[#032349]">
                  {faq.question}
                </h1>

                <span
                  className={`text-3xl font-light duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-blue-600"
                      : "text-orange-500"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 p-6 pt-0"
                    : "max-h-0"
                }`}
              >
                <p className="text-slate-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;