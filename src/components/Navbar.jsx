import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/footer/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    // Hysteresis: become floating past 50px, only return to flat below
    // 20px. The functional setScrolled form means this never fires a
    // re-render (and never re-subscribes the listener) when the state
    // hasn't actually changed, and rAF-throttling means we evaluate at
    // most once per paint instead of once per scroll event.
    const evaluate = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 50) return true;
        if (prev && y < 20) return false;
        return prev;
      });
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(evaluate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    evaluate(); // sync immediately in case the page loads already scrolled

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

  // Only paint/composite properties here — nothing that can trigger a
  // layout reflow. max-width, width, height and scale are deliberately
  // excluded from every transition list in this file.
  const MORPH =
    "transition-[border-radius,background-color,border-color,box-shadow,backdrop-filter] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-[padding] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "px-3 sm:px-4 py-3 sm:py-4" : "px-0 py-0"
        }`}
        role="banner"
      >
        {/* No transition class on this wrapper on purpose. max-width
            swaps instantly (not animated) when `scrolled` flips — since
            the header is always `fixed` (out of flow), this never
            touches document height or scrollY, so it can't feed back
            into the scroll listener. The two visual end states are
            identical to before; only the "how" changed. */}
        <div
          className={`mx-auto ${
            scrolled ? "max-w-7xl" : "max-w-full"
          }`}
        >
          <div
            className={`flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8 border ${MORPH} ${
              scrolled
                ? "rounded-full bg-white/15 backdrop-blur-xl border-white/20 shadow-lg"
                : "rounded-none bg-white backdrop-blur-none border-transparent shadow-none"
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

      {/* Constant height. Never toggled, never transitioned. This is the
          entire fix for the flicker: it reserves the flat header's
          space in normal document flow permanently, so it can never
          change document height and can never feed back into scrollY. */}
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
};

export default Navbar;
