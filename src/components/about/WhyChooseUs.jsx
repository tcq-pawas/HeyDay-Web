import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Verified Properties",
    desc: "Every property undergoes thorough legal verification before listing.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Prime Locations",
    desc: "Projects located in fast-growing and high-potential areas.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Process",
    desc: "Clear communication with no hidden charges or surprises.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Trusted Support",
    desc: "Expert guidance from inquiry to final registration.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="inline-flex px-4 py-2 rounded-full bg-[#f47c20]/10 text-[#f47c20] text-sm font-semibold uppercase tracking-[3px]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#032349]">
            The Difference We Bring
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            We combine transparency, trust, and expertise to help you make
            confident real estate decisions.
          </p>

          <div className="w-20 h-1 bg-[#f47c20] mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f47c20]/10 flex items-center justify-center text-[#f47c20] text-2xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-[#032349] mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;