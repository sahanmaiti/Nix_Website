import { motion } from "framer-motion";

const SETTINGS_IMG = "/images/settings.png";
const MENUBAR_IMG = "/images/menubar.png";

export const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto" data-testid="hero-mockup">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-x-32 -top-16 -bottom-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-[#7c2bff]/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      {/* 
        The provided images (Settings.png and Menubar.png) are fully composed 3600x2338 canvases.
        Because they share the exact same dimensions, layering them directly ensures perfect relative positioning.
        We scale the container to ~180% of the viewport width to crop out the massive transparent padding 
        baked into the PNGs, making the actual UI content the focal point at 70-80% visual width.
      */}
      <div className="relative mx-auto w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
        <div className="relative w-[220%] -ml-[60%] md:w-[180%] md:-ml-[40%] lg:w-[160%] lg:-ml-[30%] -mt-[2%] -mb-[12%]">
          
          {/* Settings Window */}
          <motion.img
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            src={SETTINGS_IMG}
            alt="Nix Settings"
            className="block w-full h-auto select-none drop-shadow-2xl"
            draggable={false}
            loading="eager"
            decoding="async"
          />

          {/* Menubar Popover */}
          <motion.img
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            src={MENUBAR_IMG}
            alt="Nix Menubar"
            className="absolute inset-0 w-full h-auto select-none drop-shadow-xl"
            draggable={false}
            loading="eager"
            decoding="async"
          />
          
        </div>
      </div>

      {/* Soft reflection */}
      <div className="pointer-events-none mx-auto mt-2 h-10 w-[78%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] blur-md" />
    </div>
  );
};
