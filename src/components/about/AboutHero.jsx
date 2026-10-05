import { Link } from "react-router-dom";

import heroImage from "../../assets/images/about/hero3.png";
import roadImg from "../../assets/images/about/hero1.png";
import gateImg from "../../assets/images/about/hero2.png";

const AboutHero = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08141d]/95 via-[#08141d]/10 to-transparent"></div>

      <div className="relative z-10 wide-container w-full px-6 lg:px-8 2xl:px-10 py-20 md:py-24 items-center">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 2xl:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl 2xl:max-w-2xl">
            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#F4B53F] text-[10px] font-semibold">
              ABOUT HEYDAY REALTY
            </p>

            <h1 className="mt-5 text-3xl 2xl:text-5xl font-bold leading-[1.15] text-white">
              Building Trust.
              <br />
              Delivering Value.
              <br />
              Growing <span className="text-lime-400">Together.</span>
            </h1>

            <p className="mt-8 text-gray-300 text-[13px] 2xl:text-sm leading-8">
              At HeyDay Realty, we believe land is more than just property—
              it's an opportunity, a future, and a legacy. We help families
              and investors discover premium land opportunities in
              Gorakhpur's fastest-growing locations.
            </p>

            <Link to="/projects">
              <button className="hidden md:inline-flex mt-10 bg-[#c66b1d] hover:bg-[#aa5a17] duration-300 text-white font-semibold px-5 py-2 rounded-xl shadow-xl text-sm">
                Explore Our Projects →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGES (proportional collage - same on every screen size) */}
          <div className="hidden lg:block w-full">
            <div
              className="relative w-full max-w-[560px] 2xl:max-w-[680px] ml-auto"
              style={{ aspectRatio: "901 / 667" }}
            >
              {/* Top Image */}
              <div
                className="absolute z-20 overflow-hidden rounded-[24px] border-[4px] border-white shadow-2xl"
                style={{
                  left: "17.76%",
                  top: "12.74%",
                  width: "54.38%",
                  height: "32.5%",
                }}
              >
                <img
                  src={roadImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Image */}
              <div
                className="absolute z-30 overflow-hidden rounded-[24px] border-[4px] border-white shadow-2xl"
                style={{
                  left: "33.3%",
                  top: "38.2%",
                  width: "54.4%",
                  height: "32.7%",
                }}
              >
                <img
                  src={gateImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div
                className="absolute z-10 overflow-hidden rounded-[24px] border-[4px] border-white shadow-2xl"
                style={{
                  left: "6.1%",
                  top: "55.5%",
                  width: "38.85%",
                  height: "33%",
                }}
              >
                <img
                  src={heroImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;