"use client";
import { FadeUp } from "./FadeUp";
import { ArrowDownToLine, Check } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Unlimited apps & rules",
    "Smart whitelist",
    "Custom grace periods",
    "Native SwiftUI interface",
    "Zero telemetry",
  ];

  return (
    <section id="download" className="relative py-32 md:py-44 border-t border-white/[0.06] overflow-hidden" data-testid="pricing-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      </div>
      
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <FadeUp>
          <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">Pricing</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
            A simple tool.
            <br />
            <span className="text-white/45">A simple price.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-16 max-w-[440px] mx-auto bg-gradient-to-b from-[#111113] to-[#0a0a0a] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_16px_60px_rgba(0,0,0,0.4)] rounded-[32px] p-8 md:p-10 text-center flex flex-col items-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-white/90 mb-3">Lifetime License</h3>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl font-bold tracking-tight text-white">$9.99</span>
              </div>
              <div className="text-[13px] text-white/50 mb-6 font-medium">
                One-time purchase
              </div>
              
              <p className="text-[15px] text-white/60 mb-8 leading-relaxed">
                Try Nix free for 7 days. Unlock the full version anytime from within the app. No subscriptions. No accounts. No telemetry.
              </p>

              <ul className="flex flex-col gap-4 text-left w-full mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[15px] text-white/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#download-app"
                data-testid="download-primary-btn"
                className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-[15px] font-medium hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)]"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download Nix
              </a>
              <p className="text-[12px] text-white/45 mt-5">
                7-day free trial included. Purchase available directly inside Nix.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
