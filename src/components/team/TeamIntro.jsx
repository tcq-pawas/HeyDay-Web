import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaHome,
  FaAward,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TeamIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-[#315d2f] font-semibold uppercase tracking-wider text-sm">
              Our Team
            </span>

            <h2 className="mt-6 text-3xl md:text-3xl font-bold text-[#315d2f] leading-tight">
              Driven by Trust.
              <br />
              Built on Excellence.
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At HeyDay Realty, our team is passionate about helping families
              and investors find secure, valuable, and legally verified
              properties. Every member is committed to delivering honest advice,
              complete transparency, and exceptional customer service from the
              first consultation to project completion.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-50 p-6 rounded-2xl border hover:shadow-lg transition">
                <FaBullseye className="text-3xl text-[#315d2f]" />

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Our Mission
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  Deliver trusted real estate solutions with complete
                  transparency and long-term value.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border hover:shadow-lg transition">
                <FaEye className="text-3xl text-[#315d2f]" />

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Our Vision
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  Become the most trusted plotted development company in Eastern
                  Uttar Pradesh.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="bg-[#082548] rounded-3xl p-10 text-white mt-22">
            <h3 className="text-2xl font-semibold">
              Why Clients Trust HeyDay Realty
            </h3>

            <p className="mt-3 text-gray-300 leading-8 text-sm">
              Our dedicated professionals work together to provide secure
              investments, verified properties, and outstanding customer
              support.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center">
                <FaUsers className="mx-auto text-3xl text-[#c89b63]" />
                <h4 className="mt-2 text-2xl font-bold">500+</h4>
                <p className="text-gray-300 mt-1">Happy Families</p>
              </div>

              <div className="text-center">
                <FaHome className="mx-auto text-3xl text-[#c89b63]" />
                <h4 className="mt-2 text-2xl font-bold">15+</h4>
                <p className="text-gray-300 mt-1">Projects Delivered</p>
              </div>

              <div className="text-center">
                <FaAward className="mx-auto text-3xl text-[#c89b63]" />
                <h4 className="mt-2 text-2xl font-bold">5+</h4>
                <p className="text-gray-300 mt-1">Years Experience</p>
              </div>

              <div className="text-center">
                <FaMapMarkerAlt className="mx-auto text-3xl text-[#c89b63]" />
                <h4 className="mt-2 text-2xl font-bold">100%</h4>
                <p className="text-gray-300 mt-1">Verified Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;