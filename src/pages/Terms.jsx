import React from "react";
import { brand } from "../data/content";
import "./StaticPage.css";
import useSEO from "../hooks/useSEO";

export default function Terms() {
  useSEO("Terms of Service", "Terms of service for Vingel Travels & Tours' travel and visa consultation services.");
  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Legal
          </span>
          <h1>Terms of Service</h1>
        </div>
      </div>
      <div className="container legal-content">
        <p className="legal-content__updated">Last updated: July 2026</p>

        <h2>1. Our services</h2>
        <p>
          {brand.name} provides travel and visa consultation, visa application
          assistance, flight and hotel booking, travel insurance guidance, study abroad
          support, and related travel services. We act as an intermediary and advisor —
          final visa decisions rest solely with the relevant embassy or consulate.
        </p>

        <h2>2. No guarantee of visa approval</h2>
        <p>
          While we maintain a strong success rate through careful documentation and
          guidance, we cannot guarantee the outcome of any visa application, as this
          decision is made exclusively by the relevant government authority.
        </p>

        <h2>3. Fees and payments</h2>
        <p>
          Service fees are communicated transparently before you commit to any paid
          service. Fees paid to third parties (embassies, airlines, insurers) are
          separate from our advisory fees and are non-refundable once submitted, in line
          with each provider's own policy.
        </p>

        <h2>4. Client responsibilities</h2>
        <p>
          You agree to provide accurate, complete information and genuine documents.
          {" "}{brand.shortName} is not responsible for outcomes affected by inaccurate or
          incomplete information provided by the client.
        </p>

        <h2>5. Limitation of liability</h2>
        <p>
          {brand.shortName} is not liable for losses arising from visa refusals, flight
          delays, or third-party service issues beyond our reasonable control.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about these terms can be directed to {brand.email} or {brand.phone}.
        </p>
      </div>
    </div>
  );
}
