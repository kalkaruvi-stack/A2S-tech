

import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");

  const services = [
    "Automotive connectivity and infotainment",
    "Automotive EMC and full-vehicle antenna testing",
    "Automotive radar",
    "Electric drivetrain component testing",
    "In-vehicle networks and ECU testing",
  ];

  const navLinks = ["About", "Services", "Training & Development", "Projects"];

  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper${scrolled ? " scrolled" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <a href="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9" />
              <path
                d="M2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-primary">
              AS2 <span>TECH</span>
            </span>
            {/* <span className="logo-sub">Solutions & Innovation</span> */}
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link}
              className={link === "Services" ? "services-link" : ""}
              ref={link === "Services" ? servicesRef : null}
            >
              <a
                href="#"
                className={active === link ? "active" : ""}
                onClick={() =>
                  setActive(active === "Services" ? "About" : link)
                }
              >
                {link}
              </a>

              {/* Services Dropdown */}
              {link === "Services" && active === "Services" && (
                <div className="services-dropdown">
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setActive("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className={active === link ? "active" : ""}
            onClick={() => {
              setActive(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-cta"
          onClick={() => {
            setActive("Contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;


