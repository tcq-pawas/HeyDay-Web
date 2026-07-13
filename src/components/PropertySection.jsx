import PropertyCard from "./PropertyCard";
import apartment from "../assets/images/apartment.jpg";
import villa from "../assets/images/villa.jpg";
import plot from "../assets/images/plot.jpg";
import land from "../assets/images/land.jpg";


const PropertySection = () => {

  const properties = [
    {
      image: apartment,
      title: "Modern Villa in Green Woods",
      location: "Bangalore, Karnataka",
      price: "4.85"
    },
    {
      image: villa,
      title: "Luxury Apartment Skyline",
      location: "Mumbai, Maharashtra",
      price: "3.25"
    },
    {
      image: plot ,
      title: "Premium Residential Plot",
      location: "Devanahalli, Bangalore",
      price: "1.20"
    },
    {
      image: land,
      title: "Commercial Land",
      location: "Sarjapur Road",
      price: "2.80"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto mt-20">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl text-center font-bold text-[#102a56] uppercase">
          FEATURED PROPERTIES
        </h1>

        <button className="border px-6 py-2 rounded-lg">
          VIEW ALL
        </button>

      </div>

      <div className="grid grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}
      </div>

    </div>
  )
}

export default PropertySection