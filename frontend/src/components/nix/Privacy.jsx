"use client";
import { FadeUp } from "./FadeUp";
import { Lock } from "lucide-react";

const items = [
  "No analytics",
  "No usage tracking",
  "One network call (license only)",
  "No Nix-hosted accounts",
];

export const Privacy = () => {
  return (
    <section className="relative py-32 md:py-40 border-t border-white/[0.06] overflow-hidden" data-testid="privacy-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <FadeUp>
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-14 w-14 rounded-2xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-md flex items-center justify-center">
              <Lock className="h-5 w-5 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02] text-white">
            Your usage stays
            <br />
            <span className="text-white/45">entirely yours.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-relaxed text-white/60">
            Nix has no analytics SDK, no crash reporter, and no tracking of any kind. The only network activity is a single license check against Lemon Squeezy when you activate — nothing else Nix does ever touches the network.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {items.map((it) => (
              <div
                key={it}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-[14px] font-medium text-white"
                data-testid={`privacy-item-${it}`}
              >
                {it}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
