"use client";
import { useEffect, useState } from "react";
import { NixLogo } from "./NixLogo";
import { ArrowDownToLine } from "lucide-react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="nav-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-full border border-white/[0.08] px-4 py-2.5 backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "bg-black/60" : "bg-white/[0.02]"
          }`}
        >
          <a href="#top" data-testid="nav-logo-link" className="flex items-center">
            <NixLogo />
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[13px] text-white/65">
            <a href="#features" className="hover:text-white transition-colors" data-testid="nav-link-features">
              Features
            </a>
            <a href="#how" className="hover:text-white transition-colors" data-testid="nav-link-how">
              How it works
            </a>
            <a href="#why" className="hover:text-white transition-colors" data-testid="nav-link-why">
              Why Nix
            </a>
            <a href="#faq" className="hover:text-white transition-colors" data-testid="nav-link-faq">
              FAQ
            </a>
          </nav>

          <a
            href="#download"
            data-testid="nav-download-btn"
            className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-1.5 text-[13px] font-medium hover:bg-white/90 active:bg-white/80 transition-colors"
          >
            <ArrowDownToLine className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
      </div>
    </header>
  );
};
