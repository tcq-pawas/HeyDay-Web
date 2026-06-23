import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/images/city.jpg";

const ProjectsHero = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex items-start"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 w-full px-6 lg:px-16 pt-32 md:pt-40">
        <div className="flex flex-col  justify-center mt-10 mr-20">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            Find The Perfect
            <span className="block text-white mt-2">Land For Your Future</span>
          </h1>
          <p className="mt-6 text-gray-200 text-lg md:text-xl leading-8 max-w-xl">
            Discover premium residential, commercial, and investment properties
            in the most desirable locations. Your dream property is just one
            step away.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-orange-500 hover:text-orange-600 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg">
              Explore Properties
              <FaArrowRight />
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
