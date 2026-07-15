import React from "react";
import { MapPin } from "lucide-react";

const ServiceAreasSection = () => {
  const areas = [
    {
      name: "Gorakhpur",
      description: "Our headquarters and primary service area, offering extensive agricultural land and residential plot options across the district."
    },
    {
      name: "Deoria",
      description: "Serving Deoria district with verified agricultural properties and investment opportunities in developing corridors."
    },
    {
      name: "Maharajganj",
      description: "Providing land investment options in Maharajganj with focus on agricultural and residential properties."
    },
    {
      name: "Kushinagar",
      description: "Offering properties in the historic Kushinagar district with potential for appreciation and development."
    },
    {
      name: "Basti",
      description: "Extending our services to Basti district with verified land listings and professional property consultation."
    },
    {
      name: "Sant Kabir Nagar",
      description: "Serving Sant Kabir Nagar with agricultural land and residential plot options for investors and buyers."
    }
  ];

  return (
    <section className="bg-[#08213f] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 text-center">
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            OUR{" "}
            <span className="text-[#7aac3b]">
              SERVICE AREAS
            </span>
          </h2>
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
        </div>

        {/* Description */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base leading-7">
          HeyDay Realty serves customers across Eastern Uttar Pradesh, bringing local expertise and verified property listings to each district we operate in. Our team understands the unique characteristics of each market and provides tailored guidance for your property investment needs.
        </p>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#7aac3b]" />
                <h3 className="text-white font-semibold text-lg">
                  {area.name}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-6">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Looking for properties in these areas?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#7aac3b] hover:bg-[#6a9a34] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Contact Us for Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
