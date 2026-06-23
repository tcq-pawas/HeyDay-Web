import { FaShieldAlt, FaMapMarkerAlt, FaStar, FaUserTie } from "react-icons/fa";

const Features = () => {

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Trusted Experts",
      desc: "Over 15 years of experience ensuring safe & transparent transactions."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local Knowledge",
      desc: "Deep insights into neighborhoods, schools and amenities."
    },
    {
      icon: <FaStar />,
      title: "Premium Listings",
      desc: "Exclusive access to high-end properties."
    },
    {
      icon: <FaUserTie />,
      title: "Client First",
      desc: "Personalized service dedicated to your goals."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto -mt-7 relative z-20 p">

      <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-4 gap-6">

        {features.map((item, index) => (
          <div key={index} className="flex gap-5">

            <div className="w-16 h-16 rounded-full shadow-md flex items-center justify-center text-2xl text-blue-700 font-light">
              {item.icon}
            </div>

            <div>
              <h2 className="font-bold text-xl">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Features