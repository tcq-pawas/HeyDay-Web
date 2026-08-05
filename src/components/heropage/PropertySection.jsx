import React from "react";
import { Link } from "react-router-dom";
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

import roshanbagh from "../../assets/images/home/card1.png";
import greencity from "../../assets/images/media/project/bhathat.png";
import sawastikpuram from "../../assets/images/home/card3.png";

const projects = [
  {
    image: roshanbagh,
    badge: "PREMIUM",
    title: "Roushan Baag Residency",
    status: "available",
    features: [
      "Premium Residential Plots",
      "Near Gorakhpur City",
      "Blacktop Roads",
      "Gated Entry",
    ],
  },
  {
    image: greencity,
    badge: "POPULAR",
    title: "Bhathat Green City",
    status: "available",
    features: [
      "Agricultural Farm Plots",
      "Plantation Ready",
      "High Appreciation Zone",
      "Peaceful Environment",
    ],
  },
  {
    image: sawastikpuram,
    badge: "BEST VALUE",
    title: "Swastik Puram",
    status: "soldout",
    features: [
      "Investment Plots",
      "Highway Connectivity",
      "Legal Documentation",
      "Developing Corridor",
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
    <section className="py-20 bg-white">
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
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
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
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-lg scale-75 group-hover:scale-100 transition-all duration-300 ease-out ${
                        project.status === "available" ? "bg-green-600" : "bg-red-600"
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
              <div className="p-6">
                <h3 className="text-sm font-bold text-[#08213f] mb-4">
                  {project.title}
                </h3>

                <ul className="space-y-2 mb-5">
                  {project.features.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-[12px] flex items-center gap-2"
                    >
                      <span className="text-[#f4a300]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
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