"use client";
import { FadeUp } from "./FadeUp";
import { Check } from "lucide-react";

const rows = [
  ["Native SwiftUI UI", true, "Rare"],
  ["Per-app rules", true, "Limited"],
  ["Grace periods", true, "Often Missing"],
  ["Hide Mode", true, "Often Missing"],
  ["Prompt Mode", true, "Rare"],
  ["Accessibility-based detection", true, "Varies"],
  ["Launch at Login", true, "Varies"],
  ["No Telemetry", true, "Varies"],
  ["One-Time Purchase", true, "Varies"],
];

const Cell = ({ value }) =>
  value ? (
    <div className="flex items-center justify-center">
      <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.4)]">
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </div>
    </div>
  ) : null;

export const WhyNix = () => {
  return (
    <section id="why" className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="why-section">
      <div className="mx-auto max-w-5xl px-5">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">Why Nix</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              The most flexible quit-on-close experience for macOS.
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-14 rounded-2xl border border-white/[0.07] bg-white/[0.015] overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-12 px-6 py-4 border-b border-white/[0.06] text-[11px] uppercase tracking-[0.14em] text-white/45">
              <div className="col-span-6 md:col-span-7">Capability</div>
              <div className="col-span-3 md:col-span-2 text-center text-white font-medium">Nix</div>
              <div className="col-span-3 md:col-span-3 text-center">Typical Quit-on-Close Apps</div>
            </div>
            {rows.map(([label, a, b], i) => (
              <div
                key={i}
                className={`grid grid-cols-12 px-6 py-4 items-center transition-colors hover:bg-white/[0.02] ${
                  i % 2 === 0 ? "bg-white/[0.005]" : ""
                } ${i !== rows.length - 1 ? "border-b border-white/[0.04]" : ""}`}
              >
                <div className="col-span-6 md:col-span-7 text-[14px] text-white/85">{label}</div>
                <div className="col-span-3 md:col-span-2">
                  <Cell value={a} />
                </div>
                <div className="col-span-3 md:col-span-3 text-[13px] text-white/40 text-center font-medium">
                  {b}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-10 text-center text-[15px] md:text-[17px] text-white/60 max-w-2xl mx-auto leading-relaxed">
            Nix combines powerful automation, native macOS design, and flexible app-specific control in a single lightweight utility.
          </p>
        </FadeUp>
      </div>
    </section>
  );
};
