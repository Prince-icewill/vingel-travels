import React from "react";
import { galleryImages, pexels } from "../data/content";
import "./StaticPage.css";
import useSEO from "../hooks/useSEO";

export default function Gallery() {
  useSEO("Gallery", "Photos from Vingel Travels & Tours — our office, our clients, and the destinations we've helped travelers reach.");
  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Gallery
          </span>
          <h1>Moments from the journey</h1>
          <p>Our office, our clients, and the destinations we've helped travelers reach.</p>
        </div>
      </div>

      <div className="container static-section">
        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <div className="gallery-item" key={img.photoId}>
              <img src={pexels(img.photoId, 600)} alt={img.caption} />
              <span className="gallery-item__caption">{img.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
