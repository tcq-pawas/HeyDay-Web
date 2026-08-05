import React from "react";
import {
  FaLeaf,
  FaFileAlt,
  FaMapMarkerAlt,
  FaChartLine,
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
  FaRegFileAlt,
  FaStar,
} from "react-icons/fa";

import heroBg from "../../assets/images/home/herobg.png";

const serviceItems = [
  {
    icon: FaLeaf,
    title: "Agricultural Land",
    desc: "Verified farmland with clear titles",
  },
  {
    icon: FaFileAlt,
    title: "Documentation",
    desc: "Hassle-free legal paperwork",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Site Visit Assistance",
    desc: "Expert guidance at every step",
  },
  {
    icon: FaChartLine,
    title: "Investment Advisory",
    desc: "Smart investment, higher returns",
  },
];

const statItems = [
  { icon: FaShieldAlt, value: "6+", label: ["Professional", "Services"] },
  { icon: FaUsers, value: "100+", label: ["Site Visits", "Monthly"] },
  { icon: FaRegFileAlt, value: "100%", label: ["Legal", "Documentation"] },
  { icon: FaStar, value: "1000+", label: ["Satisfied", "Investors"] },
];

const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#071421]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071421]/90 via-[#071421]/60 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 md:pt-8 lg:pt-24 pb-8 md:pb-8 lg:pb-16 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 md:gap-6 lg:gap-16 items-center w-full">
          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-3xl mt-3 md:mt-0 text-left lg:text-left">
            {/* Small Heading */}
            <span className="uppercase tracking-[4px] sm:tracking-[6px] text-[#F4B53F] text-[10px] font-semibold">
              OUR SERVICES
            </span>

            <div className="w-20 sm:w-24 h-1 bg-[#F4B53F] rounded-full mt-2 mb-6 "></div>

            {/* Main Heading */}
            <h1 className="text-white font-bold leading-tight">
              <span className="block text-3xl ">
                Complete Property
              </span>
              <span className="block text-3xl">
                <span className="text-[#9BEA00]">Solutions</span> for
              </span>
              <span className="block text-3xl">
                Modern Investors.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 md:mt-4 lg:mt-6 text-[12px] leading-7 md:leading-6 lg:leading-9 text-white/85 max-w-2xl">
              From verified agricultural land and residential plots to
              documentation, site visits, legal verification, and investment
              consulting, we make every property purchase simple, secure, and
              transparent.
            </p>
          </div>

          {/* ================= RIGHT GLASS PANEL ================= */}
          <div className="hidden md:flex justify-center md:justify-end md:pr-2 lg:pr-10 md:mt-8">
            <div className="w-full max-w-[280px] md:max-w-[280px] lg:max-w-[400px] rounded-[16px] lg:rounded-[20px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,.45)] overflow-hidden">
              {/* Services */}
              <div className="divide-y divide-white/10">
                {serviceItems.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group flex items-center justify-between gap-2 lg:gap-3 px-4 py-2.5 md:px-4 md:py-2.5 lg:px-6 lg:py-4 hover:bg-white/5 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                      <div className="w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-lg bg-[#2F6F2E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="text-white text-[14px] " />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-white text-[12px]  font-semibold truncate">
                          {title}
                        </h3>
                        <p className="text-white/70 text-[10px] mt-0.5 truncate">
                          {desc}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-4 divide-x divide-white/10 border-t border-white/10 bg-black/10">
                {statItems.map(({ icon: Icon, value, label }) => (
                  <div key={value} className="py-2.5 md:py-2.5 lg:py-4 text-center px-1">
                    <Icon className="mx-auto text-[#9BEA00] text-sm mb-1" />

                    <h3 className="text-white text-[13px] font-bold">{value}</h3>

                    <p className="text-white/70 text-[10px] mt-1 leading-3 lg:leading-4">
                      {label[0]}
                      <br />
                      {label[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ================= END RIGHT PANEL ================= */}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;