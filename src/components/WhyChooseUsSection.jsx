import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    "Verified Property Listings",
    "Agricultural Land Specialists",
    "Residential Plot Experts",
    "Property Investment Guidance",
    "Transparent Documentation",
    "Professional Property Consultation",
    "Local Market Knowledge",
    "Site Visit Assistance",
    "End-to-End Buying Support"
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 text-center">
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
          <h2 className="text-xl  font-bold text-[#08213f]">
            WHY CHOOSE{" "}
            <span className="text-[#7aac3b]">
              HEYDAY REALTY
            </span>
          </h2>
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-[#7aac3b]" />
              </div>
              <p className="text-[#08213f] font-medium text-sm  leading-6">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
