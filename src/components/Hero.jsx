import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { heroStats, pexels, stockPhotos } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__col-text">
          <div className="hero__badge reveal is-visible">
            <span className="hero__badge-dot" />
            Trusted by 1,000+ travelers worldwide
          </div>

          <h1 className="hero__title reveal is-visible">
            Your trusted
            <br />
            partner for
            <br />
            <em>global travel</em>
            <br />
            &amp; visa solutions
          </h1>

          <p className="hero__subtitle reveal is-visible">
            From your first consultation to touchdown, we plan the route,
            prepare the paperwork, and get you where you're going — with a
            95% visa success rate behind every application.
          </p>

          <div className="hero__actions reveal is-visible">
            <Link to="/booking" className="btn btn-primary">
              Book Consultation
            </Link>
            <Link to="/destinations" className="btn btn-ghost">
              Explore Destinations
            </Link>
          </div>
        </div>

        <div className="hero__col-media reveal is-visible">
          <div className="hero__accent" aria-hidden="true" />
          <div className="hero__photo hero__photo--main">
            <img src={pexels(stockPhotos.passportCompass, 900)} alt="Passport and travel compass" />
          </div>
          <div className="hero__photo hero__photo--small">
            <img src={pexels(stockPhotos.passportPlanner, 700)} alt="Travel planning flat lay" />
          </div>
          <div className="hero__stamp-badge">
            <span className="stamp" style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}>
              <Check size={22} strokeWidth={2.2} />
            </span>
            <div>
              <strong>95%</strong>
              <span>Visa success rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__stats-bar">
        <div className="container hero__stats-bar__inner">
          {heroStats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <svg className="hero__divider" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,90 L0,40 C360,90 1080,0 1440,50 L1440,90 Z" fill="var(--color-white)" />
      </svg>
    </section>
  );
}
