import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/images/projectbg.png";
import { Link } from "react-router-dom";

const ProjectsHero = () => {
  return (
    <section
      className="relative h-[80vh] min-h-[650px] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center mt-15">
        <div className="max-w-3xl">

          <span className="inline-block text-[#f47c20] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Premium Plotted Developments
          </span>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Find The Perfect
            <span className="block text-[#f47c20]">
              Land For Your Future
            </span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-8 max-w-2xl">
            Discover premium residential and investment plots in strategically
            located developments. Secure your future with properties designed
            for long-term growth and value.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#f47c20] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#e66a10] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;