import React from "react";
import { whyChoose } from "../data/content";
import useReveal from "../hooks/useReveal";
import Icon from "./Icon";
import "./WhyChoose.css";

export default function WhyChoose() {
  const ref = useReveal();
  return (
    <section className="section section--cloud" ref={ref}>
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Why Vingel</span>
          <h2>Trust, built one honest answer at a time</h2>
          <p>We'd rather tell you the truth about your chances than sell you paperwork you don't need.</p>
        </div>

        <div className="why-grid">
          {whyChoose.map((item, i) => (
            <div className="why-card reveal" key={item.title} style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
              <span className="why-card__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
