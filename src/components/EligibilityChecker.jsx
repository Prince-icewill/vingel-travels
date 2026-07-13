import React, { useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/content";
import { trackEvent } from "../utils/analytics";
import "./Tools.css";

const initial = {
  destination: "",
  purpose: "Tourism",
  savings: "",
  passport: "Yes",
  invitation: "No",
};

export default function EligibilityChecker() {
  const [form, setForm] = useState(initial);
  const [result, setResult] = useState(null);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const check = (e) => {
    e.preventDefault();
    if (!form.destination) {
      setResult({ ok: false, message: "Select a destination to continue." });
      return;
    }

    const savingsValue = Number(form.savings.replace(/[^0-9]/g, "")) || 0;
    let score = 0;
    if (form.passport === "Yes") score += 1;
    if (savingsValue >= 2000000) score += 1;
    if (form.purpose === "Tourism" && form.invitation === "Yes") score += 1;
    if (form.purpose !== "Tourism") score += 1;

    trackEvent("eligibility_check_completed", { destination: form.destination, purpose: form.purpose });

    if (form.passport !== "Yes") {
      setResult({
        ok: false,
        message: "A valid international passport is required before you can apply — start there.",
      });
    } else if (score >= 2) {
      setResult({
        ok: true,
        message: "Based on your answers, you appear eligible to apply.",
      });
    } else {
      setResult({
        ok: "maybe",
        message: "Your case has some gaps an advisor can help you close before applying.",
      });
    }
  };

  return (
    <section className="section section--cloud" id="eligibility">
      <div className="container tool-layout">
        <div className="tool-intro">
          <span className="eyebrow">Free tool</span>
          <h2>Check your visa eligibility in under a minute</h2>
          <p>
            Answer four quick questions to get a preliminary read on your visa chances.
            This is a starting point, not a guarantee — your advisor will confirm the
            details in your consultation.
          </p>
        </div>

        <form className="tool-card" onSubmit={check}>
          <div className="tool-field">
            <label>Destination</label>
            <select value={form.destination} onChange={update("destination")} required>
              <option value="">Select a country</option>
              {destinations.map((d) => (
                <option key={d.code} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div className="tool-field">
            <label>Purpose of travel</label>
            <select value={form.purpose} onChange={update("purpose")}>
              <option>Tourism</option>
              <option>Study</option>
              <option>Work</option>
              <option>Business</option>
              <option>Family Visit</option>
              <option>Medical</option>
            </select>
          </div>

          <div className="tool-field">
            <label>Available savings (₦)</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="e.g. 5,000,000"
              value={form.savings}
              onChange={update("savings")}
            />
          </div>

          <div className="tool-field-row">
            <div className="tool-field">
              <label>Valid passport?</label>
              <select value={form.passport} onChange={update("passport")}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="tool-field">
              <label>Invitation letter?</label>
              <select value={form.invitation} onChange={update("invitation")}>
                <option>No</option>
                <option>Yes</option>
                <option>Not applicable</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }}>
            Check Eligibility
          </button>

          {result && (
            <div className={`tool-result tool-result--${result.ok === true ? "yes" : result.ok === "maybe" ? "maybe" : "no"}`}>
              <p>{result.message}</p>
              {result.ok !== false && (
                <>
                  <span className="tool-result__disclaimer">
                    This is a general indication based on the details you provided, not an
                    embassy decision.
                  </span>
                  <Link to="/booking" className="btn btn-sm btn-primary" style={{ marginTop: 14 }}>
                    Book Consultation
                  </Link>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
