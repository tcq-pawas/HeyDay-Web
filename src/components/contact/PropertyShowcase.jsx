import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaFileAlt,
  FaGavel,
  FaHome,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

import logo from "../../assets/images/footer/logo.png";
import { Bottom } from "./ContactParts";

const PropertyShowcase = ({ properties }) => {
  return (
    <div className="ms:mt-5 mt-2 lg:pl-1">
      <img
        src={logo}
        alt="HeyDay Realty"
        className="mx-auto h-16 object-contain"
      />

      {/* Quote */}
      <div className="relative mx-auto mt-3 max-w-lg rounded-xl bg-[#fff6eb] px-5 py-4 shadow-sm sm:px-10">
        <span className="absolute left-4 top-3 text-4xl font-black leading-none text-[#c85b00]">
          &ldquo;
        </span>

        <p className="pl-4 text-sm font-semibold leading-6 text-[#071c3d] sm:pl-8">
          We don&apos;t just sell land,
          <br />
          we help you build your future.
          <br />
          Invest in land. Invest in prosperity.
        </p>

        <span className="absolute bottom-2 right-4 text-4xl font-black leading-none text-[#c85b00] sm:right-6">
          
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-[#071c3d]">
        Featured Properties
      </h3>

      <div className="mt-3 space-y-3">
        {properties.map((property) => (
          <PropertyCard key={property.title} property={property} />
        ))}
      </div>

      {/* Bottom Features */}
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-[#f1f4eb] p-3 shadow-sm sm:grid-cols-4 sm:gap-0">
        <Bottom icon={<FaFileAlt />} text="Verified Documents" />
        <Bottom icon={<FaGavel />} text="DTCP/RERA Approved" />
        <Bottom icon={<FaCheckCircle />} text="100% Legal Safe" />
        <Bottom icon={<FaUsers />} text="Expert Support" />
      </div>
    </div>
  );
};

const PropertyCard = ({ property }) => (
  <article className="grid overflow-hidden rounded-xl border border-[#e7e2d8] bg-white shadow-[0_8px_22px_rgba(15,35,69,0.07)] md:grid-cols-[210px_1fr]">
    <div className="relative h-36 md:h-full">
      <img
        src={property.image}
        alt={property.title}
        className="h-full w-full object-cover"
      />

      <span className="absolute bottom-2 left-2 rounded bg-[#f47c20] px-2 py-1 text-[10px] font-bold text-white">
        {property.tag}
      </span>
    </div>

    <div className="p-3">
      <h4 className="text-base font-bold text-[#071c3d]">
        {property.title}
      </h4>

      <p className="mt-1 flex items-center gap-2 text-[11px] font-medium text-[#556070]">
        <FaMapMarkerAlt className="text-[#1e293b]" />
        {property.location}
      </p>

      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-medium text-[#556070]">
        <span className="flex items-center gap-2">
          <FaHome className="text-[#1e293b]" />
          Residential Plots
        </span>

        <span>{property.size}</span>
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-bold text-[#c75c0d]">
          {property.price}
        </span>

        <Link
          to="/media"
          className="w-full rounded border border-[#f47c20] px-3 py-2 text-center text-[11px] font-bold text-[#c75c0d] transition hover:bg-[#f47c20] hover:text-white sm:w-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  </article>
);

export default PropertyShowcase;