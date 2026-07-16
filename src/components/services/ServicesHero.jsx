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
        <section className="relative min-h-screen overflow-hidden">
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
            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-14 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* ================= LEFT CONTENT ================= */}
                    <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                        {/* Small Heading */}
                        <span className="uppercase tracking-[4px] sm:tracking-[6px] text-[#F4B53F] text-xs sm:text-sm font-semibold">
                            OUR SERVICES
                        </span>

                        <div className="w-20 sm:w-24 h-1 bg-[#F4B53F] rounded-full mt-4 sm:mt-5 mb-6 sm:mb-8 lg:mb-10 mx-auto lg:mx-0"></div>

                        {/* Main Heading */}
                        <h1 className="text-white font-bold leading-tight">
                            <span className="block text-2xl sm:text-3xl lg:text-5xl">
                                Complete Property
                            </span>
                            <span className="block text-2xl sm:text-3xl lg:text-5xl">
                                <span className="text-[#9BEA00]">Solutions</span> for
                            </span>
                            <span className="block text-2xl sm:text-3xl lg:text-5xl">
                                Modern Investors.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 sm:mt-8 lg:mt-10 text-white/85 text-sm sm:text-base leading-7 sm:leading-9 lg:leading-10 max-w-2xl mx-auto lg:mx-0">
                            From verified agricultural land and residential plots
                            to documentation, site visits, legal verification,
                            and investment consulting, we make every property
                            purchase simple, secure, and transparent.
                        </p>
                    </div>

                    {/* ================= RIGHT GLASS PANEL ================= */}
                    <div className="flex justify-center lg:justify-end lg:pr-10">
                        <div className="w-full max-w-[420px] rounded-[20px] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,.45)] overflow-hidden">
                            {/* Services */}
                            <div className="divide-y divide-white/10">
                                {serviceItems.map(({ icon: Icon, title, desc }) => (
                                    <div
                                        key={title}
                                        className="group flex items-center justify-between gap-3 px-5 sm:px-7 py-4 sm:py-5 hover:bg-white/5 transition-colors duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2F6F2E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300">
                                                <Icon className="text-white text-sm" />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="text-white text-base sm:text-lg font-semibold truncate">
                                                    {title}
                                                </h3>
                                                <p className="text-white/70 text-xs sm:text-sm mt-0.5 truncate">
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>

                                        <FaArrowRight className="text-[#9BEA00] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Stats */}
                            <div className="grid grid-cols-4 divide-x divide-white/10 border-t border-white/10 bg-black/10">
                                {statItems.map(({ icon: Icon, value, label }) => (
                                    <div key={value} className="py-4 sm:py-5 text-center px-1.5 sm:px-2">
                                        <Icon className="mx-auto text-[#9BEA00] text-base sm:text-xl mb-1.5 sm:mb-2" />

                                        <h3 className="text-white text-sm sm:text-lg font-bold">
                                            {value}
                                        </h3>

                                        <p className="text-white/70 text-[10px] sm:text-xs mt-1 leading-4 sm:leading-5">
                                            {label[0]}
                                            <br />
                                            {label[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;