import { FadeUp } from "./FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does Nix force-kill apps?",
    a: "Never. Nix sends a standard termination request — the same signal as pressing ⌘Q. The app handles its own shutdown, saves any unsaved work, and exits cleanly.",
  },
  {
    q: "Will it interfere with apps I want to keep running?",
    a: "No. Add anything to the whitelist (Spotify, Slack, mail clients, background tools) and Nix will leave them alone. You can also set per-app rules: Quit, Hide, Ignore, or Prompt.",
  },
  {
    q: "How much CPU and memory does Nix use?",
    a: "Effectively zero. Nix is event-driven via AXObserver — it doesn't poll. When nothing happens, nothing runs. Idle CPU is 0.0%.",
  },
  {
    q: "Does Nix collect any data?",
    a: "No analytics, no telemetry, no crash reporting, no IP logging. Nix has no network code at all. It cannot send data because it doesn't know how to.",
  },
  {
    q: "Which macOS versions are supported?",
    a: "macOS 13 Ventura and later. Universal binary — runs natively on Apple Silicon and Intel.",
  },
  {
    q: "Is Nix free?",
    a: "Yes. Nix is a free, native utility. No subscription, no account, no cloud — just a small Mac app.",
  },
  {
    q: "Does Nix need Accessibility permissions?",
    a: "Yes. macOS requires Accessibility access for Nix to observe window-close events. Permission is granted once in System Settings — Nix never uses it for anything else.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="faq-section">
      <div className="mx-auto max-w-3xl px-5">
        <FadeUp>
          <div className="text-center">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">FAQ</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              Questions, answered.
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <Accordion type="single" collapsible className="mt-14 rounded-2xl border border-white/[0.07] bg-white/[0.015] divide-y divide-white/[0.05]">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b-0 px-6"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="py-5 text-[15px] text-white hover:no-underline hover:text-white text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-white/65 pb-5 pr-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
};
