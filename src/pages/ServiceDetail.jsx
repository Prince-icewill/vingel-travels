import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { services, brand } from "../data/content";
import useSEO from "../hooks/useSEO";
import Icon from "../components/Icon";
import "./DetailPage.css";

const genericProcess = [
  { title: "Book a consultation", text: "We review your goals and match you to the right service track." },
  { title: "Gather documentation", text: "You get a clear, personalized checklist — no guesswork." },
  { title: "We handle submission", text: "Your advisor manages filing, follow-ups, and embassy or provider communication." },
  { title: "Confirmation & next steps", text: "You're briefed on outcomes and what comes next in your journey." },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  useSEO(service?.title, service?.description);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== slug && !s.featured).slice(0, 3);

  return (
    <div className="detail-page">
      <div className="detail-hero">
        <div className="container detail-hero__inner">
          <Link to="/services" className="detail-hero__back">
            ← All services
          </Link>
          <span className="stamp detail-hero__stamp">
            <Icon name={service.icon} size={26} />
          </span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <div className="detail-hero__actions">
            <Link to="/booking" className="btn btn-primary">
              Book Consultation
            </Link>
            <a href={brand.whatsappHref} className="btn btn-ghost on-dark" target="_blank" rel="noreferrer">
              Speak With an Advisor
            </a>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <div className="detail-main">
          <section className="detail-block">
            <h2>What's included</h2>
            <ul className="detail-points">
              {service.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          <section className="detail-block">
            <h2>How it works</h2>
            <div className="detail-process">
              {genericProcess.map((step, i) => (
                <div className="detail-process__step" key={step.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="detail-block">
              <h2>Related services</h2>
              <div className="detail-related">
                {related.map((s) => (
                  <Link to={`/services/${s.slug}`} className="detail-related__card" key={s.slug}>
                    <span className="stamp" style={{ width: 44, height: 44 }}>
                      <Icon name={s.icon} size={18} />
                    </span>
                    <div>
                      <h4>{s.title}</h4>
                      <span>Learn more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="detail-side">
          <div className="detail-side__card">
            <h4>Ready to get started?</h4>
            <p>Every service begins with a consultation, so your plan fits your exact situation.</p>
            <Link to="/booking" className="btn btn-primary" style={{ width: "100%" }}>
              Book Consultation
            </Link>
            <a href={brand.phoneHref} className="detail-side__contact">
              <Phone size={15} /> {brand.phone}
            </a>
            <a href={brand.whatsappHref} target="_blank" rel="noreferrer" className="detail-side__contact">
              <MessageCircle size={15} /> WhatsApp Support
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
