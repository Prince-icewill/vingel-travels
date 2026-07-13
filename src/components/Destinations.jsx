import React from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./Destinations.css";

export default function Destinations() {
  const ref = useReveal();
  return (
    <section className="section" id="destinations" ref={ref}>
      <div className="container">
        <div className="section-head reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", maxWidth: "none", flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="eyebrow">Where we take you</span>
            <h2>14 destinations, one advisor to guide you through all of them</h2>
          </div>
          <Link to="/destinations" className="btn btn-ghost">
            View all destinations
          </Link>
        </div>

        <div className="dest-grid">
          {destinations.map((d, i) => (
            <Link
              to={`/destinations/${d.slug}`}
              className="dest-card reveal"
              key={d.code}
              style={{ transitionDelay: `${(i % 7) * 50}ms` }}
            >
              <div className="dest-card__top">
                <span className="dest-card__code">{d.code}</span>
                <span className="dest-card__time">{d.visaTime}</span>
              </div>
              <h4>{d.name}</h4>
              <p>{d.blurb}</p>
              <span className="dest-card__region">{d.region}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
