import { motion } from "framer-motion";
import { FaFileContract } from "react-icons/fa";

import heroImage from "../../assets/images/privacyhero.png";

export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F2747] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt="Terms and Conditions Banner"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0F2747]/82" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(109,170,44,0.28),transparent_28%),linear-gradient(110deg,rgba(15,39,71,0.98),rgba(15,39,71,0.72)_52%,rgba(11,30,52,0.38))]" />

      <div
        id="top"
        className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          {/* Badge */}
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-normal text-white backdrop-blur">
            <FaFileContract
              className="h-4 w-4 text-[#D18A1D]"
              aria-hidden="true"
            />
            Transparency • Fairness • Compliance
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight tracking-normal text-white">
            Terms & <span className="text-[#6DAA2C]">Conditions</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-[12px] font-medium leading-6 text-white/82">
            These Terms & Conditions define the rights, responsibilities, and
            obligations governing your relationship with HeyDay Realty. By
            accessing our website, booking a property, or using any of our
            services, you agree to comply with our policies, payment terms,
            legal requirements, and property guidelines, ensuring a secure,
            transparent, and trustworthy real estate experience.
          </p>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div
        className="absolute inset-x-0 bottom-[-1px] h-16 rounded-t-[70%] bg-white"
        aria-hidden="true"
      />
    </section>
  );
}