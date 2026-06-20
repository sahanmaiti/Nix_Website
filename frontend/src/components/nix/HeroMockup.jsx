import { motion } from "framer-motion";

const SETTINGS_IMG = "/images/settings.png";
const MENUBAR_IMG = "/images/menubar.png";

export const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-[1180px] mx-auto" data-testid="hero-mockup">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-x-32 -top-16 -bottom-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#7c2bff]/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Settings window (real screenshot) */}
        <div
          className="relative mx-auto w-full rounded-[18px] border border-white/[0.08] bg-[#0c0c0c] overflow-hidden shadow-[0_60px_140px_-30px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.04),0_0_120px_-30px_rgba(124,43,255,0.18)]"
          data-testid="hero-mockup-settings"
        >
          {/* subtle gradient sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent" />
          <img
            src={SETTINGS_IMG}
            alt="Nix Settings — General preferences"
            className="block w-full h-auto select-none"
            draggable={false}
            loading="eager"
            decoding="async"
          />
          {/* highlight glare */}
          <div className="pointer-events-none absolute -top-px -left-px h-32 w-1/3 bg-gradient-to-br from-white/[0.06] to-transparent" />
        </div>

        {/* Floating Menu Bar (real screenshot) — desktop overlap */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="hidden md:block absolute -right-2 lg:-right-6 -bottom-12 lg:-bottom-20 w-[260px] lg:w-[300px] rounded-[16px] border border-white/[0.1] bg-[#0a0a0a] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.05),0_0_80px_-20px_rgba(124,43,255,0.35)]"
          data-testid="hero-mockup-menubar"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <img
            src={MENUBAR_IMG}
            alt="Nix menu bar — watching 16 apps"
            className="block w-full h-auto select-none"
            draggable={false}
            loading="eager"
            decoding="async"
          />
          <div className="pointer-events-none absolute -top-px -left-px h-20 w-1/2 bg-gradient-to-br from-white/[0.08] to-transparent" />
        </motion.div>

        {/* Mobile: stack menu bar below settings */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="md:hidden mt-5 mx-auto w-[78%] rounded-[14px] border border-white/[0.1] bg-[#0a0a0a] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95)]"
        >
          <img
            src={MENUBAR_IMG}
            alt="Nix menu bar"
            className="block w-full h-auto select-none"
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Soft reflection */}
      <div className="pointer-events-none mx-auto mt-6 h-10 w-[78%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] blur-md" />
    </div>
  );
};
