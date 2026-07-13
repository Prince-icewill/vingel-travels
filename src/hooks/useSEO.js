import { useEffect } from "react";

const SITE_NAME = "Vingel Travels & Tours";
const DEFAULT_DESCRIPTION =
  "Vingel Travels & Tours — premium visa consultation, flight booking, and travel planning. 1,000+ travelers served, 95% visa success rate.";

// Updates the browser tab title and meta description on route change.
// This helps Google indexing (Googlebot executes JS and reads the DOM),
// but does NOT fix social-media link previews (WhatsApp/Facebook/Twitter
// bots don't run JS — they only read the static public/index.html). Fixing
// that requires server-side rendering, which is a separate, larger change.
export default function useSEO(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description || DEFAULT_DESCRIPTION);

    // Reset to defaults on unmount so back-navigation doesn't show stale tags
    return () => {
      document.title = SITE_NAME;
      meta.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
