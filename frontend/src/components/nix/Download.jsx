import { FadeUp } from "./FadeUp";
import { ArrowDownToLine } from "lucide-react";

export const Download = () => {
  return (
    <section id="download" className="relative py-32 md:py-44 border-t border-white/[0.06] overflow-hidden" data-testid="download-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-[-0.04em] leading-[1.02] text-white">
            A Mac that behaves
            <br />
            <span className="text-white/45">the way you expect.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-[16px] leading-relaxed text-white/60">
            Free. Native. 2.4 MB. Install in under a minute and never think about background apps
            again.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#download"
              data-testid="download-primary-btn"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-[15px] font-medium hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)]"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Nix
            </a>
            <div className="text-[12.5px] text-white/45">
              Requires macOS 13 or later · Universal binary
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
