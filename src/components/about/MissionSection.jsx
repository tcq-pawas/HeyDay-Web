import { FaBullseye, FaGem, FaUsers } from "react-icons/fa";
import missionImg from "../../assets/images/about/hero3.png";
import bg4 from "../../assets/backgrounds/bg4.png";

const MissionSection = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-xl md:text-xl font-bold uppercase ml-0 lg:ml-20">
            Our <span className="text-[#7aac3b]">Mission</span> & Values
          </h2>

          <div className="mt-2 w-16 h-1 bg-[#d99b28] rounded-full ml-0 lg:ml-20"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start ml-0 lg:ml-20">
            <img
              src={missionImg}
              alt="Mission"
              className="rounded-3xl shadow-xl w-full max-w-[430px] h-[300px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#082548] flex items-center justify-center flex-shrink-0">
                <FaBullseye className="text-[#d99b28] " />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Our Mission
                </h3>

                <p className="text-[12px] text-gray-600 leading-6">
                  To provide verified land investment opportunities and
                  exceptional service that help our clients build long-term
                  wealth and secure their future.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#082548] flex items-center justify-center flex-shrink-0">
                <FaGem className="text-[#d99b28]" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Our Vision
                </h3>

                <p className="text-[12px] text-gray-600 leading-6">
                  To be the most trusted and preferred land investment company
                  known for transparency, reliability, and client success.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#082548] flex items-center justify-center flex-shrink-0">
                <FaUsers className="text-[#d99b28]" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Our Values
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d99b28]"></span>
                    <span className="text-[12px] text-gray-700">
                      Integrity & Transparency
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d99b28]"></span>
                    <span className="text-[12px] text-gray-700">
                      Commitment to Excellence
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d99b28]"></span>
                    <span className="text-[12px] text-gray-700">
                      Client First Approach
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d99b28]"></span>
                    <span className="text-[12px] text-gray-700">
                      Long-Term Relationships
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;