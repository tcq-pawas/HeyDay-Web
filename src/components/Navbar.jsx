import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/footer/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "MEDIA", path: "/media" },
    { name: "ABOUT US", path: "/about" },
    { name: "OUR EXPERT TEAM", path: "/team" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 py-3 sm:py-4" role="banner">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${scrolled ? "scale-[0.98]" : "scale-100"
          }`}
      >
        <div
          className={`rounded-full px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between transition-all duration-500 ${scrolled
              ? "bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg"
              : "bg-white shadow-xl border border-white/30"
            }`}
        >
          {/* Logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)} aria-label="HeyDay Realty Home">
            <img
              src={logo}
              alt="HeyDay Realty Logo"
              className="h-10 sm:h-12 lg:h-14 object-contain"
              loading="eager"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-2" role="menubar">
              {menuItems.map((item) => (
                <li key={item.name} role="none">
                  <NavLink
                    to={item.path}
                    aria-label={`Navigate to ${item.name}`}
                    className={({ isActive }) =>
                      `px-5 py-2.5 rounded-full text-xs  font-medium transition-all duration-300 ${isActive
                        ? "bg-[#c27a1d] text-white shadow-md"
                        : "text-[#08213f] hover:bg-[#f7f2ea]"
                      }`
                    }
                    role="menuitem"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center gap-5">
            <NavLink to="/contact" aria-label="Contact us">
              <button className="bg-[#c27a1d] hover:bg-[#ab6914] text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#f7f2ea] text-[#08213f]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <HiX size={28} aria-hidden="true" /> : <HiMenu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen
              ? "max-h-[600px] opacity-100 mt-3"
              : "max-h-0 opacity-0 mt-0"
            }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-5">
            <ul className="flex flex-col gap-2" role="menu">
              {menuItems.map((item) => (
                <li key={item.name} role="none">
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                    className={({ isActive }) =>
                      `block rounded-xl px-5 py-3 text-base font-medium transition-all ${isActive
                        ? "bg-[#c27a1d] text-white"
                        : "text-[#08213f] hover:bg-[#f7f2ea]"
                      }`
                    }
                    role="menuitem"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)} aria-label="Contact us">
              <button className="w-full mt-5 bg-[#c27a1d] hover:bg-[#ab6914] text-white py-3 rounded-full font-semibold transition-all duration-300">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;