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
    <section className="relative h-screen overflow-hidden flex flex-col">

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

      {/* Dark Overlay: flat tint on mobile so the headline stays readable no matter
          where it wraps; the left-to-right gradient only kicks in from sm: up, once
          the text column is reliably confined to the left side of the image */}
      <div className="absolute inset-0 bg-[#041b35]/75 sm:hidden" />
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-[#041b35]/90 via-[#041b35]/65 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="max-w-3xl">

          <h1 className="text-3xl  font-bold leading-tight text-balance text-white">
            Trusted Real Estate Company in Gorakhpur for{" "}
            <br className="hidden sm:block" />
            Agricultural Land &{" "}
            <span className="text-lime-400">
              Residential Plots
            </span>
          </h1>
          <div className="w-16 sm:w-24 h-1 rounded-full bg-[#f2b321] mt-5 sm:mt-7"></div>

          <p className="mt-4 sm:mt-6 text-[12px] text-gray-200 max-w-2xl leading-relaxed text-pretty">
            HeyDay Realty Pvt. Ltd. helps customers discover verified agricultural land, residential plots, farm land, and investment properties in Gorakhpur and nearby districts. We focus on transparent documentation, trusted guidance, and a smooth property buying experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-10">
            <Link
              to="/projects"
              className="w-full sm:w-auto text-center bg-[#f47c20] hover:bg-[#e66a10] transition-all duration-300 text-white px-4 py-3 rounded-lg text-sm sm:text-base font-semibold shadow-md"
            >
              Explore Properties
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto text-center border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-20 bg-[#041b35]/70 sm:bg-[#041b35]/50 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 sm:gap-6">

            <div className="flex items-center gap-3 sm:gap-4 justify-center">
              <MapPinned className="w-6 h-6 sm:w-6 sm:h-6 text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-lg ">
                  500+
                </h3>
                <p className="text-gray-300 text-xs ">
                  Acres Managed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center">
              <Users className="w-6 h-6  text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-lg ">
                  1000+
                </h3>
                <p className="text-gray-300 text-xs">
                  Happy Investors
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center">
              <BadgeCheck className="w-6 h-6  text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-lg ">
                  50+
                </h3>
                <p className="text-gray-300 text-xs ">
                  Verified Projects
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 justify-center">
              <ShieldCheck className="w-6 h-6  text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold text-lg ">
                  100%
                </h3>
                <p className="text-gray-300 text-xs ">
                  Legal Verification
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
