import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { destinations, brand, pexels, stockPhotos } from "../data/content";
import useSEO from "../hooks/useSEO";
import "./DetailPage.css";
import "./CountryDetail.css";

export default function CountryDetail() {
  const { slug } = useParams();
  const country = destinations.find((d) => d.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);
  useSEO(
    country ? `${country.name} Visa Guide` : undefined,
    country ? `${country.name} visa requirements, fees, processing time (${country.visaTime}), and embassy information.` : undefined
  );

  if (!country) return <Navigate to="/destinations" replace />;

  return (
    <div className="country-page">
      <div className="country-hero">
        <img
          src={pexels(country.photoId, 1800)}
          alt={`${country.name} landmark`}
          className="country-hero__image"
        />
        <div className="country-hero__scrim" />
        <div className="container country-hero__content">
          <Link to="/destinations" className="detail-hero__back">
            ← All destinations
          </Link>
          <span className="country-hero__region">{country.region}</span>
          <h1>{country.name}</h1>
          <p>{country.overview}</p>
          <Link to="/booking" className="btn btn-primary">
            Book Consultation
          </Link>
        </div>
      </div>

      <div className="container country-quickfacts">
        <div className="quickfact">
          <span>Processing time</span>
          <strong>{country.visaTime}</strong>
        </div>
        <div className="quickfact">
          <span>Visa fee (from)</span>
          <strong>{country.fee}</strong>
        </div>
        <div className="quickfact">
          <span>Best time to visit</span>
          <strong>{country.bestTime}</strong>
        </div>
        <div className="quickfact">
          <span>Embassy</span>
          <strong>{country.embassy}</strong>
        </div>
      </div>

      <div className="container country-body">
        <div className="country-main">
          <section className="detail-block">
            <h2>Visa requirements</h2>
            <ul className="detail-points">
              {country.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section className="detail-block">
            <h2>Weather &amp; travel tips</h2>
            <p className="country-text">
              <strong>Typical weather:</strong> {country.weather}
            </p>
            <p className="country-text">
              Pack according to season, carry printed copies of every document even when
              submitting digitally, and confirm your appointment slot 48 hours in advance.
            </p>
          </section>

          <section className="detail-block">
            <h2>Popular cities</h2>
            <div className="country-cities">
              {country.cities.map((city) => (
                <span className="country-city-chip" key={city}>
                  {city}
                </span>
              ))}
            </div>
          </section>

          <section className="detail-block">
            <h2>Gallery</h2>
            <div className="country-gallery">
              <img src={pexels(country.photoId, 600)} alt={`${country.name} landmark`} />
              <img src={pexels(stockPhotos.passportPlanner, 600)} alt="Travel planning essentials" />
              <img src={pexels(stockPhotos.consultation, 600)} alt="Advisor consultation" />
            </div>
          </section>

          <section className="detail-block">
            <h2>Frequently asked questions</h2>
            <div className="country-faqs">
              {country.faqs.map((faq, i) => (
                <div className={`country-faq ${openFaq === i ? "country-faq--open" : ""}`} key={faq.q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {faq.q}
                    <span>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <p>{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="detail-side">
          <div className="detail-side__card">
            <h4>Apply for {country.name} with confidence</h4>
            <p>Book a consultation and get a document checklist built for your exact case.</p>
            <Link to="/booking" className="btn btn-primary" style={{ width: "100%" }}>
              Book Consultation
            </Link>
            <Link to="/#eligibility" className="btn btn-ghost" style={{ width: "100%" }}>
              Check Eligibility
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
