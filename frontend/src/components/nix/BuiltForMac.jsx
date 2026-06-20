import { FadeUp } from "./FadeUp";

const stack = ["Swift", "SwiftUI", "AppKit", "Accessibility API", "SMAppService", "AXObserver"];

export const BuiltForMac = () => {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="built-section">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <FadeUp className="lg:col-span-5">
            <div>
              <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">
                Built for macOS
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.05] text-white">
                Native, all the way down.
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-white/60">
                No Electron. No web layer. No background polling. Just Swift, the Accessibility API,
                and event-driven observers — exactly how a Mac utility should be built.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.1] bg-white/[0.02] px-3 py-1 text-[11.5px] font-mono text-white/75"
                    data-testid={`stack-${t}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FF5F56" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#27C93F" }} />
                <span className="ml-3 text-[11px] text-white/45 font-mono">
                  WindowMonitor.swift
                </span>
              </div>
              <pre className="px-6 py-6 text-[12.5px] leading-[1.7] font-mono text-white/85 overflow-x-auto whitespace-pre">
                <code>
                  <span className="text-white/40">{`// Listen for the last window close — no polling.`}</span>
                  {`\n`}
                  <span className="text-white/55">import</span>
                  {` ApplicationServices`}
                  {`\n\n`}
                  <span className="text-white/55">final class</span>
                  <span className="text-white"> WindowMonitor </span>
                  {`{`}
                  {`\n  `}
                  <span className="text-white/55">private let</span> observer:
                  <span className="text-white"> AXObserver</span>
                  {`\n\n  `}
                  <span className="text-white/55">func</span>
                  <span className="text-white"> onLastWindowClosed</span>(app: NSRunningApplication) {`{`}
                  {`\n    `}
                  <span className="text-white/40">{`// Apply per-app rule: Quit · Hide · Ignore · Prompt`}</span>
                  {`\n    `}
                  <span className="text-white/55">let</span> rule = RuleStore.rule(for: app.bundleIdentifier)
                  {`\n    `}
                  <span className="text-white/55">switch</span> rule {`{`}
                  {`\n      `}
                  <span className="text-white/55">case</span> .quit:    app.terminate()
                  {`\n      `}
                  <span className="text-white/55">case</span> .hide:    app.hide()
                  {`\n      `}
                  <span className="text-white/55">case</span> .ignore:  <span className="text-white/40">{`/* no-op */`}</span>
                  {`\n      `}
                  <span className="text-white/55">case</span> .prompt:  NixPrompt.ask(for: app)
                  {`\n    }`}
                  {`\n  }`}
                  {`\n}`}
                </code>
              </pre>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
