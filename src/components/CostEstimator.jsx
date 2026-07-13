import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/content";
import "./Tools.css";

// Rough baseline figures (NGN) per destination — advisors confirm exact figures at booking.
const pricing = {
  Canada: { visa: 200000, insurance: 40000, flight: 900000, hotelPerNight: 70000 },
  "United Kingdom": { visa: 230000, insurance: 45000, flight: 850000, hotelPerNight: 80000 },
  Italy: { visa: 120000, insurance: 35000, flight: 750000, hotelPerNight: 65000 },
  Germany: { visa: 120000, insurance: 35000, flight: 780000, hotelPerNight: 65000 },
  France: { visa: 120000, insurance: 35000, flight: 780000, hotelPerNight: 75000 },
  Belgium: { visa: 120000, insurance: 35000, flight: 800000, hotelPerNight: 70000 },
  Netherlands: { visa: 120000, insurance: 35000, flight: 800000, hotelPerNight: 75000 },
  Australia: { visa: 260000, insurance: 55000, flight: 1200000, hotelPerNight: 70000 },
  "United States": { visa: 250000, insurance: 50000, flight: 950000, hotelPerNight: 90000 },
  "Dubai (UAE)": { visa: 90000, insurance: 25000, flight: 500000, hotelPerNight: 60000 },
  Turkey: { visa: 60000, insurance: 20000, flight: 480000, hotelPerNight: 45000 },
  Malta: { visa: 120000, insurance: 35000, flight: 850000, hotelPerNight: 60000 },
  Ireland: { visa: 180000, insurance: 40000, flight: 900000, hotelPerNight: 75000 },
  Spain: { visa: 120000, insurance: 35000, flight: 780000, hotelPerNight: 65000 },
};

const currency = (n) => `₦${n.toLocaleString("en-NG")}`;

export default function CostEstimator() {
  const [destination, setDestination] = useState("Canada");
  const [nights, setNights] = useState(7);

  const breakdown = useMemo(() => {
    const p = pricing[destination] || pricing.Canada;
    const hotel = p.hotelPerNight * nights;
    const total = p.visa + p.insurance + p.flight + hotel;
    return { visa: p.visa, insurance: p.insurance, flight: p.flight, hotel, total };
  }, [destination, nights]);

  return (
    <section className="section" id="estimator">
      <div className="container tool-layout">
        <div className="tool-intro">
          <span className="eyebrow">Plan your budget</span>
          <h2>Estimate your total trip cost</h2>
          <p>
            A quick blended estimate across visa fees, insurance, flights, and hotel
            nights — helpful for budgeting before your consultation.
          </p>
        </div>

        <div className="tool-card">
          <div className="tool-field-row">
            <div className="tool-field">
              <label>Destination</label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                {destinations.map((d) => (
                  <option key={d.code} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="tool-field">
              <label>Hotel nights</label>
              <input
                type="number"
                min="1"
                max="60"
                value={nights}
                onChange={(e) => setNights(Math.max(1, Number(e.target.value) || 1))}
              />
            </div>
          </div>

          <ul className="estimate-list">
            <li>
              <span>Visa Fee</span>
              <span>{currency(breakdown.visa)}</span>
            </li>
            <li>
              <span>Travel Insurance</span>
              <span>{currency(breakdown.insurance)}</span>
            </li>
            <li>
              <span>Flight (round trip)</span>
              <span>{currency(breakdown.flight)}</span>
            </li>
            <li>
              <span>Hotel ({nights} night{nights > 1 ? "s" : ""})</span>
              <span>{currency(breakdown.hotel)}</span>
            </li>
          </ul>

          <div className="estimate-total">
            <span>Total Estimated Cost</span>
            <span>{currency(breakdown.total)}</span>
          </div>

          <Link to="/booking" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }}>
            Get an Exact Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
