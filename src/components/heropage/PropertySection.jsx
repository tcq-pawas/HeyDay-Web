import React from "react";
import { Link } from "react-router-dom";
import {
  Sprout,
  Home,
  Building2,
  Landmark,
  Factory,
  Map,
} from "lucide-react";

import roshanbagh from "../../assets/images/home/roshanbagh.png";
import greencity from "../../assets/images/home/greencity-image.png";
import sawastikpuram from "../../assets/images/home/sawastikpuram-image.png";

const projects = [
  {
    image: roshanbagh,
    badge: "PREMIUM",
    title: "Roushan Baag Residency",
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

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] w-16 bg-[#d8c28a]" />
          <h2 className="text-2xl font-bold text-[#08213f] text-center">
            EXPLORE OUR{" "}
            <span className="text-[#7aac3b]">
              FEATURED PROJECTS
            </span>
          </h2>
          <div className="h-[2px] w-16 bg-[#d8c28a]" />
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />

                <span className="absolute top-3 left-3 bg-[#e66a10] text-white text-xs font-semibold px-3 py-1 rounded-md">
                  {project.badge}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-bold text-[#08213f] mb-4">
                  {project.title}
                </h3>

                <ul className="space-y-2 mb-5">

                  {project.features.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-sm flex items-center gap-2"
                    >
                      <span className="text-[#f4a300]">•</span>
                      {item}
                    </li>
                  ))}

                </ul>

                <Link
                  to="/projects"
                  className="text-[#f4a300] font-semibold text-sm hover:underline"
                >
                  View Project →
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Second Heading */}
        <div className="flex items-center justify-center gap-4 mt-20 mb-12">

          <div className="h-[2px] w-16 bg-[#d8c28a]" />

          <h2 className="text-2xl font-bold text-[#08213f] text-center">
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
                <div className="w-10 h-10 mx-auto rounded-full bg-[#08213f] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#a5c53b]" />
                </div>

                <h4 className="mt-4 text-sm font-semibold text-[#08213f] leading-6">
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