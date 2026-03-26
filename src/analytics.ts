/**
 * Lightweight Google Analytics (GA4) helper for the CRA app.
 * - Reads the Measurement ID from REACT_APP_GA_MEASUREMENT_ID
 * - Loads gtag.js once and configures it with manual page_view control
 * - Provides a simple page view helper for SPA compatibility
 */
// Single source of truth: GA is injected in public/index.html with the hardcoded ID.
// Keep this in sync with the inline snippet if the ID changes.
const GA_MEASUREMENT_ID = 'G-ZBJKFN5JVC';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

const ensureGtagGlobals = () => {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  }
};

const injectGtagScript = () => {
  // With inline snippet in index.html, we should never inject again.
  return;
};

export const initAnalytics = () => {
  if (initialized) return;
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  // Inline script sets up dataLayer + gtag + config. If gtag is missing, log a warning.
  if (typeof window.gtag !== 'function') {
    console.warn('Analytics: gtag not present. Ensure inline GA snippet is included in index.html.');
    return;
  }
  ensureGtagGlobals();
  initialized = true;
};

export const trackPageView = (path?: string) => {
  if (!window.gtag) return;
  const page_path =
    path ?? window.location.pathname + window.location.search + window.location.hash;

  window.gtag('event', 'page_view', { page_path });
};

export const getMeasurementId = () => GA_MEASUREMENT_ID;

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (!window.gtag) return;
  window.gtag('event', eventName, params);
};
