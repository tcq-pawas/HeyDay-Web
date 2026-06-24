import { useState } from "react";
import agriculture from "../../assets/media/agriculture.png"
import bazar from "../../assets/media/bazar.png"
import farm from "../../assets/media/farm.png"
import highway from "../../assets/media/highway.png"
import kushmi from "../../assets/media/kushmi.png"
import madical from "../../assets/media/madicalroad.png"
import mohanapur from "../../assets/media/Mohanapur.png"
import nausad from "../../assets/media/nausad.png"
import raptinagar from "../../assets/media/raptinagar.png"
import residency from "../../assets/media/residency.png"
import rustampur from "../../assets/media/rustampur.png"
import taramandal from "../../assets/media/taramandal.png"

const properties = [
  {
    id: 1,
    category: "Residential",
    title: "Taramandal Premium Plot",
    location: "Taramandal, Gorakhpur",
    image: taramandal,
  },
  {
    id: 2,
    category: "Residential",
    title: "Rapti Nagar Residency Plot",
    location: "Rapti Nagar, Gorakhpur",
    image: raptinagar,
  },
  {
    id: 3,
    category: "Residential",
    title: "Padri Bazar Plot",
    location: "Padri Bazar, Gorakhpur",
    image: bazar,
  },
  {
    id: 4,
    category: "Commercial",
    title: "Medical College Road Plot",
    location: "Medical College Road",
    image: madical,
  },
  {
    id: 5,
    category: "Commercial",
    title: "Nausad Highway Plot",
    location: "Nausad, Gorakhpur",
    image:nausad,
  },
  {
    id: 6,
    category: "Commercial",
    title: "Golghar Business Plot",
    location: "Golghar, Gorakhpur",
    image:highway,
  },
  {
    id: 7,
    category: "Farm Land",
    title: "Kusmhi Farm Land",
    location: "Kusmhi, Gorakhpur",
    image:kushmi,
  },
  {
    id: 8,
    category: "Farm Land",
    title: "Jungle Kaudia Farm Land",
    location: "Jungle Kaudia",
    image:farm,
  },
  {
    id: 9,
    category: "Farm Land",
    title: "Pipraich Agriculture Land",
    location: "Pipraich",
    image:agriculture,
  },
  {
    id: 10,
    category: "Premium",
    title: "Rapti Nagar Premium Plot",
    location: "Rapti Nagar",
    image:raptinagar,
  },
  {
    id: 11,
    category: "Premium",
    title: "Civil Lines Luxury Plot",
    location: "Civil Lines",
    image:mohanapur,
  },
  {
    id: 12,
    category: "Premium",
    title: "Gorakhnath Premium Residency",
    location: "Gorakhnath",
    image:residency,
  },
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Farm Land",
  "Premium",
];

const PropertyGallery = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? properties
      : properties.filter((item) => item.category === active);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === category
                  ? "bg-[#f47c20] text-white shadow-md"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#f47c20] hover:text-[#f47c20]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-[#f47c20]/10 text-[#f47c20]">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-[#032349] mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.location}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-semibold text-[#f47c20]">
                    Starting ₹12 Lakh
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyGallery;