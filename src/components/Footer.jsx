import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaSeedling,
  FaUsers,
  FaAngleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import footerBg from "../assets/images/footer/herobg.png";
import logo from "../assets/images/footer/logo.png";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Media", to: "/media" },
  { label: "Our Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const whyChooseUs = [
  {
    title: "Trusted & Transparent",
    desc: "Clear Deals, No Hidden Costs",
    Icon: FaShieldAlt,
    iconClass: "bg-[#e66a10]/15 text-[#e66a10] ring-[#e66a10]/30",
  },
  {
    title: "Prime Locations",
    desc: "High Growth Potential",
    Icon: FaMapMarkerAlt,
    iconClass: "bg-sky-400/15 text-sky-300 ring-sky-400/30",
  },
  {
    title: "Wide Property Options",
    desc: "Farmlands, Plots & Commercial",
    Icon: FaSeedling,
    iconClass: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  },
  {
    title: "Expert Guidance",
    desc: "From Selection to Ownership",
    Icon: FaUsers,
    iconClass: "bg-violet-400/15 text-violet-300 ring-violet-400/30",
  },
];

const FooterHeading = ({ children }) => (
  <div className="mb-6 flex flex-col items-center sm:items-start">
    <h3 className="font-semibold text-base text-white">{children}</h3>
    <span className="mt-2 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#e66a10] to-[#f4a300]" />
  </div>
);

const Footer = () => {
  const whatsappMessage =
    "Hello HeyDay Realty, I am interested in your land investment projects. Please share details about available plots and site visit.";

  const whatsappUrl = `https://wa.me/919161554321?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/HeyDayRealty/",
      Icon: FaFacebookF,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/theheydayrealty/",
      Icon: FaInstagram,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@TheHeydayRealty",
      Icon: FaYoutube,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/heyday-realty-8b22663b0/",
      Icon: FaLinkedinIn,
    },
    { label: "WhatsApp", href: whatsappUrl, Icon: FaWhatsapp },
  ];

  return (
    <footer className="bg-[#041b35] text-white overflow-hidden" role="contentinfo">
      {/* CTA Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#041b35]/75"></div>

        <div className="relative wide-container px-5 sm:px-6 lg:px-8 2xl:px-10 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-xl  font-bold leading-tight">
                FIND YOUR NEXT
                <br />
                <span className="text-[#f4a300]">LAND INVESTMENT</span> TODAY
              </h2>

              <p className="text-gray-200 mt-4 max-w-lg mx-auto lg:mx-0 text-[12px]">
                Explore verified agricultural lands, premium plots, and
                high-growth investment opportunities with HeyDay Realty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
              <Link
                to="/projects"
                className="text-center border border-white/10 px-8 py-2 rounded-full font-medium bg-[#b96d1d]  transition duration-300 hover:bg-[#9f5d18]"
                aria-label="Explore our properties"
              >
                Explore Properties
              </Link>

              <Link
                to="/contact"
                className="text-center border border-white/30 px-8 py-2 rounded-full font-medium hover:bg-white hover:text-[#041b35] transition"
                aria-label="Contact our advisor"
              >
                Contact Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#e66a10] to-transparent" />

      {/* Footer Main */}
      <div className="wide-container px-5 sm:px-6 lg:px-8 2xl:px-10 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 2xl:gap-x-14">
          {/* Logo */}
          <div className="text-center sm:text-left flex flex-col justify-center">
            <img
              src={logo}
              alt="HeyDay Realty Pvt. Ltd. Logo"
              className="h-auto w-auto max-h-16 max-w-[180px] object-contain mx-auto sm:mx-0 mb-4"
              loading="lazy"
            />

            <p className="text-[#e66a10] text-xs font-medium">
              Land Investments | Gated Projects
            </p>

            <nav
              className="flex justify-center sm:justify-start gap-3 mt-6"
              aria-label="Social media links"
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:border-[#f4a300] hover:bg-[#f4a300] hover:text-[#041b35]"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <FooterHeading>Quick Links</FooterHeading>

            <nav aria-label="Quick links">
              <ul className="space-y-3 text-gray-400 text-sm">
                {quickLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-1 transition duration-300 hover:text-white hover:translate-x-1"
                    >
                      <FaAngleRight
                        className="hidden sm:block text-[#e66a10] opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0"
                        aria-hidden="true"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Why Choose Us */}
          <div className="text-center sm:text-left">
            <FooterHeading>Why Choose Us</FooterHeading>

            <ul className="space-y-5">
              {whyChooseUs.map(({ title, desc, Icon, iconClass }) => (
                <li
                  key={title}
                  className="flex items-center justify-center sm:justify-start gap-3 text-left"
                >
                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ring-1 ${iconClass}`}
                  >
                    <Icon className="text-base" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <FooterHeading>Contact Us</FooterHeading>

            <address className="not-italic">
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex justify-center sm:justify-start items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[#f4a300]">
                    <FaPhoneAlt className="text-xs" aria-hidden="true" />
                  </span>
                  <a href="tel:+919161554321" className="hover:text-white transition">
                    +91-9161554321
                  </a>
                </li>

                <li className="flex justify-center sm:justify-start items-center gap-3 break-all">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[#f4a300]">
                    <FaEnvelope className="text-xs" aria-hidden="true" />
                  </span>
                  <a
                    href="mailto:theheydayrealty@gmail.com"
                    className="hover:text-white transition"
                  >
                    theheydayrealty@gmail.com
                  </a>
                </li>

                <li className="flex justify-center sm:justify-start gap-3 text-left">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[#f4a300]">
                    <FaMapMarkerAlt className="text-xs" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">
                    Nakaha No.1, 323-G, First Floor, Sports College, Gorakhnath
                    Rd, Uttar Pradesh, India
                  </span>
                </li>
              </ul>
            </address>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 mt-6 bg-[#6fa72d] hover:bg-[#5f9226] px-6 py-3 rounded-lg text-white text-sm font-medium shadow-lg shadow-[#6fa72d]/20 transition duration-300 hover:-translate-y-0.5"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          <nav
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-gray-500 text-sm"
            aria-label="Legal links"
          >
            <span>&copy; 2026 HeyDay Realty Pvt. Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/terms-condition" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
