import React from "react";
import { MapPin } from "lucide-react";
import bg2 from "../assets/backgrounds/bg2.png";

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
    <section 
      className="bg-cover bg-center bg-no-repeat py-16 sm:py-20"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 text-center">
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
          <h2 className="text-xl  font-bold text-[#08213f]">
            OUR{" "}
            <span className="text-[#7aac3b]">
              SERVICE AREAS
            </span>
          </h2>
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 text-[12px] leading-7">
          HeyDay Realty serves customers across Eastern Uttar Pradesh, bringing local expertise and verified property listings to each district we operate in. Our team understands the unique characteristics of each market and provides tailored guidance for your property investment needs.
        </p>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-4 h-4 text-[#7aac3b]" />
                <h3 className="text-[#08213f] font-semibold text-sm">
                  {area.name}
                </h3>
              </div>
              <p className="text-gray-600 text-[12px] leading-6">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-gray-600 text-[12px] mb-4">
            Looking for properties in these areas?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#7aac3b] hover:bg-[#6a9a34] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 text-[15px]"
          >
            Contact Us for Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
