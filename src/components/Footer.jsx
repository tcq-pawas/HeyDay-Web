import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#01152d] via-[#032349] to-[#01152d] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-5 gap-6 items-start">

          <div>
            <h1 className="text-4xl font-bold text-orange-500 leading-none">
              HEYDAY
            </h1>

            <p className="text-blue-400 tracking-[5px] text-sm">
              REALTY
            </p>

            <p className="text-gray-300 mt-6 text-[15px] leading-7 max-w-sm">
              HeyDay Realty is a premium real estate agency dedicated
              to finding your dream home. We pride ourselves on
              transparency, integrity, and excellence.
            </p>

            <div className="flex gap-4 text-2xl mt-6">
              <FaFacebook className="cursor-pointer hover:text-orange-400 duration-300" />
              <FaInstagram className="cursor-pointer hover:text-orange-400 duration-300" />
              <FaLinkedin className="cursor-pointer hover:text-orange-400 duration-300" />
              <FaTwitter className="cursor-pointer hover:text-orange-400 duration-300" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-5">
              Quick Links
            </h1>

            <ul className="space-y-3 text-gray-300 text-[16px]">
              <li className="hover:text-orange-400 cursor-pointer">
                Home
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className="max-w-[180px]">
            <h1 className="text-2xl font-semibold mb-5">
              Our Services
            </h1>

            <ul className="space-y-2 text-gray-300 text-[15px]">
              <li>Residential Properties</li>
              <li>Commercial Properties</li>
              <li>Lands & Plots</li>
              <li>Property Management</li>
              <li>Investment Consulting</li>
            </ul>
          </div>

          <div className="md:col-span-2">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7122.616181334892!2d83.37578599999998!3d26.798317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1781258593204!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full"
            ></iframe>
          </div>

        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl bg-gradient-to-r from-gray-100 to-[#35557f] rounded-full px-6 py-3 border border-orange-500 flex flex-col md:flex-row gap-4 justify-between items-center">

            <h1 className="text-blue-700 text-lg font-semibold text-center md:text-left">
              Ready to find your dream home?
            </h1>

            <button className="bg-gradient-to-r from-[#f15b47] to-[#c83e31] px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 duration-300">
              BOOK A VISIT
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;