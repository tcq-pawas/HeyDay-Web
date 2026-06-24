import { FaMapMarkerAlt } from "react-icons/fa";
import kushmi from "../../assets/project/kushmi.png"
import nausad from "../../assets/project/nausad.png"
import mohanapur from "../../assets/project/Mohanapur.png"
import rustampur from "../../assets/project/rustampur.png"
import madical from "../../assets/project/madicalroad.png"
import taramandal from "../../assets/project/taramandal.png"

const projects = [
  {
    id: 1,
    image: madical,
    title: "Medical College Road Plots",
    location: "Medical College Road, Gorakhpur",
    size: "1000 Sq.ft",
    price: "₹14 Lakhs",
  },
  {
    id: 2,
    image: kushmi,
    title: "Kusmhi Forest View Plots",
    location: "Kusmhi, Gorakhpur",
    size: "1200 Sq.ft",
    price: "₹16 Lakhs",
  },
  {
    id: 3,
    image: nausad,
    title: "Nausad Highway Plots",
    location: "Nausad, Gorakhpur",
    size: "1500 Sq.ft",
    price: "₹20 Lakhs",
  },
  {
    id: 4,
    image: taramandal,
    title: "Taramandal Premium Plots",
    location: "Taramandal, Gorakhpur",
    size: "1800 Sq.ft",
    price: "₹28 Lakhs",
  },
  {
    id: 5,
    image: rustampur,
    title: "Rustampur Garden Plots",
    location: "Rustampur, Gorakhpur",
    size: "1100 Sq.ft",
    price: "₹15 Lakhs",
  },
  {
    id: 6,
    image: mohanapur,
    title: "Mohanapur Township Plots",
    location: "Mohanapur, Gorakhpur",
    size: "2000 Sq.ft",
    price: "₹32 Lakhs",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-25 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#f47c20] uppercase tracking-[3px] text-sm font-semibold">
            Our Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#032349] mt-3">
            Featured Properties
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Explore premium plotted developments designed for future growth and secure investment.
          </p>

          <div className="w-20 h-1 bg-[#f47c20] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-5">

                <div className="flex items-center gap-2 text-[#f47c20] text-sm mb-2">
                  <FaMapMarkerAlt />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-lg font-medium text-[#032349]">
                  {project.title}
                </h3>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">

                  <div>
                    <p className="text-xs text-gray-400">Plot Size</p>
                    <p className="font-semibold text-[#032349]">
                      {project.size}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-400">Starting Price</p>
                    <p className="font-bold text-[#f47c20]">
                      {project.price}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;