// jest-dom adds custom matchers for asserting on DOM nodes.
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which FadeIn relies on.
// Provide a no-op mock so components using it can render under test.
class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(_callback: IntersectionObserverCallback) {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver;

// jsdom does not implement scrolling APIs used by the app on mount.
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});
