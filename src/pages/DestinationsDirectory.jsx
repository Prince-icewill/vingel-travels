import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/content";
import "./Directory.css";
import "../components/Destinations.css";
import useSEO from "../hooks/useSEO";

export default function DestinationsDirectory() {
  useSEO("All Destinations", "14 countries with dedicated visa requirements, embassy info, and travel guidance.");
  const [region, setRegion] = useState("All");
  const regions = useMemo(() => ["All", ...new Set(destinations.map((d) => d.region))], []);
  const filtered = region === "All" ? destinations : destinations.filter((d) => d.region === region);

  return (
    <div className="directory-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Full directory
          </span>
          <h1>All Destinations</h1>
          <p>14 countries, each with dedicated visa requirements, embassy info, and travel guidance.</p>
        </div>
      </div>

      <div className="container" style={{ padding: "50px 0 0" }}>
        <div className="directory-filters">
          {regions.map((r) => (
            <button
              key={r}
              className={`directory-filter ${region === r ? "directory-filter--active" : ""}`}
              onClick={() => setRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: "36px 0 120px" }}>
        <div className="dest-grid">
          {filtered.map((d) => (
            <Link to={`/destinations/${d.slug}`} className="dest-card" key={d.code}>
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
    </div>
  );
}
