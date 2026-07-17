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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-20 md:py-24 mt-14 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-[#f2b321] uppercase tracking-widest font-semibold text-sm">
              ABOUT HEYDAY REALTY
            </p>

            <h1 className="mt-5 text-3xl md:text-3xl lg:text-[45px] font-bold leading-[1.15] text-white">
              Building Trust.
              <br />
              Delivering Value.
              <br />
              Growing{" "}
              <span className="text-lime-400">Together.</span>
            </h1>


            <p className="mt-8 text-gray-300 text-medium leading-8">
              At HeyDay Realty, we believe land is more than just property—
              it's an opportunity, a future, and a legacy. We help families
              and investors discover premium land opportunities in
              Gorakhpur's fastest-growing locations.
            </p>

            <Link to="/projects">
              <button className="hidden md:inline-flex mt-10 bg-[#c66b1d] hover:bg-[#aa5a17] duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-xl">
                Explore Our Projects →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative hidden lg:block h-[500px] mt-20">
            {/* Top Image */}
            <div className="absolute right-0 top-0 w-[350px] rounded-[24px] overflow-hidden border-[4px] border-white shadow-2xl z-20 mr-35 mt-5">
              <img
                src={roadImg}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>

            {/* Middle Image */}
            <div className="absolute right-10 top-[140px] w-[350px] rounded-[24px] overflow-hidden border-[4px] border-white shadow-2xl z-30 ">
              <img
                src={gateImg}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute left-6 bottom-0 w-[250px] rounded-[24px] overflow-hidden border-[4px] border-white shadow-2xl z-10 mb-30">
              <img
                src={heroImage}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;