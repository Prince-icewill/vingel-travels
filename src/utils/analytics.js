// Google Analytics 4 setup for a single-page app.
//
// Setup:
// 1. Create a GA4 property at https://analytics.google.com
// 2. Copy your Measurement ID (looks like G-XXXXXXXXXX)
// 3. Add it to .env as REACT_APP_GA_MEASUREMENT_ID
// 4. Restart `npm start` (or redeploy on Vercel after adding it there too)
//
// If no ID is configured, analytics silently does nothing — safe for local
// development without polluting your real GA data.

const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
let initialized = false;

export function initAnalytics() {
  if (!GA_ID || initialized) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  // send_page_view is handled manually via trackPageView on route change instead
  gtag("config", GA_ID, { send_page_view: false });
}

export function trackPageView(path) {
  if (!GA_ID || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(action, params = {}) {
  if (!GA_ID || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}
