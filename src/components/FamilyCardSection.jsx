import familyImg from "../assets/images/familyimg.png";

const FamilyCardSection = () => {
  return (
    <div className="mt-24 mb-24 overflow-hidden">
      <div
        className="relative w-full h-[850px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${familyImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* lighter overlay + brightness */}
        <div className="absolute inset-0 bg-black/15 backdrop-brightness-110"></div>

        {/* card */}
        <div className="absolute left-10 md:left-16 top-1/2 -translate-y-1/2 bg-white p-10 rounded-[30px] max-w-md shadow-2xl z-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-[2px]">
            Perfect Living
          </p>

          <h1 className="text-4xl font-bold text-[#032349] mt-3 leading-tight">
            A Better Place <br /> For Your Happy Family
          </h1>

          <p className="text-gray-600 mt-5 leading-7 text-[15px]">
            Create beautiful memories in a home filled with comfort, safety and
            modern living. Find the perfect place where happiness begins.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <h1 className="text-2xl font-bold text-[#032349]">4+</h1>
              <p className="text-gray-600 text-sm">Bedrooms</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <h1 className="text-2xl font-bold text-[#032349]">24/7</h1>
              <p className="text-gray-600 text-sm">Security</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <h1 className="text-2xl font-bold text-[#032349]">100%</h1>
              <p className="text-gray-600 text-sm">Family Comfort</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 text-center">
              <h1 className="text-2xl font-bold text-[#032349]">
                Premium
              </h1>
              <p className="text-gray-600 text-sm">Interior</p>
            </div>
          </div>

          <button className="mt-7 bg-gradient-to-r from-[#f15b47] to-[#c83e31] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">
            Explore Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyCardSection;