import React, { useState } from "react";
import { brand } from "../data/content";
import { submitForm } from "../utils/submitForm";
import { trackEvent } from "../utils/analytics";
import "./StaticPage.css";
import useSEO from "../hooks/useSEO";

const ENDPOINT = process.env.REACT_APP_CONTACT_FORM_ENDPOINT;

export default function Contact() {
  useSEO("Contact Us", "Reach Vingel Travels & Tours by phone, email, or WhatsApp, or send a message directly.");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await submitForm(ENDPOINT, {
        _subject: form.subject ? `Contact form: ${form.subject}` : "New contact form message",
        ...form,
      });
      setStatus("success");
      trackEvent("contact_form_submitted");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Get in touch
          </span>
          <h1>We're here to help</h1>
          <p>Reach us directly, or send a message and an advisor will respond within one business day.</p>
        </div>
      </div>

      <div className="container contact-layout">
        <div className="contact-info">
          <div className="contact-info__item">
            <h5>Phone</h5>
            <a href={brand.phoneHref}>{brand.phone}</a>
          </div>
          <div className="contact-info__item">
            <h5>Email</h5>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </div>
          <div className="contact-info__item">
            <h5>WhatsApp</h5>
            <a href={brand.whatsappHref} target="_blank" rel="noreferrer">
              Chat with an advisor
            </a>
          </div>
          <div className="contact-info__item">
            <h5>Office hours</h5>
            <span>{brand.hours}</span>
          </div>
          <div className="contact-info__item">
            <h5>Location</h5>
            <span>{brand.location}</span>
          </div>
          <div className="contact-map">
            <iframe
              title="Vingel Travels office location"
              src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <h3 style={{ marginBottom: 10 }}>Message sent</h3>
              <p style={{ color: "var(--color-gray-500)" }}>
                Thank you — a Vingel advisor will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              {status === "error" && (
                <div className="booking-form-error">
                  <strong>Couldn't send your message.</strong> {error}
                  <br />
                  Please reach us directly by phone or WhatsApp instead.
                </div>
              )}
              <div className="contact-form-row">
                <div style={{ flex: 1 }}>
                  <label>Full name</label>
                  <input required value={form.name} onChange={update("name")} placeholder="Your name" />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label>Subject</label>
                <input value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
              </div>
              <div>
                <label>Message</label>
                <textarea rows="6" required value={form.message} onChange={update("message")} placeholder="Tell us how we can help" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
