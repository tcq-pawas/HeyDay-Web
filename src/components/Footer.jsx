import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import footerBg from "../assets/images/footer/herobg.png";
import logo from "../assets/images/footer/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#041b35] text-white">

      {/* CTA Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#041b35]/75"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-12">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h2 className="text-2xl font-bold leading-tight">
                FIND YOUR NEXT
                <br />
                <span className="text-[#f4a300]">
                  LAND INVESTMENT
                </span>{" "}
                TODAY
              </h2>

              <p className="text-gray-200 mt-4 max-w-lg">
                Explore verified agricultural lands, premium plots,
                and high-growth investment opportunities with
                HeyDay Realty.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="bg-[#b96d1d] hover:bg-[#9f5d18] px-8 py-4 rounded-full font-medium transition"
              >
                Explore Properties
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#041b35] transition"
              >
                Contact Advisor
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div>

            <img
              src={logo}
              alt="HeyDay Realty"
              className="h-16 mb-4"
            />

            <p className="text-[#e66a10] text-sm">
              Land Investments | Gated Projects
            </p>

            <div className="flex gap-4 mt-6">

              <a href="#">
                <FaFacebookF className="text-lg hover:text-[#f4a300]" />
              </a>

              <a href="#">
                <FaInstagram className="text-lg hover:text-[#f4a300]" />
              </a>

              <a href="#">
                <FaYoutube className="text-lg hover:text-[#f4a300]" />
              </a>

              <a href="#">
                <FaWhatsapp className="text-lg hover:text-[#f4a300]" />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>

          </div>

          {/* Helpful Links */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Helpful Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Land Investment Guide</li>
              <li>Legal Documentation</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Site Visit</li>
            </ul>

          </div>

          {/* Property Types */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Property Types
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Agricultural Land</li>
              <li>Farmhouse Plots</li>
              <li>Residential Plots</li>
              <li>Investment Lands</li>
              <li>Commercial Land</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex gap-3 items-center">
                <FaPhoneAlt />
                9161554321
              </li>

              <li className="flex gap-3 items-center">
                <FaEnvelope />
                info@heydayrealty.in
              </li>

              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1" />
                Gorakhpur, Uttar Pradesh, India
              </li>

            </ul>

            <a
              href="https://wa.me/919161554321"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#6fa72d] hover:bg-[#5f9226] px-5 py-3 rounded-lg text-white text-sm"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-gray-500 text-sm">
          © 2026 HeyDay Realty. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;