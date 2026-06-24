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
          <FaHeart className="text-red-500" />
        </button>

      </div>

      <div className="p-5">

        <h2 className="font-medium text-lg">
          {title}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {location}
        </p>

        <h1 className="text-[#f47c20] font-bold text-xl ">
          ₹ {price} Cr
        </h1>

      </div>

    </div>
  );
};

export default PropertyCard;