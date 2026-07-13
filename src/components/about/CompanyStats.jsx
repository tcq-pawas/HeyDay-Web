import {
  FaUsers,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

import handsheke from "../../assets/images/about/handshek.png";

const CompanyStats = () => {
  return (
    <section className="bg-[#041d3b] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-2xl font-bold text-white leading-tight uppercase">
              Our Success Is Rooted In
              <br />
              Our Clients' Success
            </h2>

            <div className="w-20 h-1 bg-[#d9a021] rounded-full mt-2 mb-4"></div>

            <p className="text-gray-300 text-medium leading-8 max-w-xl">
              We measure our growth by the growth of our clients.
              Every plot we sell is a step towards someone's dream,
              security, and prosperity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-12 border-t border-white/10 pt-8">

              {/* Stat 1 */}
              <div className="text-center border-r border-white/10">
                <div className="w-12 h-12 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-[#d9a021] text-2xl" />
                </div>

                <h3 className="text-white text-2xl font-bold">
                  120+
                </h3>

                <p className="text-gray-300 mt-2">
                  Happy Families
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center border-r border-white/10">
                <div className="w-12 h-12 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-[#d9a021] text-2xl" />
                </div>

                <h3 className="text-white text-2xl font-bold">
                  500+
                </h3>

                <p className="text-gray-300 mt-2">
                  Acres Sold
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-[#d9a021] text-2xl" />
                </div>

                <h3 className="text-white text-2xl font-bold">
                  1000+
                </h3>

                <p className="text-gray-300 mt-2">
                  Satisfied Investors
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={handsheke}
              alt="Happy Client"
              className="rounded-3xl shadow-2xl w-full max-w-[540px] h-[380px] object-cover border-2 border-[#7fa341]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;