import { NixLogo } from "./NixLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-12" data-testid="footer">
      <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <NixLogo />
          <span className="text-[12px] text-white/35">— Close the window. Quit the app.</span>
        </div>
        <div className="text-[12px] text-white/40 flex items-center gap-6">
          <span>Built on a Mac, for Mac.</span>
          <span className="hidden md:inline">© {new Date().getFullYear()} Nix</span>
        </div>
      </div>
    </footer>
  );
};
