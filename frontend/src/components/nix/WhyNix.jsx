import { FadeUp } from "./FadeUp";
import { Check, Minus } from "lucide-react";

const rows = [
  ["Per-app rules", true, false, false],
  ["Grace periods", true, false, false],
  ["Hide mode", true, true, false],
  ["Prompt mode", true, false, false],
  ["Whitelist UI", true, false, true],
  ["Native SwiftUI settings", true, false, false],
  ["No subscription", true, true, true],
  ["No telemetry", true, false, false],
];

const Cell = ({ value }) =>
  value ? (
    <div className="flex items-center justify-center">
      <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center">
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <div className="h-6 w-6 rounded-full border border-white/[0.08] flex items-center justify-center">
        <Minus className="h-3.5 w-3.5 text-white/25" />
      </div>
    </div>
  );

export const WhyNix = () => {
  return (
    <section id="why" className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="why-section">
      <div className="mx-auto max-w-5xl px-5">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">Why Nix</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              The most flexible quit-on-close, ever made.
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-14 rounded-2xl border border-white/[0.07] bg-white/[0.015] overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-4 border-b border-white/[0.06] text-[11px] uppercase tracking-[0.14em] text-white/45">
              <div className="col-span-6">Capability</div>
              <div className="col-span-2 text-center text-white font-medium">Nix</div>
              <div className="col-span-2 text-center">Quitter</div>
              <div className="col-span-2 text-center">DIY Script</div>
            </div>
            {rows.map(([label, a, b, c], i) => (
              <div
                key={i}
                className={`grid grid-cols-12 px-6 py-4 items-center ${
                  i % 2 === 0 ? "bg-white/[0.005]" : ""
                } ${i !== rows.length - 1 ? "border-b border-white/[0.04]" : ""}`}
              >
                <div className="col-span-6 text-[14px] text-white/85">{label}</div>
                <div className="col-span-2">
                  <Cell value={a} />
                </div>
                <div className="col-span-2">
                  <Cell value={b} />
                </div>
                <div className="col-span-2">
                  <Cell value={c} />
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
