import React from "react";
import {
  Sprout,
  Home,
  Building2,
  Landmark,
  Factory,
  Map,
  Check,
  X,
} from "lucide-react";

import {
  FaMapMarkerAlt,
  FaWater,
  FaStore,
  FaRoad,
  FaSchool,
  FaBuilding,
  FaArrowCircleUp,
  FaUniversity,
  FaShieldAlt,
  FaHospital,
  FaTrain,
  FaIndustry,
} from "react-icons/fa";

import roshanbagh from "../../assets/images/home/card1.png";
import greencity from "../../assets/images/media/project/bhathat.png";
import sawastikpuram from "../../assets/images/home/card3.png";
import bg1 from "../../assets/backgrounds/bg1.png";

const projects = [
  {
    image: sawastikpuram,
    badge: "BEST VALUE",
    title: "Swastik Puram",
    status: "soldout",
    locationAdvantages: [
      {
        icon: FaIndustry,
        text: "Fertilizer Factory (1 km)",
      },
      {
        icon: FaSchool,
        text: "Aadharshila Inter CBSE Inter College (1 km)",
      },
      {
        icon: FaRoad,
        text: "Outer Ring Road (500 mtr)",
      },
      {
        icon: FaWater,
        text: "Chilua Lake Front (Nauka Vihar 3.0) (2.5 km)",
      },
      {
        icon: FaSchool,
        text: "Sainik School (1 km)",
      },
      {
        icon: FaHospital,
        text: "BRD Medical College (3 km)",
      },
      {
        icon: FaHospital,
        text: "Mini PGI (4 km)",
      },
      {
        icon: FaTrain,
        text: "Gorakhpur Railway Station (10 km)",
      },
    ],
  },
  {
    image: greencity,
    badge: "POPULAR",
    title: "Bhathat Green City",
    status: "available",
    locationAdvantages: [
      {
        icon: FaUniversity,
        text: "Mahayogi Guru Gorakhnath AYUSH University (2.5 km)",
      },
      {
        icon: FaRoad,
        text: "On Highway (Medical To Bhathat)",
      },
      {
        icon: FaShieldAlt,
        text: "Bhathat Police Station (200 mtr)",
      },
      {
        icon: FaHospital,
        text: "Al-Amin Hospital (100 mtr)",
      },
      {
        icon: FaHospital,
        text: "BRD Medical College (10 km)",
      },
      {
        icon: FaTrain,
        text: "Gorakhpur Railway Station (18 km)",
      },
      {
        icon: FaRoad,
        text: "Transportation & Highway Connectivity (2 mins only)",
      },
    ],
  },
  {
    image: roshanbagh,
    badge: "PREMIUM",
    title: "Roushan Baag Residency",
    status: "available",
    locationAdvantages: [
      { icon: FaWater, text: "Government Developed Pond" },
      { icon: FaStore, text: "Bhathat Chowk (4 km)" },
      { icon: FaRoad, text: "Bhathat Bazaar to Pipraich Link Road (3 km)" },
      { icon: FaSchool, text: "HP Children Academy (1 km)" },
    ],
  },
];

const categories = [
  { icon: Sprout, title: "Agricultural Land" },
  { icon: Home, title: "Farmhouse Plots" },
  { icon: Building2, title: "Residential Plots" },
  { icon: Landmark, title: "Investment Lands" },
  { icon: Factory, title: "Commercial Roadside Land" },
  { icon: Map, title: "Gated Plotting Projects" },
];

const PropertySection = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] w-16 bg-[#d8c28a]" />

          <h2 className="text-xl font-bold text-[#08213f] text-center">
            EXPLORE OUR{" "}
            <span className="text-[#7aac3b]">
              FEATURED PROJECTS
            </span>
          </h2>

          <div className="h-[2px] w-16 bg-[#d8c28a]" />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} - HeyDay Realty Property in Gorakhpur`}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  width="400"
                  height="160"
                />

                <span className="absolute top-3 left-3 bg-[#e66a10] text-white text-[9px] font-semibold px-3 py-1 rounded-md">
                  {project.badge}
                </span>

                {/* Availability Status Indicator */}
                <div className="absolute top-3 right-5">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-lg scale-75 group-hover:scale-100 transition-all duration-300 ease-out ${project.status === "available" ? "bg-green-600" : "bg-red-600"
                        }`}
                    >
                      {project.status === "available" ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <X className="w-4 h-4 text-white" />
                      )}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <div className="w-2 h-2 bg-black rotate-45 mb-[-4px]"></div>
                      <div className="px-2 py-1 bg-black text-white text-[10px] font-semibold rounded-md whitespace-nowrap">
                        {project.status === "available" ? "Available" : "Sold Out"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-[#08213f] mb-4">
                  {project.title}
                </h3>

                {/* Location Advantages */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <FaMapMarkerAlt className="text-[#f59e0b]" size={13} />
                    <h4 className="font-semibold text-[#08213f] text-[13px]">
                      Location Advantages
                    </h4>
                  </div>

                  <div className="flex flex-col">
                    {project.locationAdvantages.map((item, i) => {
                      const Icon = item.icon;
                      const isLast = i === project.locationAdvantages.length - 1;
                      return (
                        <div
                          key={i}
                          className={`py-1.5 flex items-center gap-2 ${isLast ? "" : "border-b border-gray-100"
                            }`}
                        >
                          <Icon className="text-[#f59e0b]" size={13} />
                          <span className="text-gray-700 text-[12px] ">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Heading */}
        <div className="flex items-center justify-center gap-4 mt-20 mb-12">
          <div className="h-[2px] w-16 bg-[#d8c28a]" />

          <h2 className="text-xl font-bold text-[#08213f] text-center">
            LAND OPPORTUNITIES FOR{" "}
            <span className="text-[#7aac3b]">
              EVERY INVESTOR
            </span>
          </h2>

          <div className="h-[2px] w-16 bg-[#d8c28a]" />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-8 h-8 mx-auto rounded-full bg-[#08213f] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#a5c53b]" />
                </div>

                <h4 className="mt-4 text-xs font-semibold text-[#08213f] leading-6">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertySection;