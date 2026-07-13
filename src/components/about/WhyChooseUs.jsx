import {
  FaFileContract,
  FaMapMarkerAlt,
  FaGem,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaFileContract />,
      title: "Verified",
      subtitle: "Land & Documents",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "100% Clear",
      subtitle: "Ownership",
    },
    {
      icon: <FaGem />,
      title: "Expert Local",
      subtitle: "Knowledge",
    },
    {
      icon: <FaUsers />,
      title: "NRI Support &",
      subtitle: "Assistance",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent",
      subtitle: "Pricing",
    },
    {
      icon: <FaHandshake />,
      title: "End-to-End",
      subtitle: "Support",
    },
  ];

  return (
    <section className="bg-[#041d3b] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-2xl font-bold text-white uppercase mb-10">
          Why Invest With Heyday Realty?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {features.map((item, index) => (
            <div
              key={index}
              className={`text-center px-2 py-2 ${
                index !== features.length - 1
                  ? "lg:border-r border-white/20"
                  : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="text-[#d9a021] text-3xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">
                {item.title}
              </h3>

              <p className="text-gray-300 text-base mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;