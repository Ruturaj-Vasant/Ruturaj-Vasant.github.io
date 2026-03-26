/**
 * Lightweight Google Analytics (GA4) helper for the CRA app.
 * - Reads the Measurement ID from REACT_APP_GA_MEASUREMENT_ID
 * - Loads gtag.js once and configures it with manual page_view control
 * - Provides a simple page view helper for SPA compatibility
 */
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

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
  const existingScript = document.querySelector('script[data-gtag="true"]');
  if (existingScript) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.setAttribute('data-gtag', 'true');
  document.head.appendChild(script);
};

export const initAnalytics = () => {
  if (initialized) return;
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('Analytics disabled: REACT_APP_GA_MEASUREMENT_ID not set.');
    }
    return;
  }

  ensureGtagGlobals();
  injectGtagScript();

  window.gtag?.('js', new Date());
  // Disable the automatic page_view so SPA navigation can be tracked manually.
  window.gtag?.('config', GA_MEASUREMENT_ID, { send_page_view: false });

  initialized = true;
};

export const trackPageView = (path?: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  const page_path =
    path ?? window.location.pathname + window.location.search + window.location.hash;

  window.gtag('event', 'page_view', { page_path });
};

export const getMeasurementId = () => GA_MEASUREMENT_ID;

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', eventName, params);
};
