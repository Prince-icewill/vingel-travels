import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/content";
import useReveal from "../hooks/useReveal";
import Icon from "./Icon";
import "./Services.css";

export default function Services() {
  const ref = useReveal();
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);
  const [active, setActive] = useState(rest[0].slug);
  const activeService = rest.find((s) => s.slug === active);

  return (
    <section className="section" id="services" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Eleven services, one starting point</h2>
          <p>
            Every itinerary is different, but every successful one starts the same way —
            with a clear-eyed consultation.
          </p>
        </div>

        <Link to={`/services/${featured.slug}`} className="service-featured reveal">
          <div className="service-featured__index">01</div>
          <div className="service-featured__text">
            <span className="service-featured__tag">{featured.tag}</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <span className="service-featured__cta">Book your consultation →</span>
          </div>
        </Link>

        <div className="service-editorial reveal">
          <div className="service-editorial__list">
            {rest.map((service, i) => (
              <button
                key={service.slug}
                className={`service-row ${active === service.slug ? "service-row--active" : ""}`}
                onMouseEnter={() => setActive(service.slug)}
                onFocus={() => setActive(service.slug)}
              >
                <span className="service-row__index">{String(i + 2).padStart(2, "0")}</span>
                <span className="service-row__title">{service.title}</span>
                <span className="service-row__arrow">→</span>
              </button>
            ))}
          </div>

          <div className="service-editorial__preview">
            <span className="stamp">
              <Icon name={activeService.icon} size={22} />
            </span>
            <h4>{activeService.title}</h4>
            <p>{activeService.description}</p>
            <ul>
              {activeService.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Link to={`/services/${activeService.slug}`} className="btn btn-primary btn-sm">
              Explore service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
