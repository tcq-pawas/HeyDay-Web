import {
  FaFileContract,
  FaMapMarkerAlt,
  FaGem,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import bg4 from "../../assets/backgrounds/bg4.png";

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
    <section 
      className="bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: `url(${bg4})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-xl  font-bold text-[#08213f] uppercase mb-10">
          Why Invest With <span className="text-[#7aac3b]">Heyday Realty?</span>
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="text-[#d9a021] text-lg w-10 h-10 rounded-full border-2 border-[#d9a021] flex items-center justify-center mx-auto mb-1">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-[#08213f] font-semibold text-sm ">
                {item.title}
              </h3>

              <p className="text-gray-600 text-[12px] mt-1">
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