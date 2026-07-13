import React from "react";
import { destinations } from "../data/content";
import "./Marquee.css";

export default function Marquee() {
  const items = destinations.map((d) => d.name);
  const loop = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {loop.map((name, i) => (
          <span className="marquee__item" key={`${name}-${i}`}>
            {name}
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
