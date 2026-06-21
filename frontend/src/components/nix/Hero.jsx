"use client";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { HeroMockup } from "./HeroMockup";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden" data-testid="hero-section">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 opacity-[0.025] mix-blend-screen [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md px-3 py-1 text-[11px] text-white/70 mb-7"
          data-testid="hero-badge"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          For macOS 13 and later · v1.0 available
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.04em] leading-[0.98] text-white"
          data-testid="hero-headline"
        >
          Close the window.
          <br />
          <span className="text-white/45">Quit the app.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/65"
          data-testid="hero-subheadline"
        >
          On macOS, closing the last window doesn&apos;t actually quit the app. Safari, Notes, Preview,
          and dozens more keep running in the background. Nix notices and cleanly quits them — the
          way you expected all along.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.20 }}
          className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/45"
        >
          Perfect for developers, designers, students, and anyone who prefers apps to actually quit when they&apos;re closed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#download"
            data-testid="hero-download-btn"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-[14px] font-medium hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download for macOS
          </a>
          <a
            href="#how"
            data-testid="hero-secondary-btn"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.02] text-white px-5 py-3 text-[14px] font-medium hover:bg-white/[0.06] hover:border-white/[0.2] transition-all"
          >
            See how it works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 text-[12px] text-white/40"
        >
          7-day free trial · Native SwiftUI · No telemetry · 2.4 MB
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-20 md:mt-24"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
};
