import React from "react";
import { brand } from "../data/content";
import "./StaticPage.css";
import useSEO from "../hooks/useSEO";

export default function Privacy() {
  useSEO("Privacy Policy", "How Vingel Travels & Tours collects, uses, and protects your information.");
  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Legal
          </span>
          <h1>Privacy Policy</h1>
        </div>
      </div>
      <div className="container legal-content">
        <p className="legal-content__updated">Last updated: July 2026</p>

        <h2>1. Information we collect</h2>
        <p>
          When you book a consultation, request a quote, or contact us, we collect
          information such as your name, phone number, email address, and details
          relevant to your travel or visa application (e.g. destination, purpose of
          travel, passport details you choose to share).
        </p>

        <h2>2. How we use your information</h2>
        <p>
          We use your information to provide consultation and booking services, respond
          to enquiries, prepare visa and travel documentation on your behalf, and share
          relevant updates about your application or booking.
        </p>

        <h2>3. Sharing of information</h2>
        <p>
          We share information with relevant third parties only where necessary to
          deliver a service you've requested — for example, an airline for flight
          bookings, a hotel for reservations, an insurance provider, or an embassy for
          visa submissions.
        </p>

        <h2>4. Data security</h2>
        <p>
          We take reasonable technical and organizational measures to protect your
          information from unauthorized access, loss, or misuse.
        </p>

        <h2>5. Your rights</h2>
        <p>
          You can request access to, correction of, or deletion of your personal
          information at any time by contacting us at {brand.email}.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about this policy can be directed to {brand.email} or {brand.phone}.
        </p>
      </div>
    </div>
  );
}
