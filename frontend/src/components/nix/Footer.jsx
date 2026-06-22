import { NixLogo } from "./NixLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-16 md:py-24" data-testid="footer">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-16">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-2">
              <NixLogo />
            </div>
            <p className="text-[14px] leading-relaxed text-white/50">
              Window management the way Apple should have built it. Crafted with native Swift for peak performance on Apple Silicon.
            </p>
          </div>

          <div className="flex gap-16 md:justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-2">Product</span>
              <a href="#features" className="text-[13px] text-white/60 hover:text-white transition-colors">Features</a>
              <a href="#how" className="text-[13px] text-white/60 hover:text-white transition-colors">How it works</a>
              <a href="#download" className="text-[13px] text-white/60 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-[13px] text-white/60 hover:text-white transition-colors">FAQ</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-2">Connect</span>
              <a href="https://github.com/sahanmaiti" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors">GitHub</a>
              <a href="https://x.com/sahan_maiti" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[12px] text-white/40">
            <span>© {new Date().getFullYear()} Nix. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="mailto:support@nixapp.com" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
            Designed for macOS in California.
          </div>
        </div>
      </div>
    </footer>
  );
};
