import {
  FaArrowRight,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import mainImage from "../../assets/images/project/project-hero.png";
import thumb1 from "../../assets/images/home/short3-image.png";
import thumb2 from "../../assets/images/home/short2-image.png";
import thumb3 from "../../assets/images/project/project-bg.png";
import thumb4 from "../../assets/images/home/greencity-image.png";

const ProjectsHero = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Legal & Verified",
      text: "All our projects are legally verified and RERA compliant.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Premium Locations",
      text: "Strategically located in high-growth corridors.",
    },
    {
      icon: <FaChartLine />,
      title: "High Investment Potential",
      text: "Designed for long-term returns and future value appreciation.",
    },
    {
      icon: <FaHandshake />,
      title: "Trusted by 1000+ Families",
      text: "Building trust through transparency and commitment.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Area */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={mainImage}
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081d35]/90 via-[#081d35]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 md:pt-22 pb-12 md:pb-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-xl flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <span className="text-[#d39b34] uppercase tracking-[4px] sm:tracking-[6px] text-[10px] font-semibold ">
              Our Projects
            </span>

            <h1 className="mt-3 text-3xl font-bold text-white">
              Signature Land.
              <br />
              Timeless <span className="text-[#74bd2b]">Value.</span>
            </h1>
            

            <p className="mt-4 text-[12px] leading-7 text-white/90 max-w-lg">
              Explore our premium land and plotted development projects designed
              for a secure future and long-term growth.
            </p>



            {/* Gallery - Visible on All Screens */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[thumb1, thumb2, thumb3, thumb4].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-16 sm:w-28 sm:h-20 rounded-lg object-cover border-2 border-white/60 shadow-xl transition-all duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar - Hidden on Mobile */}
      <div className="hidden md:block relative z-20 bg-[#08213f]/95 bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 py-5 sm:py-6 lg:py-6 px-4 sm:px-0 lg:px-6 border-white/15 border-b sm:odd:border-r lg:border-b-0 lg:border-r last:border-r-0 text-center sm:text-left"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#08213f] text-xl shadow-lg text-[#a5c53b]">
                  {item.icon}
                </div>

                <div className="ml-0 sm:ml-4">
                  <h3 className="text-white text-[15px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-white/85 text-[12px] leading-6 max-w-[260px] sm:max-w-none mx-auto sm:mx-0">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;