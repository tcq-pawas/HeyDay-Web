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
    title: "Swastik Puram Plots",
    location: "Near by Fartilizer Factory",
    price: "₹14 Lac",
    badge: "Premium",
    description:
      "Strategically located on Fartilizer Factory, these plots offer excellent connectivity to prime destinations, educational institutes, and healthcare facilities. Ideal for residential investment with high appreciation potential.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1799 Sq.ft", text: "Plot Size" },
      { icon: FaRoad, title: "Wide Roads", text: "Road Access" },
      { icon: FaShieldAlt, title: "Secured Community", text: "24x7 Security" },
    ],
  },
  {
    id: 2,
    image: kushmi,
    title: "Bhathat GreenCity View Plots",
    location: "Bhathat, Gorakhpur",
    price: "₹16 Lac",
    badge: "Premium",
    description:
      "Surrounded by lush greenery and a peaceful environment, Kushmi offers the perfect blend of nature and modern living. A great choice for those seeking serenity and strong returns.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "1499 Sq.ft", text: "Plot Size" },
      { icon: FaLeaf, title: "Green Surroundings", text: "Environment" },
      { icon: FaShieldAlt, title: "24x7 Security", text: "Security" },
    ],
  },
  {
    id: 3,
    image: nausad,
    title: "Roshan Baag Residency",
    location: "Bhathat Chowk, Gorakhpur",
    price: "₹20 Lac",
    badge: "Best Value",
    description:
      "Located near the main highway for unmatched connectivity and future growth. Perfect for investors looking for high value appreciation and easy accessibility.",
    features: [
      { icon: FaHome, title: "Residential", text: "Plot Type" },
      { icon: BsBoundingBoxCircles, title: "699 Sq.ft", text: "Plot Size" },
      { icon: FaRoad, title: "Highway Access", text: "Connectivity" },
      { icon: FaTint, title: "Drainage System", text: "Infrastructure" },
    ],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="overflow-hidden bg-[#faf8f5] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold uppercase text-[#032349]">
            Our <span className="text-[#7aac3b]">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl leading-7 text-gray-600 text-[12px] md:leading-8">
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
                      <BadgeIcon className="text-[8px]" />
                      {project.badge}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-[14px] font-bold leading-snug text-[#1f2d3d]">
                            {project.title}
                          </h3>

                          <p className="mt-2 flex items-center gap-1.5 text-[12px] font-medium text-gray-600">
                            <FaMapMarkerAlt className="text-[#3f8b65]" />
                            {project.location}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-start gap-3">
                          <div className="text-right">
                            <h4 className="text-sm font-bold text-[#16814d]">
                              {project.price}
                            </h4>
                            <p className="text-[10px] font-semibold text-[#16814d]">
                              onwards
                            </p>
                          </div>

                          
                        </div>
                      </div>

                      <p className="mt-4 max-w-3xl text-[12px] leading-6 text-gray-600">
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
                            <Icon className="shrink-0 text-xl text-[#3f8b65]" />

                            <div>
                              <h5 className="text-[10px] font-bold leading-tight text-[#1f2d3d]">
                                {feature.title}
                              </h5>
                              <p className="mt-0.5 text-[9px] font-medium leading-tight text-gray-500">
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