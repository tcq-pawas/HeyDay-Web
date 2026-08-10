import {
  FaUsers,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

import handsheke from "../../assets/images/about/handshek.png";
import bg4 from "../../assets/backgrounds/bg4.png";

const CompanyStats = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-xl font-bold text-white leading-tight uppercase">
              Our Success Is Rooted In
              <br />
              <span className="text-[#7aac3b]">Our Clients'</span> Success
            </h2>

            <div className="w-20 h-1 bg-[#d9a021] rounded-full mt-2 mb-4"></div>

            <p className="text-gray-300 text-[12px] leading-8 max-w-xl">
              We measure our growth by the growth of our clients.
              Every plot we sell is a step towards someone's dream,
              security, and prosperity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-12 border-t border-white/10 pt-8">

              {/* Stat 1 */}
              <div className="text-center border-r border-white/10">
                <div className="w-10 h-10 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-[#d9a021] text-lg" />
                </div>

                <h3 className="text-white text-lg font-bold">
                  120+
                </h3>

                <p className="text-gray-300 mt-1 text-sm">
                  Happy Families
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center border-r border-white/10">
                <div className="w-10 h-10 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-[#d9a021] text-lg" />
                </div>

                <h3 className="text-white text-lg font-bold">
                  500+
                </h3>

                <p className="text-gray-300 mt-1 text-sm">
                  Acres Sold
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-[#d9a021] text-lg" />
                </div>

                <h3 className="text-white text-lg font-bold">
                  1000+
                </h3>

                <p className="text-gray-300 mt-1 text-sm">
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
              className="rounded-3xl shadow-2xl w-full max-w-[540px] h-[340px] object-cover border-2 border-[#7fa341]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;