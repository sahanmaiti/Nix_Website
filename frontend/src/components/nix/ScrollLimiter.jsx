/**
 * ScrollLimiter — intentionally a no-op.
 *
 * A previous implementation intercepted wheel events via preventDefault() +
 * window.scrollBy() to clamp fast scroll deltas. This caused the very glitches
 * it was meant to prevent:
 *
 *   1. preventDefault() on a wheel event cancels macOS trackpad momentum
 *      mid-flight. The OS inertia engine expects to keep firing events; cutting
 *      it off produces the visible "snap back" / position jump.
 *
 *   2. Replacing the native scroll with window.scrollBy() for each momentum
 *      frame created double-movement artifacts and fought the browser's own
 *      composited scroll layer.
 *
 * Scroll boundary glitches are now handled entirely in CSS:
 *   - `scroll-smooth` removed from <html> (was causing smooth-scroll to fight
 *     momentum scrolling at boundaries; anchor links use CSS `scroll-behavior`
 *     scoped to the element level instead)
 *   - `overscroll-behavior: none` on <body> via Tailwind's `overscroll-none`
 *     (already present in layout.jsx on the wrapper div) prevents rubber-band
 *     overscroll from compositing artifacts.
 *
 * The component is kept as a shell so the import in providers.jsx doesn't break.
 */
export function ScrollLimiter() {
  return null;
}
