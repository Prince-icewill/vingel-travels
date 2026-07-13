import React from "react";
import EligibilityChecker from "../components/EligibilityChecker";
import "./StaticPage.css";
import useSEO from "../hooks/useSEO";

export default function EligibilityPage() {
  useSEO("Visa Eligibility Checker", "Check your visa eligibility in under a minute with our free tool.");
  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Free tool
          </span>
          <h1>Visa Eligibility Checker</h1>
          <p>Answer a few quick questions to get a preliminary read on your visa chances.</p>
        </div>
      </div>
      <EligibilityChecker />
    </div>
  );
}
