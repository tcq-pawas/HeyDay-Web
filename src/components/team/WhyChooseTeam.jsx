import {
  FaUserTie,
  FaHandshake,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie size={25} />,
    title: "Experienced Professionals",
    description:
      "Our experts bring years of experience in real estate, helping clients make informed investment decisions.",
  },
  {
    icon: <FaHandshake size={25} />,
    title: "Customer First",
    description:
      "Every client is our priority. We focus on building long-term relationships through trust and transparency.",
  },
  {
    icon: <FaShieldAlt size={25} />,
    title: "Verified Properties",
    description:
      "Every project is carefully verified to ensure legal security and complete peace of mind.",
  },
  {
    icon: <FaMapMarkedAlt size={25} />,
    title: "Prime Locations",
    description:
      "We offer thoughtfully selected plots in fast-growing locations with excellent future value.",
  },
  {
    icon: <FaChartLine size={25} />,
    title: "Investment Guidance",
    description:
      "Our consultants help you identify the best investment opportunities based on your goals and budget.",
  },
  {
    icon: <FaHeadset size={25} />,
    title: "Lifetime Support",
    description:
      "From your first inquiry to registration and beyond, we're always here to support you.",
  },
];

const WhyChooseTeam = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="mt-6 text-xl font-bold uppercase">
            The Team Behind Every<span className="text-[#7aac3b]"> Successful Investment</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8 text-[12px]">
            Our dedicated professionals combine industry expertise, local market
            knowledge, and customer-first values to deliver a seamless property
            buying experience.
          </p>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#315d2f]/10 text-[#315d2f] flex items-center justify-center group-hover:bg-[#315d2f] group-hover:text-white transition">
                {item.icon}
              </div>

              <h3 className="mt-6 text-sm font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 leading-7 text-[12px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-5 pb-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[88%] group bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#315d2f]/10 text-[#315d2f] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-[#082548] rounded-3xl p-7 ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">
            <div>
              <h3 className="text-xl font-bold text-[#c89b63]">500+</h3>
              <p className="mt-3 text-gray-300 text-sm">Happy Families</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#c89b63]">15+</h3>
              <p className="mt-3 text-gray-300 text-sm">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#c89b63]">5+</h3>
              <p className="mt-3 text-gray-300 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#c89b63]">100%</h3>
              <p className="mt-3 text-gray-300 text-sm">Transparent Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTeam; 