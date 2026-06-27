import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Sprout,
  ShieldCheck,
  ClipboardCheck,                                                                                                                                                                                                                                                                                                                                                                                 
  ArrowRight,
} from "lucide-react";

import landImage from "../../assets/images/home/land-image.png";

const features = [
  {
    icon: TrendingUp,
    title: "High Appreciation",
    desc: "Land continues to appreciate over time with limited supply.",
  },
  {
    icon: Sprout,
    title: "Low Maintenance",
    desc: "No building maintenance or tenant management.",
  },
  {
    icon: ShieldCheck,
    title: "Tangible Asset",
    desc: "Real ownership with long-term wealth creation.",
  },
  {
    icon: ClipboardCheck,
    title: "Future Development",
    desc: "Growing infrastructure increases property value.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#d58d33] font-semibold uppercase text-sm tracking-wider">
              About Heyday Realty
            </p>

            <h2 className="mt-3 text-4xl lg:text-4xl font-bold leading-tight text-[#071b38]">
              YOUR TRUSTED
              <br />
              LAND{" "}
              <span className="text-[#7aac3b]">
                INVESTMENT PARTNER
              </span>
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              At HeyDay Realty, we specialize exclusively in agricultural
              land, farm plots, and long-term investment opportunities.
            </p>

            <p className="mt-3 text-gray-600 leading-8">
              Every property undergoes thorough legal and ownership
              verification before being offered to our clients.
            </p>

            <p className="mt-3 text-gray-600 leading-8">
              We help investors, families, NRIs, and future homeowners
              identify high-growth land opportunities with confidence.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 bg-[#b36a1e] hover:bg-[#9a5918] text-white px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              Know More About Us
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* Image */}
          <div>
            <img
              src={landImage}
              alt="Land Investment"
              className="w-full h-[340px] lg:h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-200"></div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mt-12">

          <div className="h-[2px] w-16 bg-[#d8c28a]"></div>

          <h3 className="text-2xl font-bold text-[#071b38] text-center">
            WHY{" "}
            <span className="text-[#7aac3b]">
              SMART INVESTORS
            </span>{" "}
            CHOOSE LAND
          </h3>

          <div className="h-[2px] w-16 bg-[#d8c28a]"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 p-8 text-center"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-[#071b38] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#7aac3b]" />
                </div>

                <h4 className="mt-6 text-lg font-bold text-[#071b38]">
                  {item.title}
                </h4>

                <p className="mt-2 text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default AboutSection;