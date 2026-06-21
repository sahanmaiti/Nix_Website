"use client";
import { FadeUp, Stagger, StaggerItem } from "./FadeUp";
import { Radar, GitBranch, Power } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Radar,
    title: "Detect",
    body:
      "Nix observes window lifecycle events through the macOS Accessibility API. The moment an app's last window closes, Nix knows.",
    detail: "AXObserver · Event-driven · Zero polling",
  },
  {
    n: "02",
    icon: GitBranch,
    title: "Decide",
    body:
      "Each app gets its own rule. Quit, Hide, Ignore, or Prompt. Add a grace period in case a new window opens within seconds.",
    detail: "Per-app rules · Configurable grace",
  },
  {
    n: "03",
    icon: Power,
    title: "Act",
    body:
      "Nix sends a clean termination — the same as ⌘Q. Apps handle their own shutdown safely. Nothing is force-killed.",
    detail: "Native termination · Safe by design",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="how-section">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">How it works</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              Three steps. Invisible to you.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/60">
              Nix runs quietly in the menu bar. It only acts when you do.
            </p>
          </div>
        </FadeUp>

        <Stagger className="mt-16 grid md:grid-cols-3 gap-5" stagger={0.1}>
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 hover:border-white/[0.15] hover:bg-white/[0.025] transition-all duration-500 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/[0.02] blur-3xl group-hover:bg-white/[0.04] transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="h-10 w-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center">
                      <s.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[11px] font-mono text-white/30">{s.n}</span>
                  </div>
                  <h3 className="text-[22px] font-medium tracking-tight text-white mb-3">{s.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/60 mb-6">{s.body}</p>
                  <div className="text-[11px] font-mono text-white/35 uppercase tracking-wider">
                    {s.detail}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
