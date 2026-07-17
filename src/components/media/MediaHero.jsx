import heroImage from "../../assets/images/home/herobg.png";
import {
  FaImages,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCamera,
} from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi2";

const MediaHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-cover bg-center py-16 md:py-24 lg:min-h-[650px] lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Land Investment"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081826]/70 "></div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 ">
        {/* Left Content */}
        <div className="max-w-2xl mt-8 md:mt-0">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#d7a23a]">
            Gallery
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Explore Our Land
            <br />
            & Plot <span className="text-lime-400">Gallery</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-300 md:text-base md:leading-8">
            Discover a wide range of agricultural lands, premium plots, and
            investment opportunities across prime locations.
          </p>

          <div className="mt-10 flex flex-wrap gap-7 sm:gap-10 lg:mt-14 lg:gap-14">
            <div className="flex items-center gap-4">
              <FaImages className="text-3xl text-[#d7a23a] md:text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  200+
                </h3>
                <p className="text-sm text-gray-300 md:text-base">Photos</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiOutlineMap className="text-3xl text-[#d7a23a] md:text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  25+
                </h3>
                <p className="text-sm text-gray-300 md:text-base">Projects</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-[#d7a23a] md:text-4xl" />
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  10+
                </h3>
                <p className="text-sm text-gray-300 md:text-base">Locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Premium Gallery Preview - Desktop Only */}
        <div className="relative mx-auto hidden w-full max-w-[430px] lg:ml-auto lg:block md:mt-10">
          <div className="relative rounded-xl border border-white/20 p-3 shadow-2xl backdrop-blur-md sm:p-4">
            <div className="grid grid-cols-2 gap-3">
              <div
                className="h-36 rounded-lg bg-cover bg-center shadow-lg sm:h-44"
                style={{ backgroundImage: `url(${heroImage})` }}
              ></div>

              <div className="space-y-3">
                <div className="rounded-lg border-white/15 bg-white/15 p-3 backdrop-blur-md">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-[#d7a23a]/20 text-sm text-[#d7a23a]">
                    <FaShieldAlt />
                  </div>

                  <h3 className="text-base font-bold text-white">
                    Verified Land
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-gray-300">
                    Clear locations with trusted project details.
                  </p>
                </div>

                <div
                  className="h-20 rounded-lg bg-cover bg-center shadow-lg sm:h-24"
                  style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-white/15 bg-[#081826]/55 p-3 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#d7a23a]">
                    Featured Gallery
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    Premium Plot Views
                  </h3>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm text-[#17341f]">
                  <FaCamera />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
                <div>
                  <h4 className="text-base font-bold text-white">12</h4>
                  <p className="text-[11px] text-gray-300">Active Sites</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">4.8</h4>
                  <p className="text-[11px] text-gray-300">Rating</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">360°</h4>
                  <p className="text-[11px] text-gray-300">Views</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-2 top-6 hidden rounded-lg border border-white/20 bg-white/15 px-3 py-2.5 text-white shadow-xl backdrop-blur-md sm:block">
            <div className="flex items-center gap-2.5">
              <FaMapMarkerAlt className="text-sm text-[#d7a23a]" />
              <div>
                <p className="text-[10px] text-gray-300">Prime Location</p>
                <h4 className="text-xs font-bold">Gorakhpur</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;