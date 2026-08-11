"use client";

import { useEffect } from "react";

/**
 * A lightweight velocity limiter to prevent aggressive trackpad/wheel 
 * scrolling from causing rendering glitches at the top/bottom edges of the page.
 * 
 * It works by passing normal scroll events through entirely untouched,
 * and only intervening when the deltaY exceeds a reasonable maximum (e.g., a fast flick).
 * The excess velocity is softly clamped, preserving the feel of momentum 
 * without allowing the extreme overshoot that breaks fixed/composited layers.
 */
export function ScrollLimiter() {
  useEffect(() => {
    // We do not want to interfere with touch interactions which have their own native physics,
    // nor do we want this to run on the server.
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    // Thresholds
    const MAX_VELOCITY = 120; // Pixel delta threshold for an "aggressive" scroll frame
    const DAMPING = 0.15; // How much of the excess velocity to pass through (soft cap)

    const handleWheel = (e) => {
      // 1. Only intercept pixel-based scrolling (deltaMode === 0). Mouse wheels configured 
      //    to lines (1) or pages (2) should be left alone.
      // 2. Only intercept primarily vertical scrolls.
      // 3. Ignore if the event is already defaultPrevented.
      if (
        e.defaultPrevented ||
        e.deltaMode !== 0 ||
        Math.abs(e.deltaX) > Math.abs(e.deltaY)
      ) {
        return;
      }

      const absY = Math.abs(e.deltaY);

      // If the scroll velocity is within normal bounds, do absolutely nothing.
      if (absY <= MAX_VELOCITY) {
        return;
      }

      // We've detected an extremely fast scroll (e.g., aggressive trackpad flick).
      // Prevent the native browser jump/overshoot for this specific frame.
      e.preventDefault();

      // Calculate the bounded delta.
      const sign = Math.sign(e.deltaY);
      const excess = absY - MAX_VELOCITY;
      const clampedDelta = sign * (MAX_VELOCITY + excess * DAMPING);

      // Apply the clamped movement. 
      // Using 'auto' behavior is critical here because trackpads emit wheel events 
      // at the display refresh rate (e.g., 60-120hz). By updating scrollBy synchronously, 
      // we maintain perfect smoothness without the rubber-banding edge glitch.
      window.scrollBy({ top: clampedDelta, behavior: "auto" });
    };

    // passive: false is required so we can call e.preventDefault()
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}
