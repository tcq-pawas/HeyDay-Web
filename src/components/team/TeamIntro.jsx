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

            <h2 className="mt-6 text-xl font-bold  leading-tight uppercase">
              Driven by <span className="text-[#7aac3b]">Trust</span> .
              <br />
              <span className="text-[#7aac3b]">Built</span> on Excellence.
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-[12px]">
              At HeyDay Realty, our team is passionate about helping families
              and investors find secure, valuable, and legally verified
              properties. Every member is committed to delivering honest advice,
              complete transparency, and exceptional customer service from the
              first consultation to project completion.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-50 p-6 rounded-2xl border hover:shadow-lg transition">
                <FaBullseye className="text-xl text-[#315d2f]" />

                <h3 className="mt-4  font-semibold text-gray-900">
                  Our Mission
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-[12px]">
                  Deliver trusted real estate solutions with complete
                  transparency and long-term value.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border hover:shadow-lg transition">
                <FaEye className="text-xl text-[#315d2f]" />

                <h3 className="mt-4  font-semibold text-gray-900">
                  Our Vision
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-[12px]">
                  Become the most trusted plotted development company in Eastern
                  Uttar Pradesh.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="bg-[#082548] rounded-3xl p-8 text-white mt-22">
            <h3 className="text-xl font-semibold">
              Why Clients Trust HeyDay Realty
            </h3>

            <p className="mt-3 text-gray-300 leading-8 text-[12px]">
              Our dedicated professionals work together to provide secure
              investments, verified properties, and outstanding customer
              support.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center">
                <FaUsers className="mx-auto text-xl text-[#c89b63]" />
                <h4 className="mt-2 text-lg font-bold">500+</h4>
                <p className="text-gray-300 text-sm">Happy Families</p>
              </div>

              <div className="text-center">
                <FaHome className="mx-auto text-xl text-[#c89b63]" />
                <h4 className="mt-2 text-lg font-bold">15+</h4>
                <p className="text-gray-300 text-sm">Projects Delivered</p>
              </div>

              <div className="text-center">
                <FaAward className="mx-auto text-xl text-[#c89b63]" />
                <h4 className="mt-2 text-lg font-bold">5+</h4>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>

              <div className="text-center">
                <FaMapMarkerAlt className="mx-auto text-xl text-[#c89b63]" />
                <h4 className="mt-2 text-lg font-bold">100%</h4>
                <p className="text-gray-300 text-sm">Verified Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;