"use client";
import { FadeUp, Stagger, StaggerItem } from "./FadeUp";
import {
  Power,
  Sliders,
  Timer,
  ShieldCheck,
  Pause,
  EyeOff,
  Rocket,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Power,
    title: "Automatic Quitting",
    body: "When the last window closes, Nix gracefully quits the app. Just like ⌘Q.",
    span: "md:col-span-2",
  },
  {
    icon: Sliders,
    title: "Per-App Rules",
    body: "Quit, Hide, Ignore, or Prompt — set the behavior for every app individually.",
  },
  {
    icon: Timer,
    title: "Grace Period",
    body: "Configurable delay before quitting, in case a new window opens.",
  },
  {
    icon: EyeOff,
    title: "Whitelist",
    body: "Keep specific apps running forever. Background daemons stay untouched.",
  },
  {
    icon: Pause,
    title: "Pause Mode",
    body: "One click pauses all monitoring. Resume whenever.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    body: "No analytics. No usage tracking. One network call for license validation only.",
    span: "md:col-span-2",
  },
  {
    icon: Rocket,
    title: "Launch at Login",
    body: "Install once. Nix runs quietly in the menu bar from boot.",
  },
  {
    icon: Cpu,
    title: "Native Performance",
    body: "Written entirely in Swift. Event-driven. Near-zero CPU usage.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="features-section">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">Features</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              Small app.
              <br />
              <span className="text-white/45">Big control.</span>
            </h2>
          </div>
        </FadeUp>

        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.06}>
          {features.map((f, i) => (
            <StaggerItem key={i} className={f.span || ""}>
              <div
                className="group relative h-full min-h-[180px] rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-500 overflow-hidden"
                data-testid={`feature-card-${i}`}
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/[0.02] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-full flex flex-col">
                  <div className="h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center mb-5">
                    <f.icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-[17px] font-medium tracking-tight text-white mb-2">{f.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-white/55">{f.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
