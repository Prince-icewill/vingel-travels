import React, { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? "preloader--hidden" : ""}`} aria-hidden={hidden}>
      <img src="/logo-mark.png" alt="Vingel Travels & Tours" className="preloader__mark" />
      <div className="preloader__bar">
        <span />
      </div>
    </div>
  );
}
