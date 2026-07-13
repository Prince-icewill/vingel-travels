import React from "react";
import { Link } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>Ready to start your visa journey?</h2>
          <p>Book a consultation and get a clear, honest roadmap — no obligation.</p>
        </div>
        <div className="cta-band__actions">
          <Link to="/booking" className="btn btn-light">
            Speak With an Advisor
          </Link>
          <a href="https://wa.me/2348036386134" className="btn btn-ghost on-dark" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
