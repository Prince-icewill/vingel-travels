import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brand, navLinks } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header className={`navbar ${solid ? "navbar--solid" : "navbar--transparent"}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label={brand.name}>
          <img src="/logo-mark.png" alt={brand.name} className="navbar__logo-mark" />
          <span className="navbar__logo-text">
            Vingel <em>Travels &amp; Tours</em>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="navbar__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={brand.phoneHref} className="navbar__phone">
            {brand.phone}
          </a>
          <Link to="/booking" className="btn btn-primary btn-sm">
            Book Consultation
          </Link>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} className="navbar__mobile-link">
            {link.label}
          </Link>
        ))}
        <Link to="/booking" className="btn btn-primary" style={{ marginTop: 12 }}>
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
