import React from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/content";
import "./ComingSoon.css";

export default function ComingSoon({ title = "This page" }) {
  return (
    <div className="coming-soon">
      <div className="container coming-soon__inner">
        <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
          Coming soon
        </span>
        <h1>{title} is in progress</h1>
        <p>
          This section is part of the next build phase for {brand.name}. In the meantime,
          our advisors can answer this directly.
        </p>
        <div className="coming-soon__actions">
          <Link to="/booking" className="btn btn-primary">
            Book Consultation
          </Link>
          <Link to="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
