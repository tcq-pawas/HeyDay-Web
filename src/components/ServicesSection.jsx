import React from "react";
import { Sprout, Home, Building2, Landmark, FileText, MapPin, ShieldCheck, ArrowRightLeft, ScrollText, Calendar, FileCheck, Navigation } from "lucide-react";

const ServicesSection = () => {
  const services = [
    { icon: Sprout, title: "Agricultural Land", description: "Verified agricultural land for farming and investment" },
    { icon: Home, title: "Residential Plots", description: "Premium residential plots for building your dream home" },
    { icon: Building2, title: "Farm Land", description: "Farm plots ready for plantation and agricultural use" },
    { icon: Landmark, title: "Investment Properties", description: "High-growth investment properties for long-term returns" },
    { icon: FileText, title: "Property Consultation", description: "Professional guidance for property investment decisions" },
    { icon: MapPin, title: "Land Development", description: "Land development services for maximum value" },
    { icon: ShieldCheck, title: "Property Verification", description: "Complete legal verification and documentation" },
    { icon: ArrowRightLeft, title: "Buy Property", description: "Assistance in buying verified properties" },
    { icon: Home, title: "Sell Property", description: "Support for selling your property at best value" },
    { icon: ScrollText, title: "Documentation Support", description: "Complete documentation and paperwork assistance" },
    { icon: Calendar, title: "Site Visit Assistance", description: "Guided site visits for property inspection" },
    { icon: FileCheck, title: "Property Registration", description: "Registration guidance and transfer support" }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 text-center">
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
          <h2 className="text-xl font-bold text-[#08213f]">
            OUR{" "}
            <span className="text-[#7aac3b]">
              SERVICES
            </span>
          </h2>
          <div className="h-[2px] w-14 bg-[#d8c28a]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-[#08213f] group transition-all duration-300 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#08213f] group-hover:bg-[#7aac3b] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#7aac3b] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[#08213f] group-hover:text-white font-semibold text-sm mb-2 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-[12px] leading-6 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
