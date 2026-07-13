import React from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="navbar__logo" style={{ marginBottom: 18 }}>
            <img src="/logo-mark.png" alt={brand.name} className="navbar__logo-mark" />
            <span className="navbar__logo-text" style={{ color: "var(--color-white)" }}>
              Vingel <em>Travels &amp; Tours</em>
            </span>
          </div>
          <p>
            Your trusted travel partner for unforgettable experiences — over 1,000 happy
            travelers served with a 95% visa success rate.
          </p>
        </div>

        <div className="footer__col">
          <h5>Quick Links</h5>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/booking">Book Now</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer__col">
          <h5>Services</h5>
          <Link to="/services/consultation">Consultation</Link>
          <Link to="/services/visa-assistance">Visa Assistance</Link>
          <Link to="/services/flight-booking">Flight Booking</Link>
          <Link to="/services/study-abroad">Study Abroad</Link>
        </div>

        <div className="footer__col">
          <h5>Contact Us</h5>
          <a href={brand.phoneHref}>{brand.phone}</a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp Support
          </a>
          <span>{brand.location}</span>
        </div>

        <div className="footer__col">
          <h5>Travel Partners</h5>
          <a href="https://bit.ly/4gny4lv" target="_blank" rel="noreferrer noopener">
            Travelstart — Flights
          </a>
          <a href="https://bit.ly/4poICor" target="_blank" rel="noreferrer noopener">
            Viator — Tours
          </a>
          <a href="https://bit.ly/46APrvI" target="_blank" rel="noreferrer noopener">
            Expedia — Hotels
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Vingel Travels &amp; Tours. All rights reserved.</span>
        <div className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
