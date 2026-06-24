import aboutImage from "../../assets/images/city.jpg"; // Replace with your image

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="HeyDay Realty"
              className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4">
              <h3 className="text-3xl font-bold text-[#f47c20]">
                10+
              </h3>
              <p className="text-sm text-gray-500">
                Years Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>

            <span className="inline-block px-4 py-4 rounded-full bg-[#f47c20]/10 text-[#f47c20] text-sm font-semibold uppercase tracking-[3px]">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#032349] leading-tight">
              Your Trusted
              <span className="block text-[#f47c20]">
                Real Estate Partner
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At HeyDay Realty, we specialize in offering verified residential,
              commercial, and investment plots in strategically located areas.
              Our focus is on helping families and investors make secure and
              profitable real estate decisions.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Through transparent dealings, verified documentation, and expert
              guidance, we make the property buying journey simple, trustworthy,
              and rewarding for every customer.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-gray-50 rounded-2xl p-4">
                <h3 className="font-bold text-[#032349]">
                  Verified Properties
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Clear documentation and trusted ownership.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <h3 className="font-bold text-[#032349]">
                  Prime Locations
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  High-growth investment opportunities.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;