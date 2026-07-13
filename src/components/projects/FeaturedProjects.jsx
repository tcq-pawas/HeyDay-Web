import {
  FaMapMarkerAlt,
  FaStar,
  FaGem,
  FaHome,
  FaRoad,
  FaShieldAlt,
  FaLeaf,
  FaUniversity,
  FaTint,
  FaTree,
  FaEllipsisV,
} from "react-icons/fa";
import { BsBoundingBoxCircles } from "react-icons/bs";

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
    price: "₹14 Lac",
    badge: "Premium",
    description:
      "Strategically located on Medical College Road, these plots offer excellent connectivity to prime destinations, educational institutes, and healthcare facilities. Ideal for residential investment with high appreciation potential.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1000 Sq.ft", text: "Plot Size" },
      { icon: FaRoad, title: "Wide Roads", text: "Road Access" },
      { icon: FaShieldAlt, title: "Secured Community", text: "24x7 Security" },
    ],
  },
  {
    id: 2,
    image: kushmi,
    title: "Kusmhi Forest View Plots",
    location: "Kusmhi, Gorakhpur",
    price: "₹16 Lac",
    badge: "Premium",
    description:
      "Surrounded by lush greenery and a peaceful environment, Kushmi offers the perfect blend of nature and modern living. A great choice for those seeking serenity and strong returns.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1200 Sq.ft", text: "Plot Size" },
      { icon: FaLeaf, title: "Green Surroundings", text: "Environment" },
      { icon: FaShieldAlt, title: "24x7 Security", text: "Security" },
    ],
  },
  {
    id: 3,
    image: nausad,
    title: "Nausad Highway Plots",
    location: "Nausad, Gorakhpur",
    price: "₹20 Lac",
    badge: "Best Value",
    description:
      "Located near the main highway for unmatched connectivity and future growth. Perfect for investors looking for high value appreciation and easy accessibility.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1500 Sq.ft", text: "Plot Size" },
      { icon: FaRoad, title: "Highway Access", text: "Connectivity" },
      { icon: FaTint, title: "Drainage System", text: "Infrastructure" },
    ],
  },
  {
    id: 4,
    image: taramandal,
    title: "Taramandal Premium Plots",
    location: "Taramandal, Gorakhpur",
    price: "₹28 Lac",
    badge: "Premium",
    description:
      "Well-planned gated community with modern amenities, wide roads, and a clean environment. A perfect space to build your dream home or invest for the future.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1800 Sq.ft", text: "Plot Size" },
      { icon: FaUniversity, title: "Gated Community", text: "Security" },
      { icon: FaTree, title: "Parks & Open Space", text: "Amenities" },
    ],
  },
  {
    id: 5,
    image: rustampur,
    title: "Rustampur Garden Plots",
    location: "Rustampur, Gorakhpur",
    price: "₹15 Lac",
    badge: "Premium",
    description:
      "A calm residential location with planned plots, road access, and peaceful surroundings. Suitable for families and smart land investment.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1100 Sq.ft", text: "Plot Size" },
      { icon: FaLeaf, title: "Green Area", text: "Environment" },
      { icon: FaShieldAlt, title: "Secure Location", text: "Safety" },
    ],
  },
  {
    id: 6,
    image: mohanapur,
    title: "Mohanapur Township Plots",
    location: "Mohanapur, Gorakhpur",
    price: "₹32 Lac",
    badge: "Premium",
    description:
      "Premium township plots with future-ready planning, wide internal roads, and excellent long-term appreciation potential.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "2000 Sq.ft", text: "Plot Size" },
      { icon: FaRoad, title: "Wide Roads", text: "Access" },
      { icon: FaUniversity, title: "Township", text: "Planning" },
    ],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="overflow-hidden bg-[#faf8f5] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold uppercase text-[#032349]">
            Our <span className="text-[#7aac3b]">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
            Explore our carefully selected land investment opportunities across
            Gorakhpur. From premium residential plots to high-growth investment
            locations, every project is strategically chosen to offer excellent
            connectivity, legal transparency, and long-term value.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const isBestValue = project.badge === "Best Value";
            const BadgeIcon = isBestValue ? FaGem : FaStar;

            return (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_3px_14px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(15,23,42,0.1)]"
              >
                <div className="grid lg:grid-cols-[36%_1fr]">
                  <div className="relative h-[220px] lg:h-auto lg:min-h-[210px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />

                    <div
                      className={`absolute left-3 top-3 flex items-center gap-1.5 rounded px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-md ${
                        isBestValue ? "bg-[#2f8b57]" : "bg-[#d7a23a]"
                      }`}
                    >
                      <BadgeIcon className="text-[9px]" />
                      {project.badge}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold leading-snug text-[#1f2d3d]">
                            {project.title}
                          </h3>

                          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-gray-600">
                            <FaMapMarkerAlt className="text-[#3f8b65]" />
                            {project.location}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-start gap-3">
                          <div className="text-right">
                            <h4 className="text-xl font-bold text-[#16814d]">
                              {project.price}
                            </h4>
                            <p className="text-xs font-semibold text-[#16814d]">
                              onwards
                            </p>
                          </div>

                          
                        </div>
                      </div>

                      <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 border-t border-gray-200 pt-4 sm:grid-cols-4">
                      {project.features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                          <div
                            key={index}
                            className={`flex items-center gap-2 px-2 py-2 ${
                              index !== 0
                                ? "sm:border-l sm:border-gray-200"
                                : ""
                            }`}
                          >
                            <Icon className="shrink-0 text-2xl text-[#3f8b65]" />

                            <div>
                              <h5 className="text-[11px] font-bold leading-tight text-[#1f2d3d]">
                                {feature.title}
                              </h5>
                              <p className="mt-0.5 text-[10px] font-medium leading-tight text-gray-500">
                                {feature.text}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;