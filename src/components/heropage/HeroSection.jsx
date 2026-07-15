import React from "react";
import bgImage from "../../assets/images/home/herobg.png";
import { Link } from "react-router-dom";
import {
  MapPinned,
  Users,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="HeyDay Realty Agricultural Land and Residential Plots in Gorakhpur"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041b35]/90 via-[#041b35]/65 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-[85vh] flex items-center mt-7">
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Trusted Real Estate Company in Gorakhpur for{" "}
            <br />
            Agricultural Land &{" "}
            <span className="text-lime-400">
              Residential Plots
            </span>
          </h1>
          <div className="w-24 h-1 rounded-full bg-[#f2b321] mt-7"></div>

          <p className="mt-6 text-lg md:text-lg text-gray-200 max-w-2xl leading-relaxed ">
            HeyDay Realty Pvt. Ltd. helps customers discover verified agricultural land, residential plots, farm land, and investment properties in Gorakhpur and nearby districts. We focus on transparent documentation, trusted guidance, and a smooth property buying experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/projects"
              className="bg-[#f47c20] hover:bg-[#e66a10] transition-all duration-300 text-white px-5 py-3 rounded-lg text-sm md:text-base font-small shadow-md"
            >
              Explore Properties
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 text-white px-5 py-3 rounded-lg text-sm md:text-base font-small"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-20 bg-[#041b35]/50 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="flex items-center gap-4 justify-center">
              <MapPinned className="w-8 h-8 text-lime-400" />
              <div>
                <h3 className="text-white font-bold text-2xl">
                  500+
                </h3>
                <p className="text-gray-300 text-sm">
                  Acres Managed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <Users className="w-8 h-8 text-lime-400" />
              <div>
                <h3 className="text-white font-bold text-2xl">
                  1000+
                </h3>
                <p className="text-gray-300 text-sm">
                  Happy Investors
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <BadgeCheck className="w-8 h-8 text-lime-400" />
              <div>
                <h3 className="text-white font-bold text-2xl">
                  50+
                </h3>
                <p className="text-gray-300 text-sm">
                  Verified Projects
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <ShieldCheck className="w-8 h-8 text-lime-400" />
              <div>
                <h3 className="text-white font-bold text-2xl">
                  100%
                </h3>
                <p className="text-gray-300 text-sm">
                  Legal Verification
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section >
  );
};

export default HeroSection;