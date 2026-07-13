import React from "react";
import { brand } from "../data/content";
import { trackEvent } from "../utils/analytics";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href={brand.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
    >
      <span className="whatsapp-fab__pulse" />
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.62 4.55 1.7 6.46L4 29l7.72-1.66a12.9 12.9 0 0 0 4.3.74h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.86c-1.5 0-2.98-.4-4.28-1.16l-.3-.18-4.58.98.98-4.47-.2-.32a9.83 9.83 0 0 1-1.5-5.19c0-5.47 4.45-9.92 9.9-9.92 5.45 0 9.9 4.45 9.9 9.92 0 5.47-4.45 9.34-9.92 9.34zm5.4-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.5.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.56-.35z" />
      </svg>
    </a>
  );
}
