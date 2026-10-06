import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { mapSrc } from "./ContactMapLocation";

// Row on mobile, 3 stacked columns from sm up (card is full width below 1300px, ~560px inner width above).
const InfoItem = ({ icon, iconBg, children }) => (
  <div className="flex min-w-0 flex-row items-start gap-3 rounded-xl border border-[#e7e2d8] bg-white p-3 sm:flex-col">
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
    >
      {icon}
    </div>

    <div className="min-w-0 flex-1 [overflow-wrap:anywhere]">{children}</div>
  </div>
);

const WhyItem = ({ icon, title, sub }) => (
  <div className="flex min-w-0 items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDF5E6] text-xs text-[#556B2F]">
      {icon}
    </span>

    <div className="min-w-0 [overflow-wrap:anywhere]">
      <h4 className="text-[12px] font-semibold leading-tight text-[#071c3d]">
        {title}
      </h4>
      <p className="mt-0.5 text-[10.5px] leading-tight text-[#556070]">{sub}</p>
    </div>
  </div>
);

const ContactInfoCard = () => {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <h2 className="mt-3 text-xl font-bold leading-tight text-[#071c3d]">
        Our Office &amp; Location
      </h2>

      <div className="mt-3 h-1 w-14 rounded-full bg-[#c75c0d]" />

      <p className="mt-4 max-w-lg text-[13px] leading-6 text-[#556070]">
        Visit our office or find us on the map. We&apos;d love to meet you and
        discuss your land investment goals in person.
      </p>

      {/* Info cards */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <InfoItem
          iconBg="bg-[#FFF4E8]"
          icon={<FaMapMarkerAlt className="text-base text-[#D97706]" />}
        >
          <h3 className="text-sm font-semibold text-[#071c3d]">
            Visit Our Office
          </h3>
          <p className="mt-1 text-[13px] font-bold text-[#c75c0d]">
            HeyDay Realty
          </p>
          <p className="mt-1 text-[12px] leading-5 text-[#556070]">
            Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath Rd,
            Uttar Pradesh, India
          </p>
        </InfoItem>

        <InfoItem
          iconBg="bg-[#F4F8EC]"
          icon={<FaPhoneAlt className="text-base text-[#556B2F]" />}
        >
          <h3 className="text-sm font-semibold text-[#071c3d]">Call Us</h3>
          <p className="mt-1 text-[12px] leading-6 text-[#556070]">
            +91 97956 33633
            <br />
            +91 91615 54321
            <br />
            +91 95066 88688
          </p>
        </InfoItem>

        <InfoItem
          iconBg="bg-[#EDF5FF]"
          icon={<FaEnvelope className="text-base text-[#2563EB]" />}
        >
          <h3 className="text-sm font-semibold text-[#071c3d]">Email Us</h3>
          <p className="mt-1 text-[12px] leading-6 text-[#556070]">
            theheydayrealty@gmail.com
            <br />
            grebaoffice@gmail.com
          </p>
        </InfoItem>
      </div>

      {/* Map: flex-1 so it absorbs the leftover height and both cards stay equal */}
      <div className="relative mt-4 min-h-[260px] flex-1 overflow-hidden rounded-xl border border-[#e7e2d8] sm:min-h-[300px]">
        <iframe
          src={mapSrc}
          title="HeyDay Realty Private Limited Location"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Why Choose */}
      <div className="mt-4 rounded-2xl border border-[#e7e2d8] bg-[#FBFCF8] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDF5E6]">
            <FaCheckCircle className="text-base text-[#556B2F]" />
          </div>

          <h3 className="text-sm font-bold text-[#556B2F]">
            Why Choose HeyDay Realty?
          </h3>
        </div>

        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2">
          <WhyItem
            icon={<FaShieldAlt />}
            title="Verified Plots"
            sub="Legally approved land"
          />
          <WhyItem
            icon={<FaMapMarkerAlt />}
            title="Prime Locations"
            sub="High growth areas"
          />
          <WhyItem
            icon={<FaMoneyBillWave />}
            title="Easy EMI"
            sub="Flexible payment plans"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
