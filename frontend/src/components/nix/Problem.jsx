"use client";
import { FadeUp } from "./FadeUp";
import { X, Check } from "lucide-react";

const DockApp = ({ active, label }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div
      className={`relative h-10 w-10 rounded-lg border border-white/[0.06] ${
        active ? "bg-white/[0.08]" : "bg-white/[0.02]"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white/70">
        {label[0]}
      </div>
    </div>
    <span
      className={`h-1 w-1 rounded-full ${active ? "bg-white" : "bg-transparent"}`}
      aria-hidden
    />
  </div>
);

export const Problem = () => {
  const apps = ["Safari", "Notes", "Preview", "Mail", "Music", "Maps", "Photos"];
  return (
    <section className="relative py-28 md:py-36" data-testid="problem-section">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">The problem</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              Closing a window isn&apos;t the same as quitting an app.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/60 max-w-2xl">
              You close Safari. You close Notes. You close Preview. They look gone — but they&apos;re
              still there, holding memory, draining battery, cluttering your dock. macOS has always
              worked this way. Nix fixes it.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          <FadeUp delay={0.05}>
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 h-full transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.02]" data-testid="problem-before-card">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-7 w-7 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
                  <X className="h-3.5 w-3.5 text-white/60" />
                </div>
                <span className="text-[12px] uppercase tracking-[0.16em] text-white/50">Without Nix</span>
              </div>
              <div className="text-[15px] text-white/80 mb-6 leading-relaxed">
                Seven apps still running. You closed every window an hour ago.
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4">
                <div className="flex items-end justify-center gap-3 flex-wrap">
                  {apps.map((a) => (
                    <DockApp key={a} active label={a} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-white/45">
                  <span>Active background apps</span>
                  <span className="text-white/70">7</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="group rounded-2xl border border-white/[0.1] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 h-full transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.03]" data-testid="problem-after-card">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-7 w-7 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-[12px] uppercase tracking-[0.16em] text-white/70">With Nix</span>
              </div>
              <div className="text-[15px] text-white/85 mb-6 leading-relaxed">
                You closed the windows. The apps are gone. Your Mac feels lighter.
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4">
                <div className="flex items-end justify-center gap-3 flex-wrap">
                  {apps.map((a, i) => (
                    <DockApp key={a} active={i === 0} label={a} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-white/45">
                  <span>Active background apps</span>
                  <span className="text-white">1</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
