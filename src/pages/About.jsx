import React from "react";
import { Link } from "react-router-dom";
import { heroStats, whyChoose, brand, pexels, stockPhotos } from "../data/content";
import "./StaticPage.css";
import "../components/WhyChoose.css";
import useSEO from "../hooks/useSEO";

export default function About() {
  useSEO("About Us", "Learn about Vingel Travels & Tours — our story, our stats, and the principles behind every consultation.");
  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            About us
          </span>
          <h1>Honest guidance, every step of the way</h1>
          <p>
            {brand.name} exists to remove the guesswork from international travel — one
            clear-eyed consultation at a time.
          </p>
        </div>
      </div>

      <div className="container static-section">
        <div className="about-story">
          <div>
            <h2>Our story</h2>
            <p>
              We started {brand.shortName} because too many travelers were spending money
              on visa applications they were never positioned to win — paying for
              paperwork instead of getting honest advice first. Our model flips that:
              every relationship starts with a consultation, not a sales pitch, so
              clients know exactly where they stand before they spend a naira.
            </p>
            <p>
              Since then we've grown into a full-service travel and visa consultancy —
              handling flights, hotels, insurance, study placements, and corporate
              travel — while keeping that original principle intact.
            </p>
          </div>
          <img src={pexels(stockPhotos.consultation, 900)} alt="Vingel Travels advisory session" className="about-story__image" />
        </div>

        <div className="about-stats">
          {heroStats.map((s) => (
            <div className="about-stat" key={s.label}>
              <span>{s.value}</span>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section section--cloud">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our principles</span>
            <h2>What guides every consultation</h2>
          </div>
          <div className="why-grid">
            {whyChoose.map((item) => (
              <div className="why-card" key={item.title}>
                <span className="why-card__icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="static-cta">
        <div className="container static-cta__inner">
          <h2>Let's plan your next trip properly</h2>
          <Link to="/booking" className="btn btn-primary">
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
