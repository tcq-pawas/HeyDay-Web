import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import footerBg from "../assets/images/footer/herobg.png";
import logo from "../assets/images/footer/logo.png";

const Footer = () => {
  const whatsappMessage =
    "Hello HeyDay Realty, I am interested in your land investment projects. Please share details about available plots and site visit.";

  const whatsappUrl = `https://wa.me/919161554321?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
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

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <img
              src={logo}
              alt="HeyDay Realty Pvt. Ltd. Logo"
              className="h-16 mx-auto sm:mx-0 mb-4"
              loading="lazy"
              width="200"
              height="64"
            />

            <p className="text-[#e66a10] text-xs">
              Land Investments | Gated Projects
            </p>

            <nav className="flex justify-center sm:justify-start gap-5 mt-6" aria-label="Social media links">
              <a href="https://www.facebook.com/HeyDayRealty/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-lg hover:text-[#f4a300] transition" />
              </a>

              <a href="https://www.instagram.com/theheydayrealty/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-lg hover:text-[#f4a300] transition" />
              </a>

              <a href="https://www.youtube.com/@TheHeydayRealty" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="text-lg hover:text-[#f4a300] transition" />
              </a>

              <a href="https://www.linkedin.com/in/heyday-realty-8b22663b0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-lg hover:text-[#f4a300] transition" />
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="text-lg hover:text-[#f4a300] transition" />
              </a>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4 text-sm">Quick Links</h3>

            <nav aria-label="Quick links">
              <ul className="space-y-3 text-gray-400 text-xs">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/projects" className="hover:text-white transition">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="/media" className="hover:text-white transition">
                    Media
                  </Link>
                </li>

                <li>
                  <Link to="/team" className="hover:text-white transition">
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link to="/#faq" className="hover:text-white transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-sm mb-4">Services</h3>

            <nav aria-label="Services">
              <ul className="space-y-3 text-gray-400 text-xs">
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Agricultural Land
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Residential Plots
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Property Consultation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Documentation Support
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Site Visit Assistance
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Investment Advisory
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Property Types */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-sm mb-4">Property Types</h3>

            <nav aria-label="Property types">
              <ul className="space-y-3 text-gray-400 text-xs">
                <li>
                  <Link to="/projects" className="hover:text-white transition">
                    Agricultural Land
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white transition">
                    Farmhouse Plots
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white transition">
                    Residential Plots
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white transition">
                    Investment Lands
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Commercial Land
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-sm mb-4">Contact Us</h3>

            <address className="not-italic">
              <ul className="space-y-4 text-gray-400 text-xs">
                <li className="flex justify-center sm:justify-start items-center gap-3">
                  <FaPhoneAlt aria-hidden="true" />
                  <a href="tel:+919161554321" className="hover:text-white transition">+91-9161554321</a>
                </li>

                <li className="flex justify-center sm:justify-start items-center gap-3 break-all">
                  <FaEnvelope aria-hidden="true" />
                  <a href="mailto:theheydayrealty@gmail.com" className="hover:text-white transition">theheydayrealty@gmail.com</a>
                </li>

                <li className="flex justify-center sm:justify-start gap-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>Nakaha No.1, 323-G, First Floor,
                    Sports College, Gorakhnath Rd,
                    Uttar Pradesh,
                    India</span>
                </li>
              </ul>
            </address>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 mt-6 bg-[#6fa72d] hover:bg-[#5f9226] px-6 py-3 rounded-lg text-white text-sm transition"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          <nav className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-gray-500 text-sm" aria-label="Legal links">
            <span>&copy; 2026 HeyDay Realty Pvt. Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
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