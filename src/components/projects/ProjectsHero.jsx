import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";


import mainImage from "../../assets/images/project/projectbg-image.png";
import thumb1 from "../../assets/images/home/short3-image.png";
import thumb2 from "../../assets/images/home/short2-image.png";
import thumb3 from "../../assets/images/project/projectbg-image.png";
import thumb4 from "../../assets/images/home/greencity-image.png";

const ProjectsHero = () => {
  return (
    <section className="bg-[#faf8f5] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#d16b1d] uppercase tracking-widest text-sm font-semibold">
              Our Projects
            </span>

            <h1 className="mt-4 text-5xl lg:text-5xl font-bold leading-tight text-[#1d1d1d]">
              Signature Land.
              <br />
              Timeless{" "}
              <span className="text-green-700">Value.</span>
            </h1>

            <div className="w-14 h-1 bg-[#d16b1d] rounded-full mt-6"></div>

            <p className="mt-7 text-gray-600 leading-8 text-lg max-w-lg">
              Explore our premium land and plotted development projects
              designed for a secure future and long-term growth. Every project
              is carefully planned with legal clarity, infrastructure, and
              exceptional investment potential.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-10 mt-10">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-700 text-lg" />
                <span className="font-medium text-gray-700">
                  Prime Locations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaFileAlt className="text-green-700 text-lg" />
                <span className="font-medium text-gray-700">
                  Legal Verified
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaChartLine className="text-green-700 text-lg" />
                <span className="font-medium text-gray-700">
                  Best Investment
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-6 mt-8">
              {[thumb1, thumb2, thumb3, thumb4].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-16 rounded-xl object-cover shadow-md hover:scale-105 transition duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-end">
            <div className="relative w-[90%]">
              <img
                src={mainImage}
                alt="Projects"
                className="w-full h-[500px] object-cover rounded-[30px] shadow-2xl"
              />

              <Link
                to="/projects"
                className="absolute bottom-6 left-6 inline-flex items-center gap-3 bg-[#d16b1d] hover:bg-[#b95d16] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
              >
                Explore Projects
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;