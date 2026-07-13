import React, { useEffect, useState } from "react";
import { testimonials } from "../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="section section--dark testimonial-section" id="testimonials">
      <svg className="testimonial-section__divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,20 C1080,60 360,10 0,45 Z" fill="var(--color-white)" />
      </svg>
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Client stories</span>
          <h2>What our travelers say</h2>
          <p>Real experiences from real travelers who chose Vingel Travels.</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card__stars">{"★".repeat(t.rating)}</div>
          <p className="testimonial-card__quote">"{t.text}"</p>
          <div className="testimonial-card__author">
            <span className="testimonial-card__avatar">{t.name.charAt(0)}</span>
            <div>
              <strong>{t.name}</strong>
              <span>{t.location}</span>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              className={`testimonial-dot ${i === index ? "testimonial-dot--active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
