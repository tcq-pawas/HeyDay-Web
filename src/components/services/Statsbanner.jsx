import React from "react";
import bg2 from "../../assets/backgrounds/bg2.png";

const StatsBanner = () => {
    const steps = [
        {
            no: "01",
            title: "Verified Documentation",
            desc: "Choose your preferred land that fits your needs.",
        },
        {
            no: "02",
            title: "Site Visit",
            desc: "Visit the site and verify location & surroundings.",
        },
        {
            no: "03",
            title: "Legal Verification",
            desc: "Our experts verify all documents and titles.",
        },
        {
            no: "04",
            title: "Documentation",
            desc: "Preparation and review of required documents.",
        },
        {
            no: "05",
            title: "NRI Support",
            desc: "Dedicated assistance for NRI investors.",
        },
        {
            no: "06",
            title: "Registry & Ownership",
            desc: "Smooth registration and ownership transfer.",
        },
    ];

    return (
        <section 
            className="bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bg2})`,
            }}
        >
            {/* Timeline Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-xl font-bold text-[#0b1f3a]">
                            FROM SITE VISIT{" "}
                            <span className="text-[#7aac3b]">TO REGISTRATION</span>
                        </h2>

                        <p className="text-gray-600 mt-4 text-[12px] leading-7">
                            Experience a transparent and hassle-free land buying journey.
                            From selecting the right property to legal verification and
                            registration, every step is guided by our experienced team to
                            ensure complete peace of mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-14">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="text-center relative group"
                            >
                                {/* Number Circle */}
                                {/* Number Box */}
                                <div className="w-10 h-10 mx-auto rounded-xl bg-[#0b1f3a] border border-[#1d3b63] shadow-md flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                                    <span className="text-[#8BC34A] text-[12px] font-bold">
                                        {step.no}
                                    </span>
                                </div>

                                <h3 className="text-[#0b1f3a] text-[13px] font-semibold mt-5 min-h-[38px] flex items-center justify-center">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 text-[11px]  leading-6">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;