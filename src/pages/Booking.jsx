import React, { useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { services, brand } from "../data/content";
import { submitForm } from "../utils/submitForm";
import { trackEvent } from "../utils/analytics";
import "./Booking.css";
import useSEO from "../hooks/useSEO";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  service: "consultation",
  country: "",
  date: "",
  time: "",
  message: "",
};

const ENDPOINT = process.env.REACT_APP_BOOKING_FORM_ENDPOINT;

export default function Booking() {
  useSEO("Book a Consultation", "Book a free travel and visa consultation with a Vingel Travels advisor.");
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await submitForm(ENDPOINT, {
        _subject: `New consultation booking from ${form.name}`,
        ...form,
        serviceTitle: services.find((s) => s.slug === form.service)?.title || form.service,
      });
      setStatus("success");
      trackEvent("book_consultation_submitted", { service: form.service, country: form.country });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Book Consultation
          </span>
          <h1>Let's map out your journey</h1>
          <p>Tell us where you're headed. An advisor will confirm your slot within one business day.</p>
        </div>
      </div>

      <div className="container booking-layout">
        <form className="booking-form" onSubmit={submit}>
          {status === "success" ? (
            <div className="booking-success">
              <h3>Request received</h3>
              <p>
                Thank you, {form.name.split(" ")[0] || "traveler"}. A Vingel advisor will
                reach out on {form.phone || "your provided contact"} to confirm your
                consultation.
              </p>
              <a href={brand.whatsappHref} className="btn btn-primary" target="_blank" rel="noreferrer">
                Message us on WhatsApp now
              </a>
            </div>
          ) : (
            <>
              {status === "error" && (
                <div className="booking-form-error">
                  <strong>Couldn't send your request.</strong> {error}
                  <br />
                  In the meantime, reach us directly on WhatsApp or phone below.
                </div>
              )}

              <div className="booking-field-row">
                <div className="booking-field">
                  <label>Full name</label>
                  <input required value={form.name} onChange={update("name")} placeholder="Jane Doe" />
                </div>
                <div className="booking-field">
                  <label>Phone / WhatsApp</label>
                  <input required value={form.phone} onChange={update("phone")} placeholder="+234 800 000 0000" />
                </div>
              </div>

              <div className="booking-field">
                <label>Email address</label>
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </div>

              <div className="booking-field-row">
                <div className="booking-field">
                  <label>Service</label>
                  <select value={form.service} onChange={update("service")}>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="booking-field">
                  <label>Preferred country</label>
                  <input value={form.country} onChange={update("country")} placeholder="e.g. Canada" />
                </div>
              </div>

              <div className="booking-field-row">
                <div className="booking-field">
                  <label>Preferred date</label>
                  <input type="date" value={form.date} onChange={update("date")} />
                </div>
                <div className="booking-field">
                  <label>Preferred time</label>
                  <input type="time" value={form.time} onChange={update("time")} />
                </div>
              </div>

              <div className="booking-field">
                <label>Message (optional)</label>
                <textarea rows="4" value={form.message} onChange={update("message")} placeholder="Anything you'd like your advisor to know ahead of time." />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit Booking Request"}
              </button>
            </>
          )}
        </form>

        <aside className="booking-side">
          <h4>Prefer to talk now?</h4>
          <a href={brand.phoneHref} className="booking-side__link">
            <Phone size={16} /> {brand.phone}
          </a>
          <a href={brand.whatsappHref} target="_blank" rel="noreferrer" className="booking-side__link">
            <MessageCircle size={16} /> WhatsApp Support (24/7)
          </a>
          <a href={`mailto:${brand.email}`} className="booking-side__link">
            <Mail size={16} /> {brand.email}
          </a>
          <p className="booking-side__note">{brand.hours}</p>
        </aside>
      </div>
    </div>
  );
}
