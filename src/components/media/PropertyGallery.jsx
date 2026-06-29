import { useState } from "react";
import {
  FaImages,
  FaLeaf,
  FaHome,
  FaWarehouse,
  FaRoad,
} from "react-icons/fa";
import { MdVilla } from "react-icons/md";

import agricultureLand from "../../assets/images/media/agriculture-land.png";
import agricultureLand2 from "../../assets/images/media/agriculture-land2.png";
import agricultureLand3 from "../../assets/images/media/agriculture-land3.png";
import primiumland from "../../assets/images/media/internalroad.png";
import primiumland2 from "../../assets/images/media/residency1.png";
import primiumland3 from "../../assets/images/media/residency2.png";
import primiumland4 from "../../assets/images/media/residency3.png";
import primiumland5 from "../../assets/images/media/residency4.png";
import gated from "../../assets/images/media/gated-land.png";
import farm from "../../assets/images/media/farmland.png"
import farm2 from "../../assets/images/media/farmhouse2.png"
import farm3 from "../../assets/images/media/farmhouse3.png"
import roadland from "../../assets/images/media/roadside.png";
import roadland2 from "../../assets/images/media/roadside2.png";
import roadland3 from "../../assets/images/media/roadside3.png";



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
    image: agricultureLand,
    title: "Agricultural Land",
    category: "Agricultural Land",
  },
  {
    image: primiumland,
    title: "Premium Plots",
    category: "Residential Plots",
  },
  {
    image: farm,
    title: "Farmhouse Plots",
    category: "Farmhouse Plots",
  },
  {
    image: gated,
    title: "Gated Community",
    category: "Gated Projects",
  },
  {
    image: primiumland2,
    title: "Investment Plots",
    category: "Residential Plots",
  },
  {
    image: roadland,
    title: "Roadside Land",
    category: "Roadside Land",
  },
  {
    image: roadland2,
    title: "Bhathat Green City",
    category: "Roadside Land",
  },
  {
    image: primiumland3,
    title: "Swastik Puram",
    category: "Residential Plots",
  },
  {
    image: roadland3,
    title: "Roushan Baag Residency",
    category: "Roadside Land",
  },
  {
    image: agricultureLand2,
    title: "Agricultural Land 2",
    category: "Agricultural Land",
  },
  {
    image: agricultureLand3,
    title: "Agricultural Land 3",
    category: "Agricultural Land",
  },
  {
    image: primiumland4,
    title: "Residential Plots 2",
    category: "Residential Plots",
  },
  {
    image: primiumland5,
    title: "Residential Plots 3",
    category: "Residential Plots",
  },
  {
    image: farm2,
    title: "Farmhouse Plots 2",
    category: "Farmhouse Plots",
  },
  {
    image: farm3,
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
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${activeCategory === item.name
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