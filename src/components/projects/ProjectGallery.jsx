import { Link } from "react-router-dom";
import clubHouse from "../../assets/images/media/project/image1.png";
import road from "../../assets/images/media/project/image2.png";
import gate from "../../assets/images/media/project/image3.png";
import park from "../../assets/images/media/project/image4.png";
import bg3 from "../../assets/backgrounds/bg3.png";

const ProjectGallery = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bg3})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-[2px] sm:tracking-[4px] text-xl  font-semibold text-[#222] bg-orange-100 py-2 px-4 flex flex-wrap items-center justify-center gap-2">
            <span>Premium Plotted Development</span>
            <span className="text-[#d97706]">+</span>
            <span>/</span>
            <span>Modern Infrastructure</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left Gallery */}
          <div className="grid grid-cols-2 gap-5">

            {/* Club House */}
            <div className="relative h-[180px] rounded-3xl overflow-hidden group">
              <img
                src={clubHouse}
                alt="Club House"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                Landscaped Green Zone
              </h3>
            </div>

            {/* Gate */}
            <div className="relative row-span-2 h-[385px] rounded-3xl overflow-hidden group">
              <img
                src={gate}
                alt="Gate"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                Premium Township View
              </h3>
            </div>

            {/* Road */}
            <div className="relative h-[180px] rounded-3xl overflow-hidden group">
              <img
                src={road}
                alt="Road"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                Wide Internal Roads
              </h3>
            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src={park}
                alt="Park"
                className="w-full h-[250px] object-cover"
              />
            </div>

            <div className="mt-6">

              <h2 className="text-lg font-bold text-[#2d3a22]">
                Interior Collections
              </h2>

              <p className="mt-2 text-gray-600 leading-7 max-w-lg text-[14px]">
                Discover well-planned layouts, lush green spaces, modern
                amenities, and premium infrastructure.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;