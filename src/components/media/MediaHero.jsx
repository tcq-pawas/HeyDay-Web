import heroImage from "../../assets/herobg.png";
import { FaImages, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi2";

const MediaHero = () => {
  return (
    <section
      className="relative h-[85vh] min-h-[650px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081826]/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 mt-25">
        <div className="max-w-2xl">
          {/* Badge */}
          <p className="text-[#d7a23a] uppercase tracking-[3px] font-semibold text-medium
           mb-4">
            Gallery
          </p>

          {/* Heading */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Explore Our Land
            <br />
            & Plot <span className="text-lime-400">Gallery</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-medium leading-8 max-w-xl">
            Discover a wide range of agricultural lands, premium plots,<br/>
            and investment opportunities across prime locations.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 lg:gap-14 mt-14">
            <div className="flex items-center gap-4">
              <FaImages className="text-[#d7a23a] text-4xl" />
              <div>
                <h3 className="text-white text-2xl font-bold">200+</h3>
                <p className="text-gray-300">Photos</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiOutlineMap className="text-[#d7a23a] text-4xl" />
              <div>
                <h3 className="text-white text-2xl font-bold">25+</h3>
                <p className="text-gray-300">Projects</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#d7a23a] text-4xl" />
              <div>
                <h3 className="text-white text-2xl font-bold">10+</h3>
                <p className="text-gray-300">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;