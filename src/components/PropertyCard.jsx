import { FaHeart } from "react-icons/fa";

const PropertyCard = ({ image, title, location, price }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">

      <div className="relative">

        <img
          src={image}
          alt=""
          className="h-60 w-full object-cover"
        />

        <button className="absolute top-4 right-4 bg-white rounded-full p-3">
          <FaHeart />
        </button>

      </div>

      <div className="p-5">

        <h2 className="font-bold text-xl">
          {title}
        </h2>

        <p className="text-gray-500 mt-1">
          {location}
        </p>

        <h1 className="text-orange-500 font-bold text-3xl mt-4">
          ₹ {price} Cr
        </h1>

      </div>

    </div>
  )
}

export default PropertyCard