import { FaCalendarAlt, FaHome, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {

  const stats = [
    {
      icon: <FaCalendarAlt />,
      number: "15+",
      text: "Years Experience"
    },
    {
      icon: <FaHome />,
      number: "500+",
      text: "Properties Sold"
    },
    {
      icon: <FaUsers />,
      number: "1000+",
      text: "Happy Clients"
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "25+",
      text: "Cities Covered"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto mt-28 px-5">

      <div className="bg-white rounded-3xl shadow-2xl p-14 grid grid-cols-4 gap-10">

        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-7 justify-center"
          >
            <div className="text-blue-700 text-5xl">
              {item.icon}
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                {item.number}
              </h1>

              <p className="text-gray-500 text-lg font-medium mt-2">
                {item.text}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Experience;