import React, { useMemo, useState } from "react";
import { faqCategories } from "../data/content";
import "./StaticPage.css";
import "./CountryDetail.css";
import useSEO from "../hooks/useSEO";

export default function FAQs() {
  useSEO("Frequently Asked Questions", "Answers to common questions about visas, bookings, payments, and support.");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return faqCategories;
    const q = query.toLowerCase();
    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <div className="static-page">
      <div className="directory-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-orange)" }}>
            Support
          </span>
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the questions we hear most, grouped by topic.</p>
        </div>
      </div>

      <div className="container static-section">
        <div className="faq-search">
          <input
            type="text"
            placeholder="Search a question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--color-gray-500)" }}>
            No results found — try a different search term, or reach out directly.
          </p>
        )}

        {filtered.map((cat) => (
          <div className="faq-category" key={cat.category}>
            <h3>{cat.category}</h3>
            <div className="country-faqs">
              {cat.items.map((item) => {
                const id = `${cat.category}-${item.q}`;
                const isOpen = open === id;
                return (
                  <div className={`country-faq ${isOpen ? "country-faq--open" : ""}`} key={id}>
                    <button onClick={() => setOpen(isOpen ? null : id)}>
                      {item.q}
                      <span>{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && <p>{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
