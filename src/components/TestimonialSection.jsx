import { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const TestimonialSection = () => {

  const testimonials = [
    {
      comment:
        "HeyDay Realty made finding our first home an absolute breeze. Their knowledge of the market and dedication to our needs was unmatched.",
      name: "Shalini & Pramod",
      role: "Homeowners, Downtown District",
    },

    {
      comment:
        "The entire buying process felt smooth and stress-free. Their team helped us find the perfect family home in no time.",
      name: "Suraj Maurya",
      role: "Property Buyer",
    },

    {
      comment:
        "Professional, trustworthy, and very responsive. We found our dream apartment faster than expected.",
      name: "Priti Singh",
      role: "Apartment Owner",
    },

    {
      comment:
        "Amazing experience from start to finish. They truly cared about our needs and budget.",
      name: "Rahul & Sharavini",
      role: "Luxury Home Clients",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-24 mb-20">
      <div className="bg-[#f4f7fc] py-24 px-16 relative rounded-sm">

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center text-blue-500 text-3xl hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center text-blue-500 text-3xl hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <FaChevronRight />
        </button>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[50px] font-bold text-[#102a56] uppercase">
            WHAT OUR CLIENTS SAY
          </h1>

          <div className="w-24 h-1 bg-[#d5a03f] mx-auto mt-4 rounded-full"></div>

          <FaQuoteLeft className="text-[#d5a03f] text-4xl mx-auto mt-5" />

          <p className="text-[22px] text-gray-700 mt-8 leading-[55px] font-medium">
            {testimonials[currentIndex].comment}
          </p>

          <div className="flex justify-center gap-2 text-yellow-500 text-4xl mt-8">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h2 className="text-[22px] font-bold text-[#102a56] mt-8">
            {testimonials[currentIndex].name}
          </h2>

          <p className="text-gray-500 text-lg mt-1">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;