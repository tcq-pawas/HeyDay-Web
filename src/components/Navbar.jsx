import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-16 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/20 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "py-5 bg-gradient-to-r from-slate-300 via-[#073976] to-[#000913]"
      }`}
    >
      <div>
        <img
          src={logo}
          alt="Heyday Realty Logo"
          className={`object-contain transition-all duration-500 ${
            scrolled ? "h-12" : "h-16"
          }`}
        />
      </div>

      <div className="flex items-center">
        <ul
          className={`flex gap-10 font-medium text-sm transition-all duration-500 ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <li className="cursor-pointer hover:text-orange-500 transition duration-300">
            <NavLink to="/">HOME</NavLink>
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition duration-300">
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition duration-300">
            <NavLink to="/media">MEDIA</NavLink>
          </li>

          <li className="cursor-pointer hover:text-orange-500 transition duration-300">
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
        </ul>

        <button
          className={`transition-all duration-500 px-6 py-3 rounded font-semibold ml-6 ${
            scrolled
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Navbar;