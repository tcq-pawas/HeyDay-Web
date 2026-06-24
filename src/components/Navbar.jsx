import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "MEDIA", path: "/media" },
    { name: "ABOUT US", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${scrolled ? "scale-[0.98]" : "scale-100"
          }`}
      >
        <div
          className={`rounded-full px-6 lg:px-8 h-20 flex items-center justify-between transition-all duration-500 ${scrolled
              ? "bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg"
              : "bg-white shadow-xl border border-white/30"
            }`}
        >

          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Heyday Realty"
              className="h-14 object-contain"
            />
          </NavLink>

          {/* Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">

              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-[#c27a1d] text-white shadow-md"
                        : "text-[#08213f] hover:bg-[#f7f2ea]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

            </ul>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">

            <div className="text-[#08213f] text-sm font-medium">
              +91 91615 54321
            </div>

            <NavLink to="/contact">
              <button className="bg-[#c27a1d] hover:bg-[#ab6914] text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg">
                Schedule Site Visit
              </button>
            </NavLink>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;