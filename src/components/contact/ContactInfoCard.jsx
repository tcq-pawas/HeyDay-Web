import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

const ContactInfoCard = () => {
  return (
    <div className="w-full">
      <div className="rounded-3xl border border-[#e7e2d8] bg-white p-8 shadow-lg">

        {/* Address */}
        <div className="flex items-start gap-4 border-b border-[#ece7df] pb-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8]">
            <FaMapMarkerAlt className="text-base text-[#D97706]" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#071c3d]">
              Visit Our Office
            </h3>

            <p className="mt-1 text-sm font-bold text-[#c75c0d]">
              HeyDay Realty
            </p>

            <p className="mt-2 text-sm leading-6 text-[#556070]">
              Ramjanaki Nagar,
              <br />
              Gorakhpur,
              <br />
              Uttar Pradesh,
              <br />
              India
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 border-b border-[#ece7df] py-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F8EC]">
            <FaPhoneAlt className="text-base text-[#556B2F]" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#071c3d]">
              Call Us
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#556070]">
              +91 9161554321
            </p>

            <p className="text-sm leading-7 text-[#556070]">
              +91 9795633633
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 border-b border-[#ece7df] py-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF]">
            <FaEnvelope className="text-base text-[#2563EB]" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#071c3d]">
              Email Us
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#556070]">
              theheydayrealty@gmail.com
            </p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start gap-4 border-b border-[#ece7df] py-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF7E8]">
            <FaClock className="text-base text-[#F59E0B]" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#071c3d]">
              Business Hours
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#556070]">
              Mon – Sat : 9:30 AM – 7:00 PM
            </p>

            <p className="text-sm leading-7 text-[#556070]">
              Sunday : Closed
            </p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mt-6 rounded-2xl border border-[#e7e2d8] bg-[#FBFCF8] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF5E6]">
              <FaCheckCircle className="text-base text-[#556B2F]" />
            </div>

            <h3 className="text-sm font-bold text-[#556B2F]">
              Why Choose HeyDay Realty?
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white px-3 py-2 text-center text-xs font-medium text-[#556070] shadow-sm">
              Verified Plots
            </div>

            <div className="rounded-lg bg-white px-3 py-2 text-center text-xs font-medium text-[#556070] shadow-sm">
              Prime Locations
            </div>

            <div className="rounded-lg bg-white px-3 py-2 text-center text-xs font-medium text-[#556070] shadow-sm">
              Easy EMI
            </div>

            <div className="rounded-lg bg-white px-3 py-2 text-center text-xs font-medium text-[#556070] shadow-sm">
              Trusted Support
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfoCard;