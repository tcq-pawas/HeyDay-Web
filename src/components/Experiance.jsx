import {
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Experience = () => {
  const stats = [
    {
      icon: <FaCalendarAlt />,
      number: "15+",
      text: "Years Experience",
    },
    {
      icon: <FaHome />,
      number: "500+",
      text: "Properties Sold",
    },
    {
      icon: <FaUsers />,
      number: "1000+",
      text: "Happy Clients",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "25+",
      text: "Cities Covered",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto ">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#c89b63]/10 flex items-center justify-center text-[#c89b63] text-2xl">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-3xl font-bold text-[#032349]">
                  {item.number}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;