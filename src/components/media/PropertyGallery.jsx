import { useState } from "react";
import {
  FaImages,
  FaLeaf,
  FaHome,
  FaWarehouse,
  FaRoad,
} from "react-icons/fa";
import { MdVilla } from "react-icons/md";

import kushmi from "../../assets/project/kushmi.png";
import nausad from "../../assets/project/nausad.png";
import mohanapur from "../../assets/project/Mohanapur.png";
import rustampur from "../../assets/project/rustampur.png";
import madical from "../../assets/project/madicalroad.png";
import taramandal from "../../assets/project/taramandal.png";
import bhathat from "../../assets/project/taramandal.png";
import swastik from "../../assets/project/rustampur.png";
import roshanbag from "../../assets/project/kushmi.png";

const categories = [
  {
    name: "All Images",
    icon: <FaImages />,
  },
  {
    name: "Agricultural Land",
    icon: <FaLeaf />,
  },
  {
    name: "Residential Plots",
    icon: <FaHome />,
  },
  {
    name: "Farmhouse Plots",
    icon: <MdVilla />,
  },
  {
    name: "Gated Projects",
    icon: <FaWarehouse />,
  },
  {
    name: "Roadside Land",
    icon: <FaRoad />,
  },
];

const gallery = [
  {
    image: kushmi,
    title: "Agricultural Land",
    category: "Agricultural Land",
  },
  {
    image: nausad,
    title: "Residential Plots",
    category: "Residential Plots",
  },
  {
    image: mohanapur,
    title: "Farmhouse Plots",
    category: "Farmhouse Plots",
  },
  {
    image: rustampur,
    title: "Gated Community",
    category: "Gated Projects",
  },
  {
    image: madical,
    title: "Investment Plots",
    category: "Residential Plots",
  },
  {
    image: taramandal,
    title: "Roadside Land",
    category: "Roadside Land",
  },
  {
    image: bhathat,
    title: "Bhathat Green City",
    category: "Gated Projects",
  },
  {
    image: swastik,
    title: "Swastik Puram",
    category: "Residential Plots",
  },
  {
    image: roshanbag,
    title: "Roushan Baag Residency",
    category: "Gated Projects",
  },
  {
    image: kushmi,
    title: "Agricultural Land 2",
    category: "Agricultural Land",
  },
  {
    image: kushmi,
    title: "Agricultural Land 3",
    category: "Agricultural Land",
  },
  {
    image: nausad,
    title: "Residential Plots 2",
    category: "Residential Plots",
  },
  {
    image: nausad,
    title: "Residential Plots 3",
    category: "Residential Plots",
  },
  {
    image: mohanapur,
    title: "Farmhouse Plots 2",
    category: "Farmhouse Plots",
  },
  {
    image: mohanapur,
    title: "Farmhouse Plots 3",
    category: "Farmhouse Plots",
  },
];

const MediaHero = () => {
  const [activeCategory, setActiveCategory] = useState("All Images");

  // Filter Images
  const filteredGallery =
    activeCategory === "All Images"
      ? gallery // Show ALL images
      : gallery
          .filter((item) => item.category === activeCategory)
          .slice(0, 5); // Show only first 5 images of selected category

  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#b66a1d] uppercase tracking-[3px] font-semibold">
            Gallery
          </p>

          <h2 className="text-4xl md:text-4xl font-bold text-[#1d1d1d] mt-3">
            Explore Our Collection
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Browse our premium collection of agricultural lands,
            residential plots, gated communities, farmhouse plots,
            and investment opportunities.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(item.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === item.name
                  ? "bg-[#b66a1d] text-white border-[#b66a1d]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#b66a1d] hover:text-[#b66a1d]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredGallery.length > 0 ? (
            filteredGallery.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-5 left-5">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                    {item.title}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500 text-lg">
                No images found.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default MediaHero;