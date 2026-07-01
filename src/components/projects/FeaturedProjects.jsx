import { FaMapMarkerAlt } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";

import kushmi from "../../assets/images/project/kushmi.png";
import nausad from "../../assets/images/project/nausad.png";
import mohanapur from "../../assets/images/project/Mohanapur.png";
import rustampur from "../../assets/images/project/rustampur.png";
import madical from "../../assets/images/project/madicalroad.png";
import taramandal from "../../assets/images/project/taramandal.png";

const projects = [
  {
    id: 1,
    image: madical,
    title: "Medical College Road Plots",
    location: "Medical College Road, Gorakhpur",
    size: "1000 Sq.ft",
    price: "₹14 Lac onwards",
    badge: "Premium",
  },
  {
    id: 2,
    image: kushmi,
    title: "Kusmhi Forest View Plots",
    location: "Kusmhi, Gorakhpur",
    size: "1200 Sq.ft",
    price: "₹16 Lac onwards",
    badge: "Premium",
  },
  {
    id: 3,
    image: nausad,
    title: "Nausad Highway Plots",
    location: "Nausad, Gorakhpur",
    size: "1500 Sq.ft",
    price: "₹20 Lac onwards",
    badge: "Best Value",
  },
  {
    id: 4,
    image: taramandal,
    title: "Taramandal Premium Plots",
    location: "Taramandal, Gorakhpur",
    size: "1800 Sq.ft",
    price: "₹28 Lac onwards",
    badge: "Premium",
  },
  {
    id: 5,
    image: rustampur,
    title: "Rustampur Garden Plots",
    location: "Rustampur, Gorakhpur",
    size: "1100 Sq.ft",
    price: "₹15 Lac onwards",
    badge: "Premium",
  },
  {
    id: 6,
    image: mohanapur,
    title: "Mohanapur Township Plots",
    location: "Mohanapur, Gorakhpur",
    size: "2000 Sq.ft",
    price: "₹32 Lac onwards",
    badge: "Premium",
  },
];

const tabs = [
  "All Projects",
  "Residential Plots",
  "Farmhouse Plots",
  "Investment Land",
  "Gated Communities",
  "Commercial Land",
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold text-[#032349] uppercase">
            Our <span className="text-[#7aac3b]">Projects</span>
          </h2>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-gray-600 text-base md:text-medium leading-8">
            Explore our carefully selected land investment opportunities across
            Gorakhpur. From premium residential plots to high-growth investment
            locations, every project is strategically chosen to offer excellent
            connectivity, legal transparency, and long-term value for homeowners
            and investors alike.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid lg:grid-cols-[35%_1fr] gap-6 items-stretch"
            >
              {/* Left Card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-[#032349] leading-snug">
                      {project.title}
                    </h3>

                    <span
                      className={`text-[10px] px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${
                        project.badge === "Best Value"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    {project.location}
                  </p>

                  <div className="flex flex-wrap gap-5 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <BsGrid className="text-[#c66b1d]" />
                      Residential
                    </div>

                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#c66b1d]" />
                      {project.size}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-6">
                    Premium plotted development with excellent connectivity,
                    wide roads and excellent investment potential.
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <h4 className="text-1xl font-bold text-[#c66b1d]">
                    {project.price}
                  </h4>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[260px] rounded-2xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;