import React from "react";
import { trackEvent } from "../utils/analytics";
import "./TrustBar.css";

// Real affiliate/partner links, sourced directly from the live site.
const partners = [
  {
    name: "Expedia",
    note: "Unlock deals on hotels, flights & more",
    href: "https://bit.ly/46APrvI",
    initial: "E",
    color: "#F7C948",
  },
  {
    name: "Viator",
    note: "Tours & experiences worldwide",
    href: "https://bit.ly/4poICor",
    initial: "V",
    color: "#3B82F6",
  },
  {
    name: "Travelstart",
    note: "Affordable flights & hotel deals",
    href: "https://bit.ly/4gny4lv",
    initial: "T",
    color: "#22C55E",
  },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-bar__head">
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            Trusted partners
          </span>
        </div>
        <div className="trust-bar__grid">
          {partners.map((p) => (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              className="trust-bar__card"
              key={p.name}
              onClick={() => trackEvent("partner_link_click", { partner: p.name })}
            >
              <span className="trust-bar__mark" style={{ background: p.color }}>
                {p.initial}
              </span>
              <strong>{p.name}</strong>
              <span className="trust-bar__note">{p.note}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
