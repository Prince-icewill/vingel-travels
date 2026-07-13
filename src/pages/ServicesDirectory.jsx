import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/content";
import Icon from "../components/Icon";
import "./Directory.css";
import "../components/Services.css";
import useSEO from "../hooks/useSEO";

export default function ServicesDirectory() {
  useSEO("All Services", "Every travel and visa service offered by Vingel Travels & Tours, starting with a free consultation.");
  return (
    <div className="directory-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Full directory
          </span>
          <h1>All Services</h1>
          <p>Every service we offer, starting with the consultation that shapes all the rest.</p>
        </div>
      </div>

      <div className="container" style={{ padding: "70px 0 120px" }}>
        <div className="service-grid">
          {services.map((service) => (
            <Link to={`/services/${service.slug}`} className="service-card" key={service.slug}>
              <span className="stamp">
                <Icon name={service.icon} size={22} />
              </span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <span className="service-card__link">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
