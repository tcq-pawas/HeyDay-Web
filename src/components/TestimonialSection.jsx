import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

import profile from "../assets/herobg.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ramesh Singh",
      role: "Investor",
      comment:
        "Very transparent and professional team. The land I purchased has excellent appreciation potential.",
    },
    {
      name: "Ankit Verma",
      role: "NRI Investor",
      comment:
        "As an NRI, I needed a reliable partner. HeyDay Realty made the entire process smooth and trustworthy.",
    },
    {
      name: "Vivek Yadav",
      role: "Business Owner",
      comment:
        "Best agricultural plot buying experience. Clear documentation and peaceful location.",
    },
    {
      name: "Priya Sharma",
      role: "Investor",
      comment:
        "Very supportive team. Everything from site visit to registration was handled professionally.",
    },
    {
      name: "Amit Mishra",
      role: "Land Buyer",
      comment:
        "Excellent location options and transparent dealing. Highly recommended.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + 3
  );

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-2xl font-bold text-[#08213f]">
            ✓ WHAT OUR{" "}
            <span className="text-[#7aac3b]">
              INVESTORS SAY
            </span>
          </h2>
        </div>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#3f372c] text-white flex items-center justify-center shadow-lg"
          >
            <FaChevronLeft size={12} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#3f372c] text-white flex items-center justify-center shadow-lg"
          >
            <FaChevronRight size={12} />
          </button>

          {/* Centered Cards */}
          <div className="flex flex-wrap justify-center gap-6 px-14">

            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[320px] bg-white rounded-2xl border border-gray-100 shadow-md p-5"
              >

                <FaQuoteLeft className="text-[#f4a300] text-xs mb-3" />

                <p className="text-gray-600 text-sm leading-7 min-h-[90px] text-center">
                  {item.comment}
                </p>

                <div className="flex items-center gap-3 mt-5 text-center justify-center mr-14">

                  <img
                    src={profile}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-[#08213f] text-sm">
                      {item.name}
                    </h4>

                    <p className="text-gray-500 text-xs">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TestimonialSection;